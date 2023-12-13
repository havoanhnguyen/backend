import { MODEL_NAMES, PROVIDE_NAMES } from '@app/config/constants';
import { Connection } from 'mongoose';
import { userSchema } from '@modules/users/users.schema';

export const UsersProviders = [
  {
    provide: PROVIDE_NAMES.USER_MODEL,
    useFactory: (connection: Connection) => connection.model(MODEL_NAMES.USER_MODEL, userSchema),
    inject: [PROVIDE_NAMES.DATABASE_MONGO_CONNECTION],
  },
];
