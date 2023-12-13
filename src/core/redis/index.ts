import Redis from 'ioredis';
// import logger from '@core/log';
import {
  REDIS_DATABASE_INDEX,
  REDIS_SENTINEL_HOST,
  REDIS_SENTINEL_PORT,
  REDIS_SENTINEL_PASSWORD,
  REDIS_MASTER_NAME,
  REDIS_PASSWORD,
  REDIS_URL,
} from '@config/config';

class RedisClient {
  protected ns = 'redis_client';
  private static instance: RedisClient;

  client: Redis;

  constructor() {
    // wait for ioredis types update
    const retryStrategy = (times) => {
      const delay = Math.min(times * 100, 2000);
      return delay;
    };

    if (REDIS_SENTINEL_HOST) {
      this.client = new Redis({
        sentinels: [{ host: REDIS_SENTINEL_HOST, port: +REDIS_SENTINEL_PORT || 26379 }],
        db: Number(REDIS_DATABASE_INDEX || 0),
        password: REDIS_PASSWORD,
        sentinelPassword: REDIS_SENTINEL_PASSWORD || '',
        name: REDIS_MASTER_NAME,
        retryStrategy,
      });
    } else {
      this.client = new Redis(REDIS_URL, {
        password: REDIS_PASSWORD,
        retryStrategy,
      });
    }
  }

  static getInstance() {
    if (!RedisClient.instance) {
      RedisClient.instance = new RedisClient();
    }
    return RedisClient.instance;
  }
}

const redis = RedisClient.getInstance();
export default redis;
