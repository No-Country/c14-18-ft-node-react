import { Router } from "express";
import { CreateAppointment } from "../controllers/appointmentController.js";
import { GetAppointment } from "../controllers/appointmentController.js";

const routes = Router();

routes.post('/create',CreateAppointment);
routes.get('/all',GetAppointment);

export default routes;