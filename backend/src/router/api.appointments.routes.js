import { Router } from "express";
import { CreateAppointment, GetAppointment, getAvailableAppointments, getAllApointment, getHistory } from "../controllers/appointmentController.js";
import { loggerUserValidation } from "../middlewares/loginValidation.js";

const router = Router();

// router.get('/getAll',getAllApointment);
router.get('/getAvailableAppointments',getAvailableAppointments);
router.get('/medicalHistory',getHistory);

// router.post(loggerUserValidation);
router.post('/createAppointment', CreateAppointment);
router.post('/getAppointment', GetAppointment);

export default router;