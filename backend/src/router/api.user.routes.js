import { Router } from "express";
import { Patient } from "../models/user.js";

const router = Router();

router.get('/',async(req,res)=>{
    const data = await Patient.findAll();
    res.send({status:"success",payload:data});
})



export default router;