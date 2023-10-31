import { Patient } from "../models/user.js";

const getAllUser = async(req,res) =>{
    try {
        const users = await Patient.findAll();
        res.status(200).send({payload:users});
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAllUser
}