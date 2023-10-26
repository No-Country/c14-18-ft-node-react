import { Appointments } from "../models/appointments.js"
import { Doctor } from "../models/doctor.js";
import { Patient } from "../models/user.js";

export const CreateAppointment = async(req, res) => {

    try {
        const newAppointment = await Appointments.create({
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            location: req.body.location,
            patientId: req.body.patientId,
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
    console.log(user.dataValues.id)
    const appointments = await Appointments.findAll({where: {patientId: user.dataValues.id}})
    console.log(appointments[1]?.dataValues.doctorId)
    const doctorData = await Doctor.findOne({where: {id: appointments[1]?.dataValues.doctorId}})
    console.log(doctorData)
    res.status(200).send({payload:appointments})
}

export const createDoctor = async(req, res) => {
    try {
        const newDoctor = await Doctor.create({
            name: req.body.name,
            speciality: req.body.speciality,
            location: req.body.location,
            studies: req.body.studies,
            interest: req.body.interest,
            availability: req.body.availability
        })

        console.log(newDoctor)
        return res.status(200).send('Registro exitoso');
    } catch (error) {
        console.log(error);
    }
}