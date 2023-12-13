export const PROVIDE_NAMES = {
  DATABASE_MONGO_CONNECTION: 'DATABASE_MONGO_CONNECTION',
  USER_MODEL: 'USER_MODEL',
};

export const MODEL_NAMES = {
  USER_MODEL: 'User',
};

export const ENVS = {
  LOCAL: 'local',
  PROD: 'prod',
};

export const USER_ALLOW_RES: string[] = [
  '_id',
  'email',
  'phone',
  'address',
  'birthDay',
  'firstName',
  'lastName',
  'createdAt',
  'updatedAt',
];
