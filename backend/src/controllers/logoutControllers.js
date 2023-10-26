import dotenvConfig from "../configs/dotenv.config.js";


export const closeSession = (req,res) =>{
    res.clearCookie(dotenvConfig.JWT.NAME).send({status:"success",messages:"usuario deslogeado con exito!"});
}
