import dotenv from 'dotenv';
dotenv.config();


export const closeSession = (req,res) =>{
    res.clearCookie(process.env.JWT_NAME).send({status:"success",messages:"usuario deslogeado con exito!"});
}
