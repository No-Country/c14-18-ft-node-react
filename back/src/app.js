import express from 'express';
import userRouter from './router/api.user.routes.js';
import authRouter from './router/api.auth.routes.js';
import { sequelize } from './database/database.js'
import { Patient } from './models/user.js';
import { Doctor } from './models/doctor.js';
import cors from 'cors'


async function main() {
    const app = express();
    const PORT = process.env.PORT || 8080;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(
        cors({
            credentials: true,
            origin: ["http://localhost:3000"]
        })
    )

    app.get('/', (req, res) => {
        res.send('hola mundo')
    });

    app.use('/api/auth',authRouter);
    app.use('/api/user', userRouter);
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully')
        app.listen(PORT, () => console.log(`servidor escuchando en el puerto ${PORT}`));

    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

main()
