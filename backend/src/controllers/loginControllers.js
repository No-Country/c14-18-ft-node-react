import jwt from 'jsonwebtoken';
import { Patient } from '../models/user.js';
import { compare } from 'bcrypt';
import dotenvConfig from '../configs/dotenv.config.js';


export const login = async (req, res) => {
    try {
        const { documentId, password } = req.body;

        if (!documentId || !password) return res.status(400).send({ status: "error", message: "valores incompletos!" });
        const user = await Patient.findOne({ where: { documentId: documentId } });//si existe el usuario me retorna los datos o sino null;
        if (!user) return res.status(400).send({ status: "error", error: "el DNI ingresado es incorrecto o no esta registrado" });
        const passwordValidation = await compare(password, user.password);//comparo las contraseñas 
        if (passwordValidation === false) return res.status(400).send({ status: "error", error: "la clave ingresada es incorrecta" });
        //construyo el usuario con los valores que necesito,para guarar en la cookie
        const userCredential = {
            name: user.name,
            identity: user.documentId
        };
        //creo el token y guardo las credenciales del usuario.
        const token = jwt.sign(userCredential, dotenvConfig.JWT.SECRET, { expiresIn: "1h" });
        //guardo el token en una cookie
        res.cookie(dotenvConfig.JWT.NAME, token, { sameSite: 'none', secure: true })
        res.status(200).json({ message: 'logged succesfully', userCredential});
    } catch (error) {
        return res.status(500).send({ status: "error", error: "Hubo un error en el servidor." });
    };
};