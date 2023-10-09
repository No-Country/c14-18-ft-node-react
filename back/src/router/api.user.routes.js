import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.send({status:"success",messages:"hola soy la ruta "})
})



export default router;