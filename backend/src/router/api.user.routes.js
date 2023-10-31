import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import { loggerUserValidation } from "../middlewares/loginValidation.js";

const router = Router();

router.get('/all',userControllers.getAllUser);//esta ruta me permite obtener todos los usuarios registrados.

export default router;