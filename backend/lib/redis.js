import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

(async () => {
    try {

        await redis.set('foo', 'bar');
        console.log('Key-value pair set successfully!');
    } catch (error) {
        console.error('Error setting key-value pair:', error);
    }
})();





















