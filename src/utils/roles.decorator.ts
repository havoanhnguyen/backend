import { SetMetadata } from '@nestjs/common';

export const Roles = (param: string, roles: string | string[]) => SetMetadata('roles', [param, roles]);
