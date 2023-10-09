import express from 'express';
import userRouter from './router/api.user.routes.js';
import { sequelize } from './database/database.js'


async function main() {
    const app = express();
    const PORT = process.env.PORT || 8080;

    app.use(express.urlencoded({ extended: true }));


    app.get('/', (req, res) => {
        res.send('hola mundo')
    });

    app.use('/api/user', userRouter);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully')
        app.listen(PORT, () => console.log(`servidor escuchando en el puerto ${PORT}`));

    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

main()
