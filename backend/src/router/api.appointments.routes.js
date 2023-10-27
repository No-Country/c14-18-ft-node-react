import { Router } from "express";
import { CreateAppointment, GetAppointment} from "../controllers/appointmentController.js";

const router = Router();

router.post('/createAppointment', CreateAppointment)
router.post('/getAppointment', GetAppointment)
export default router;