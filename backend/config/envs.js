import {} from 'dotenv/config';

export default {
    PORT: process.env.PORT,
    OPEN_API_KEY: process.env.OPEN_API_KEY,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    EMAIL_REGEX: /^\S+@\S+\.\S+$/,
}