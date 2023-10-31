import jwt from "jsonwebtoken";
import dotenvConfig from "../configs/dotenv.config.js";

export const loggerUserValidation = (req,res,next) =>{
    try {
        const token = req.cookies[dotenvConfig.JWT.NAME];//accedo al token que me envia el front
        if (!token) return res.send({status:"error",error:"necesitas estar logeado"});
        const credentials = jwt.verify(token,dotenvConfig.JWT.SECRET);
        req.user = credentials;
        next()
    } catch (error) {
        res.status(400).send({status:"error",error:'a ocurrido un error al obtener el endpoint'});
    }
}