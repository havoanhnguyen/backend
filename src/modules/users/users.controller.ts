import { get, pick } from 'lodash';
import { v4 } from 'uuid';
import { Body, Controller, Get, HttpException, HttpStatus, Post, UseGuards } from '@nestjs/common';
import redis from '@app/core/redis';
import { JoiValidationPipe } from '@app/utils/validate';
import { CreateUserDto, UserSignInDto } from '@modules/users/dto/user.dto';
import { User } from '@modules/users/users.schema';
import { UsersService } from '@modules/users/users.service';
import { userSigninValidate, userSignupValidate } from '@modules/users/users.validate';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { USER_ALLOW_RES } from '@config/constants';
import { ApiTags } from '@nestjs/swagger';
import { isVerified } from '@utils/crypto';
import { signToken } from '@utils/jwt';

@Controller('api/v1/users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findUsers(): Promise<User[]> {
    return this.usersService.findUsers();
  }

  @Post('signup')
  async signup(@Body(new JoiValidationPipe(userSignupValidate)) createUserDto: CreateUserDto): Promise<any> {
    const email = get(createUserDto, 'email');

    if (await this.usersService.findUser({ email })) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    // Todo: should be validate email by send code or link to Email address after create user
    const user = await this.usersService.create(createUserDto);
    return pick(user, USER_ALLOW_RES);
  }

  @Post('signin')
  async signin(@Body(new JoiValidationPipe(userSigninValidate)) userSignInDto: UserSignInDto): Promise<any> {
    const email = get(userSignInDto, 'email');
    const password = get(userSignInDto, 'password');
    const user: any = await this.usersService.findUser({ email });
    if (!user || !isVerified(password, get(user, 'password'))) {
      throw new HttpException('Incorrect username or password', HttpStatus.BAD_REQUEST);
    }

    const sessionId = v4();
    const userId = get(user, '_id');

    // remove all old-serssion if wanna use only one session
    // const sessions = get(await redis.client.scan(0, 'MATCH', `userId:${userId}*`), '1');
    // sessions.map((session: string) => redis.client.del(session));

    const token = signToken({ userId, sessionId });
    const key = `userId:${userId}|sessionId:${sessionId}`;
    await redis.client.hmset(key, { userId, lastUpdate: Date.now() });

    return {
      ...pick(user, USER_ALLOW_RES),
      sessionId,
      token,
    };
  }
}
