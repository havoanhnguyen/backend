import { Controller, Get } from '@nestjs/common';
import { GetServerDto } from '@modules/servers/dto/server.dto';
import { ServerService } from '@modules/servers/servers.service';
import { ApiTags } from '@nestjs/swagger';


@Controller()
@ApiTags('Server')
export class ServerController {
  constructor(private readonly appService: ServerService) {}

  @Get('api/status')
  getServerStatus(): GetServerDto {
    return this.appService.getServerStatus();
  }
}
