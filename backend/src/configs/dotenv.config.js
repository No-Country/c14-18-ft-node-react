import dotenv from 'dotenv';
dotenv.config();

export default {
    JWT:{
        NAME: process.env.JWT_NAME,
        SECRET: process.env.JWT_SECRET
    },
    DB:{
        NAME: process.env.DB_NAME,
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
        HOST: process.env.DB_HOST
    },
    NODE:{
        EMAIL: process.env.NODE_EMAIL,
        PWD: process.env.NODE_PWD
    },
    CORS:{
        ORIGIN: process.env.CORS_ORIGIN
    }
}