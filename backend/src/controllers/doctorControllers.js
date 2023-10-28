import { Doctor } from "../models/doctor.js";
import DoctorDTO from "../DTO/doctor.dto.js";

const getAllDoctor = async(req,res)=>{
    try {
        const doctors = await Doctor.findAll();
        res.status(200).send({payload:doctors});
    } catch (error) {
        console.log(error);
    }
}


const createDoctor = async(req,res) =>{
    try {
        const requiredInput = ["name","speciality","location","studies","interest"];//creo un arreglo con los datos que necesito recibir.
        for (const inputs of requiredInput) {
            if (!req.body[inputs]) return res.status(400).send(`Missing required field: ${inputs}`);
        }
        const newDoctor = DoctorDTO.getDoctorCreated(req);//retorna un objeto reconstruido con sus datos.
        const result = await Doctor.create(newDoctor);
        console.log(result);
        res.status(200).send('Registro exitoso');
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAllDoctor,
    createDoctor
}