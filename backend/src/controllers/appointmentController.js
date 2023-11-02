import { Appointments } from "../models/appointments.js"
import { Doctor } from "../models/doctor.js";
import { Patient } from "../models/user.js";

export const CreateAppointment = async(req, res) => {

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

    try {
        const appointments = await Appointments.findAll({where: {patientId: user?.dataValues.id}})
        
        res.status(200).send({payload:appointments})
    } catch(e) {
        console.log(e)
        res.status(500).send('Hubo un error en el servidor')
    }


}