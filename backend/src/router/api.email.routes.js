import { Router } from "express";
import emailControllers from "../controllers/emailControllers.js";

const routes = Router();

routes.post('/send',emailControllers.sendEmail);

export default routes;