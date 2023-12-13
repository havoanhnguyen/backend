import jwt from 'jsonwebtoken';
import { JWT_PRIVATE_KEY, JWT_PUBLIC_KEY } from '@config/config';

const privateKey = JWT_PRIVATE_KEY ? Buffer.from(JWT_PRIVATE_KEY, 'base64') : undefined;
const publicKey = JWT_PUBLIC_KEY ? Buffer.from(JWT_PUBLIC_KEY, 'base64') : undefined;

export const signToken = (payload: any) =>
  jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    // expiresIn: JWT_EXPIRES,
  });

export const verifyToken = (token: string) => {
  try {
    const tokenDetail: any = jwt.verify(token, publicKey, {
      algorithms: ['RS256'],
      ignoreExpiration: true,
    });

    return tokenDetail;
  } catch (error) {
    throw error;
  }
};
