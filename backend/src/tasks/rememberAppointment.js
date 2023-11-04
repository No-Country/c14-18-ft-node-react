import cron from 'node-cron'
import { Appointments } from '../models/appointments.js';
import { Op } from 'sequelize'
import transport from '../configs/nodemailer.config.js'
import dotenvConfig from '../configs/dotenv.config.js';

//Esta tarea manda un correo con un recordatorio si tu cita es para el dia de mañana
//La tarea se ejecutara todos los dias a las 07:00 am
cron.schedule('0 7 * * *', async () => {
    try {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
    
        // Formatea la fecha de mañana en el formato de tu base de datos
        const tomorrowFormatted = tomorrow.toISOString().slice(0, 19).replace('T', ' ');
    
        // Encuentra todas las citas programadas para el día de mañana
        const citas = await Appointments.findAll({
          where: {
            date: {
              [Op.gte]: tomorrowFormatted,
              [Op.lt]: new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000),
            },
          },
        });

        const options = { 
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          };
        
        // Envía correos electrónicos de recordatorio para las citas encontradas
        for (const cita of citas) {
            const mailOptions = {
                from: `Cliniconnect ${dotenvConfig.NODE.EMAIL}`,
                to: 'nocountry1418@gmail.com',
                subject: 'Recordatorio de tu Cita',
                text: `Recuerda que tienes una cita programada para el dia de mañana ${cita.dataValues.date.toLocaleString('es-ES', options)} en la sede ${cita.dataValues.location}.`,
            };
    
            await transport.sendMail(mailOptions);
            console.log(`Correo de recordatorio enviado a alvarord519@gmail.com`);
        }

      } catch (error) {
        console.error('Error al enviar correos de recordatorio:', error);
      }
})