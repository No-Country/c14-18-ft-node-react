import { Router } from "express";
import { CreateAppointment, GetAppointment, createDoctor } from "../controllers/appointmentController.js";

const router = Router();

router.post('/createAppointment', CreateAppointment)
router.post('/getAppointment', GetAppointment)
router.post('/createDoctors', createDoctor)

export default router;