import transport from "../configs/nodemailer.config.js";
import dotenvConfig from "../configs/dotenv.config.js";

const sendEmail = async (req, res) => {
    try {
        const { email, name, lastname, phone, message } = req.body;
        if (!email || !name || !lastname || !message) return res.status(400).json({ error: 'Campos incompletos' });
        const result = await transport.sendMail({
            from: email,
            to: `${dotenvConfig.NODE.EMAIL}`,
            subject: "Mensaje de contacto",
            html: `
            <!doctype html>
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
            <title></title></head>
            <body>
                <div style:"background-color:#598be7;">
                    <div style:"font-size:30px;font-weight:600;color:#fff">CLINICONNECT</div>
                    <b>Nombre: ${name} ${lastname}</b>
                    <p>Correo: ${email}</p>
                    <p>Numero: ${phone}</p>
                    <div>
                        ${message}
                    </div>
                </div>
                </body>
            `
        });
        console.log(result)
        res.status(200).json({ status: "success", message: "consulta enviada con exito!" })
    } catch (error) {
        res.status(400).json({ error: 'ah ocurrido un error' })
    }
}

export default {
    sendEmail
}