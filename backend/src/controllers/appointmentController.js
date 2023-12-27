import { Op } from "sequelize";
import { Appointments } from "../models/appointments.js"
import { Patient } from "../models/user.js";
import AppointmentsDto from "../DTO/appointment.dto.js";
import transport from '../configs/nodemailer.config.js'
import dotenvConfig from '../configs/dotenv.config.js';

export const CreateAppointment = async (req, res) => {
    const { date, location, doctorId, documentId, email } = req.body;
    if (!date || !location || !doctorId || !documentId) return res.status(400).send('datos incompletos');

    const dateNow = new Date().toISOString();
    if (dateNow > date) return res.send('no puedes solicitar un turno de una fecha pasada');

    try {
        const userId = await Patient.findOne({ where: { documentId: req.body.documentId } });
        const createCita = AppointmentsDto.saveAppointment(req, userId);
        const newAppointment = await Appointments.create(createCita);
        console.log(newAppointment)
        console.log(userId.dataValues.id)

        const options = {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };

        if (newAppointment) {
            transport.sendMail({
                from: `Cliniconnect  ${dotenvConfig.NODE.EMAIL}`,
                to: email,
                subject: 'Reserva de su cita en Cliniconnect',
                text: `Se agendo tu cita para el dia ${new Date(req.body.date).toLocaleString('es-ES', options)} en la sede ${req.body.location}`
            })
        } else {
            return res.status(400).send('Hubo un error al enviar el email')
        }


        return res.status(200).send('Registro exitoso');
    } catch (error) {
        return res.status(500).send('Hubo un error en el servidor.');
    }
}

export const GetAppointment = async (req, res) => {
    const user = await Patient.findOne({ where: { documentId: req.body.documentId } })

    try {
        const appointments = await Appointments.findAll({ where: { patientId: user?.dataValues.id } })

        res.status(200).send({ payload: appointments })
    } catch (e) {
        console.log(e)
        res.status(500).send('Hubo un error en el servidor')
    }
}

export const getAvailableAppointments = (req, res) => {
    //logica de traer citas disponibles, es una ruta que qeudar pendiente.
}

export const getAllApointment = async (req, res) => {
    const data = await Appointments.findAll();
    res.send(data)
}

//este controlador, permite traer todo el historial de citas que agendo el usuario.
export const getHistory = async (req, res) => {
    try {
        const fecha = new Date();
        const { userID } = req.body;//obtengo el ID  del usuario registrado;
        const medicalHistory = await Appointments.findAll({ where: { patientId: userID } });
        if (medicalHistory.length === 0) return res.status(200).send({ messages: "no tienes citas registradas" });
        const futureHistory = await Appointments.findAll({ where: { patientId: userID, date: { [Op.gte]: fecha } } });//hago una peticion para obtener todas las futuras citas.
        const lastHistory = await Appointments.findAll({ where: { patientId: userID, date: { [Op.lt]: fecha } } });
        res.status(200).send({ payload: [futureHistory, lastHistory] });
    } catch (error) {
        res.status(500).send('Hubo un error en el servidor.');
    }
}

