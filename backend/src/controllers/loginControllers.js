import jwt from 'jsonwebtoken';
import { Patient } from '../models/user.js';
import { compare } from 'bcrypt';


export const login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        if (!email || !password) return res.status(400).send({status:"error",message:"valores incompletos!"});
        const user = await Patient.findOne({ where: {email:email}});//si existe el usuario me retorna los datos o sino null;
        if (!user) return res.send({status:"error",error:"el usuario no esta registrado"});
        const passwordValidation = await compare(password, user.password);//comparo las contraseñas 
        if(passwordValidation === false) return res.send({status:"error",error:"la clave ingresada es incorrecta"});
        //construyo el usuario con los valores que necesito
        const userCredential = {
            name: user.name,
            identity: user.documentId
        }
        //creo el token y guardo las credenciales del usuario.
        const token = jwt.sign(userCredential,'secretToken2023',{expiresIn:"1d"});
        //guardo el token en una cookie
        res.cookie('cookiename',token,{sameSite:'none',secure:true}).send({status:"success",messages:"usuario logeado con exito!"});
    } catch (error) {
        return res.status(500).send({status:"error",error:"Hubo un error en el servidor."});
    };
};