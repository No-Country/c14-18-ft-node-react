import jwt from 'jsonwebtoken';
import { Patient } from '../models/user.js';
import { compare } from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();


export const login = async(req,res) =>{
    try {
        const {identityID,password} = req.body;

        if (!identityID || !password) return res.status(400).send({status:"error",message:"valores incompletos!"});
        const user = await Patient.findOne({ where: {documentId:identityID}});//si existe el usuario me retorna los datos o sino null;
        if (!user) return res.send({status:"error",error:"el DNI ingresado es incorrecto o no esta registrado"});
        const passwordValidation = await compare(password, user.password);//comparo las contraseñas 
        if(passwordValidation === false) return res.send({status:"error",error:"la clave ingresada es incorrecta"});
        //construyo el usuario con los valores que necesito,para guarar en la cookie
        const userCredential = {
            name: user.name,
            identity: user.documentId
        };
        //creo el token y guardo las credenciales del usuario.
        const token = jwt.sign(userCredential,process.env.JWT_SECRET,{expiresIn:"1h"});
        //guardo el token en una cookie
        res.cookie(process.env.JWT_NAME,token,{sameSite:'none',secure:true}).send({status:"success",messages:"usuario logeado con exito!"});
    } catch (error) {
        return res.status(500).send({status:"error",error:"Hubo un error en el servidor."});
    };
};