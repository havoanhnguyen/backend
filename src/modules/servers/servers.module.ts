import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { ServerController } from '@modules/servers/servers.controller';
import { ServerService } from '@modules/servers/servers.service';

@Module({
  imports: [UsersModule],
  controllers: [ServerController],
  providers: [ServerService],
})

export class ServerModule {}
