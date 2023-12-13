export const NODE_ENV = process.env.NODE_ENV || 'development';
export const APP_PORT = process.env.APP_PORT || '3000';

// Auth
export const JWT_PUBLIC_KEY = process.env.JWT_PUBLIC_KEY || null;
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || null;
export const JWT_EXPIRES = process.env.JWT_EXPIRES || null;

// Mongo
export const MONGO_URL = process.env.MONGO_URL || '';

// Redis
export const REDIS_URL = process.env.REDIS_URL || '';

export const REDIS_SENTINEL_HOST = process.env.REDIS_SENTINEL_HOST || '';
export const REDIS_SENTINEL_PORT = process.env.REDIS_SENTINEL_PORT || '';
export const REDIS_DATABASE_INDEX = process.env.REDIS_DATABASE_INDEX || '';
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';
export const REDIS_SENTINEL_PASSWORD = process.env.REDIS_SENTINEL_PASSWORD || '';
export const REDIS_MASTER_NAME = process.env.REDIS_MASTER_NAME || '';
