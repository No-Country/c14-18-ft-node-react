import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import { CreateAppointment, GetAppointment, createDoctor } from "../controllers/appointmentController.js";

const router = Router();

router.get('/all ',userControllers.getAllUser);//esta ruta me permite obtener todos los usuarios registrados.
router.get('/doctor',userControllers.getAllDoctor);//obtiene todos los medicos registrados.
router.post('/appointment', CreateAppointment)
router.get('/getAppointment', GetAppointment)
router.post('/createDoctors', createDoctor)

export default router;