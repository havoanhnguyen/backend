import { get, isEmpty } from 'lodash';
import { PaginateModel } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { signature } from '@utils/crypto';
import { PROVIDE_NAMES } from '@config/constants';
import { User } from '@modules/users/users.schema';
import { CreateUserDto } from '@modules/users/dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PROVIDE_NAMES.USER_MODEL)
    private readonly userModel: PaginateModel<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userData: any = new this.userModel(createUserDto);
    userData.password = signature(get(createUserDto, 'password'));
    userData.fullTextSearch = ['email', 'phone', 'firstName', 'lastName']
      .filter((field: string) => !isEmpty(userData[field]))
      .map((field: string) => userData[field])
      .join(' ');

    return this.userModel.create(userData);
  }

  async findUser(query: any): Promise<User> {
    return this.userModel.findOne(query, null, { lean: true }).exec();
  }

  async findUsers(query: any = {}): Promise<User[]> {
    return this.userModel.find(query, null, { lean: true }).exec();
  }
}
