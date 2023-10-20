import { Patient } from '../models/user.js';
import { hash } from 'bcrypt'

export const register = async (req, res) => {

    const requiredFields = ['documentId', 'name', 'lastName', 'email', 'phone', 'password','birthDate','gender', 'address'];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).send(`Missing required field: ${field}`);
        }
    }

    const { documentId } = req.body

    try {
        let patient = await Patient.findOne({ where: { documentId: documentId } })

        //Si el paciente ya existe en la base de datos
        if (patient.dataValues.documentId === documentId) {
            console.log('Este documento de identidad ya esta registrado')
            return res.status(400).send('El documento de identidad ya está registrado');
        } else {
            //Si no existe lo agregamos a la base de datos
            const hashedPassword = await hash(req.body.password, 10)

            //Agregamos el req.body a la base de datos con el metodo create y devolvemos un status 200
            const newPatient = await Patient.create({
                documentId: documentId,
                name: req.body.name,
                last_name: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                birthDate: req.body.birthDate,
                gender: req.body.gender,
                address: req.body.address,
                password: hashedPassword
            })

            console.log(newPatient)
            return res.status(200).send('Registro exitoso');
        }

    } catch (error) {
        console.log('Ocurrió un error:', error);
        return res.status(500).send('Hubo un error en el servidor.');
    }

    //aqui va la logica del registro
    res.send('hola soy el registro');
}