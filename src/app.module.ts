import { Module } from '@nestjs/common';
import { ServerModule } from '@modules/servers/servers.module';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [ServerModule, UsersModule],
})
export class AppModule {}
