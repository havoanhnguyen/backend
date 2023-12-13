import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { verifyToken } from '@utils/jwt';
import { Request } from 'express';

const validateRequest = (req: Request): boolean => {
  try {
    const bearerHeader = req.headers.authorization;

    if (!bearerHeader) {
      return false;
    }

    const bearer: string[] = bearerHeader.split(' ');
    if (bearer.length < 2) {
      return false;
    }
    const bearerToken = bearer[bearer.length - 1];

    const user = verifyToken(bearerToken); // { userId, sessionId }
    if (!user) {
      return false;
    }

    // ToDo: validate userInfo or check roles of user in here
    Object.assign(req, { user });
    return true;
  } catch (e) {
    return false;
  }
};

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
