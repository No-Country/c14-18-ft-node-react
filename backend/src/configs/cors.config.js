import dotenv from 'dotenv';
dotenv.config();

const corsOptions = {
    credentials: true,
    origin: process.env.CORS_ORIGIN || "http://localhost:3000"
}

export default corsOptions;