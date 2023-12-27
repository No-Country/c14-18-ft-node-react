import transport from "../configs/nodemailer.config.js";
import dotenvConfig from "../configs/dotenv.config.js";

const sendEmail = async (req, res) => {
    try {
        const { email, name, lastname, phone, message } = req.body;
        if (!email || !name || !message) return res.status(401).send('campos incompletos');
        const result = await transport.sendMail({
            from: email,
            to: `${dotenvConfig.NODE.EMAIL}`,
            subject: "Mensaje de contacto",
            html: `
                <div style:"background-color:#598be7;">
                    <div style:"font-size:20px;color:#fff">CLINICONNECT</div>
                    <b>Nombre: ${name} ${lastname}</b>
                    <p>Correo: ${email}</p>
                    <p>Numero: ${phone}</p>
                    <div>
                        ${message}
                    </div>
                </div>
            `
        });
        console.log(result)
        res.status(200).send({ status: "success", messages: "consulta enviada con exito!" })
    } catch (error) {
        res.status(400).send('ah ocurrido un error')
    }
}

export default {
    sendEmail
}