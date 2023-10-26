import express from 'express';
import userRouter from './router/api.user.routes.js';
import authRouter from './router/api.auth.routes.js';
import doctorRouter from './router/api.doctor.routes.js';
import { sequelize } from './database/database.js'
import appointmentRouter from './router/api.appointments.routes.js'
import corsOptions from './configs/cors.config.js';
import cors from 'cors'

async function main() {
    const app = express();
    const PORT = process.env.PORT || 8080;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors(corsOptions));

    app.get('/', (req, res) => {
        res.send('hola mundo')
    });

    app.use('/api/auth',authRouter);
    app.use('/api/user', userRouter);
    app.use('/api/doctor',doctorRouter);
    app.use('/api/appointment', appointmentRouter)

    try {
        await sequelize.sync();
        console.log('Connection has been established successfully')
        app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

main()
