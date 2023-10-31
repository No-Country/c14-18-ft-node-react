import { Router } from "express";
import {login} from "../controllers/loginControllers.js";
import { register } from "../controllers/registerControllers.js";
import { closeSession } from "../controllers/logoutControllers.js";
import { loggerUserValidation } from "../middlewares/loginValidation.js";

const router = Router();

router.get('/logout',loggerUserValidation,closeSession);

router.post('/login',login);
router.post('/register',register);

export default router;