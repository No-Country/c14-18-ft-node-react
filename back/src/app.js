import express from 'express';
import userRouter from './router/api.user.routes.js';


const app = express();
const PORT = process.env.PORT || 8080;

app.use( express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('hola mundo')
});

app.use('/api/user',userRouter);


app.listen(PORT,()=>console.log(`servidor escuchando en el puerto ${PORT}`));