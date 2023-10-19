import { Router } from "express";
import userControllers from "../controllers/userControllers.js";

const router = Router();

router.get('/all ',userControllers.getAllUser);//esta ruta me permite obtener todos los usuarios registrados.
router.get('/doctor',userControllers.getAllDoctor);//obtiene todos los medicos registrados.

export default router;