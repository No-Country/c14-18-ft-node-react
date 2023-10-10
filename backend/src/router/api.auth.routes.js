import { Router } from "express";
import {login} from "../controllers/loginControllers.js";
import { register } from "../controllers/registerControllers.js";

const router = Router();

router.post('/login',login);
router.post('/register',register);

export default router;