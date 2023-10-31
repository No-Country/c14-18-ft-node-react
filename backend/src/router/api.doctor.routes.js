import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";

const router = Router();

router.get('/doctor',doctorControllers.getAllDoctor);//obtiene todos los medicos registrados.

router.post('/create',doctorControllers.createDoctor);//guarda los medicos en la base de datos.

export default router;