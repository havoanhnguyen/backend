import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { GetServerDto } from '@modules/servers/dto/server.dto';

@Injectable()
export class ServerService {
  getServerStatus(): GetServerDto {
    let filepath = 'package.json';
    let i = 0;
    const server: GetServerDto = { status: 'up' };

    do {
      filepath = `${require.main.paths[i].replace(/\/[^\/]*$/, '/')}package.json`;
      i += 1;
    }
    while (!fs.existsSync(filepath) && i < require.main.paths.length);

    const pkg = require(`${filepath}`);
    server.name = pkg.name;
    server.version = pkg.version;
    return server;
  }
}
