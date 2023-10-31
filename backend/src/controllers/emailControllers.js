import transport from "../configs/nodemailer.config.js";
import dotenvConfig from "../configs/dotenv.config.js";



const  sendEmail = async(req,res) =>{
    try {
        const {email,fullname,messages} = req.body;
        if (!email || !fullname || !messages) return res.status(401).send('campos incompletos');
        const result = await transport.sendMail({
            from:"clinica@gmail.com",
            to:`${dotenvConfig.NODE.EMAIL}`,
            subject:"nueva consulta realizada",
            html:`
                <div style:"background-color:#598be7;">
                    <div style:"font-size:20px;color:#fff">CLINICONNECT</div>
                    <b>Nombre: ${fullname}</b>
                    <p>Correo: ${email}</p>
                    <div>
                        ${messages}
                    </div>
                </div>
            `
        });
        console.log(result)
        res.status(200).send({status:"success",messages:"consulta enviada con exito!"})
    } catch (error) {
        res.status(400).send('ah ocurrido un error')
    }
}

export default {
    sendEmail
}