import { Patient } from "../models/user.js";
import { Doctor } from "../models/doctor.js";


const getAllDoctor = async(req,res)=>{
    try {
        const doctors = await Doctor.findAll();
        res.status(200).send({payload:doctors});
    } catch (error) {
        console.log(error);
    }
}

const getAllUser = async(req,res) =>{
    try {
        const users = await Patient.findAll();
        res.status(200).send({payload:users});
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAllDoctor,
    getAllUser
}