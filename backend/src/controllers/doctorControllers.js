import { Doctor } from "../models/doctor.js";
import { Doctor } from "../models/doctor.js";


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
        const requiredInput = ["name","speciality","location","studies","interest"];//creo un arreglo con los datos que necesito recibir del front.
        for (const inputs of requiredInput) {
            if (!req.body[inputs]) return res.status(400).send(`Missing required field: ${inputs}`);
        }

        const result = await Doctor.create({
            name: req.body.name,
            speciality: req.body.speciality,
            location: req.body.location,
            studies: req.body.studies,
            interest: req.body.interest,
        });
        console.log(result);
        res.status(200).send('doctor guardado con exito!');

    } catch (error) {
        console.log(error);
    }
}
export default {
    getAllDoctor,
    createDoctor
}