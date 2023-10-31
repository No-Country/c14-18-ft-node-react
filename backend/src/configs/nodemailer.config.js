import nodemailer from 'nodemailer';
import dotenvConfig from './dotenv.config.js';

//creamos el trasporte con nodemailer para usarlo despues.
const transport = nodemailer.createTransport({
    service:'gmail',
    port:587,
    auth:{
        user: dotenvConfig.NODE.EMAIL,//el correo donde me llega la información.
        pass: dotenvConfig.NODE.PWD//la contraseña generada.
    }
});

export default transport;