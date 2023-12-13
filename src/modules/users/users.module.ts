import { DatabaseModule } from '@modules/database/database.module';
import { Module } from '@nestjs/common';
import { UsersController } from '@modules/users/users.controller';
import { UsersProviders } from '@modules/users/users.providers';
import { UsersService } from '@modules/users/users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...UsersProviders],
})
export class UsersModule {}
