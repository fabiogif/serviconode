import express, {Request, Response, NextFunction } from "express";
import statusRoute from "./routes/status.route";
import userRouter from "./routes/users.route";

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(userRouter);
app.use(statusRoute);


app.listen(3000, ()=>{
    console.log('Rodando na 3000')
})