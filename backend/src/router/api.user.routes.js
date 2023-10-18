import { Router } from "express";
import userControllers from "../controllers/userControllers.js";

const router = Router();

router.get('/all ',userControllers.getAllUser);
router.get('/doctor',userControllers.getAllDoctor);

export default router;