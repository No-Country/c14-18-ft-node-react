import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()


export const loggerUserValidation = (req,res,next) =>{
    try {
        const token = req.cookie([process.env.JWT_NAME]);
        if (!token) return res.send({status:"error",error:"no estas logeado!"});
        const user = jwt.verify(token,process.env.JWT_SECRET);
        req.user = user;
        next()
    } catch (error) {
        res.send({status:"error",payload:error});
    }

}