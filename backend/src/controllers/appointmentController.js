import { Op } from "sequelize";
import { Appointments } from "../models/appointments.js"
import { Doctor } from "../models/doctor.js";
import { Patient } from "../models/user.js";
import { dataCreate } from "../utils/dateCreate.js";

export const CreateAppointment = async(req, res) => {
    console.log('hola soy la seccion de crear citas');
    console.log(req.body);
    const userId = await Patient.findOne({where: {documentId: req.body.documentId}})
    console.log(userId.dataValues.id)
    console.log(req.body.date)

    try {
        const newAppointment = await Appointments.create({
            date: req.body.date,
            location: req.body.location,
            patientId: userId.dataValues.id,
            doctorId: req.body.doctorId,
        })
    
        console.log(newAppointment)
        return res.status(200).send('Registro exitoso');
    } catch (error) {
        console.log('Ocurrió un error:', error);
        return res.status(500).send('Hubo un error en el servidor.');
    }
}

export const GetAppointment = async(req, res) => {
    const user = await Patient.findOne({where: {documentId: req.body.documentId}})

    console.log(`userId = ${user.dataValues.id}`)

    const appointments = await Appointments.findAll({where: {patientId: user?.dataValues.id}})

    res.status(200).send({payload:appointments})
}

export const getAvailableAppointments = (req,res) =>{

}

export const getAllApointment = async(req,res) =>{
    const data = await Appointments.findAll();
    res.send(data)
}

//este controlador, permite traer todo el historial de citas que agendo el usuario.
export const getHistory = async(req,res) =>{
    try {
        const fecha = new Date();
        const { userID } = req.body;//obtengo el ID  del usuario registrado;
        console.log(userID);
        const medicalHistory = await Appointments.findAll({where: { patientId: userID }});
        if (medicalHistory.length === 0 ) return res.status(200).send({messages:"no tienes citas registradas"});
        const futureHistory = await Appointments.findAll({where: { patientId: userID, date:{[Op.gt]:fecha}}});//hago una peticion para obtener todas las futuras citas.
        const lastHistory = await Appointments.findAll({where: {patientId: userID, date: {[Op.lt]:fecha}}});
        res.status(200).send({payload:[futureHistory,lastHistory]});
    } catch (error) {
        res.status(500).send('Hubo un error en el servidor.');
    }
} 