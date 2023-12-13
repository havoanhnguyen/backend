import { MONGO_URL } from '@config/config';
import mongoose from 'mongoose';
import { PROVIDE_NAMES } from '@config/constants';

export const databaseProviders = [
  {
    provide: PROVIDE_NAMES.DATABASE_MONGO_CONNECTION,
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(MONGO_URL),
  },
];
