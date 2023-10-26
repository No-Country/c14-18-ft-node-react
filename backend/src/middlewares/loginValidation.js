import jwt from "jsonwebtoken";
import dotenvConfig from "../configs/dotenv.config.js";

export const loggerUserValidation = (req,res,next) =>{
    try {
        const token = req.cookie([dotenvConfig.JWT.NAME]);
        if (!token) return res.send({status:"error",error:"no estas logeado!"});
        const user = jwt.verify(token,dotenvConfig.JWT.SECRET);
        req.user = user;
        next()
    } catch (error) {
        res.status(400).send({status:"error",error:'a ocurrido un error al obtener el endpoint'});
    }

}