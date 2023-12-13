import crypto from 'crypto';
import { JWT_PRIVATE_KEY, JWT_PUBLIC_KEY } from '@config/config';

const privateKey = JWT_PRIVATE_KEY ? Buffer.from(JWT_PRIVATE_KEY, 'base64') : undefined;
const publicKey = JWT_PUBLIC_KEY ? Buffer.from(JWT_PUBLIC_KEY, 'base64') : undefined;

export const encryptedData = (encryptedData: string) =>
  crypto
    .publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'SHA256',
      },
      Buffer.from(encryptedData),
    )
    .toString('base64');

export const decryptedData = (decryptedData: string) =>
  crypto
    .privateDecrypt(
      {
        key: privateKey,
        // In order to decrypt the data, we need to specify the
        // same hashing function and padding scheme that we used to
        // encrypt the data in the previous step
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'SHA256',
      },
      Buffer.from(decryptedData, 'base64'),
    )
    .toString('utf8');

// The signature method takes the data we want to sign, the
// hashing algorithm, and the padding scheme, and generates
// a signature in the form of bytes
export const signature = (data: string) => {
  const signer = crypto.createSign('SHA256');
  signer.update(data);
  return signer.sign(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    },
    'hex',
  );
};

// To verify the data, we provide the same hashing algorithm and
// padding scheme we provided to generate the signature, along
// with the signature itself, the data that we want to
// verify against the signature, and the public key
export const isVerified = (data: string, signature: string) => {
  const verifier = crypto.createVerify('SHA256');
  verifier.update(data);
  return verifier.verify(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    },
    Buffer.from(signature, 'hex'),
  );
};
