import { Router , Request, Response, NextFunction} from "express";
import { StatusCodes } from 'http-status-codes';

const userRouter = Router();


userRouter.get('/users', (req:Request, res:Response, next:NextFunction)=>{
    const users = [{
        name: 'Fabio'
    }];
    res.status(StatusCodes.OK).send({ users });
})

userRouter.get('/users/:uuid', (req:Request<{ uuid: string}> , res:Response, next:NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
})

userRouter.post('/users', (req:Request, res:Response, next:NextFunction)=>{
    const newUser = req.body;
    res.send(StatusCodes.CREATED).send(newUser);
});

userRouter.put('/users/:uuid', (req:Request<{ uuid: string}> , res:Response, next:NextFunction) =>{
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

userRouter.delete('/users/:uuid', (req:Request<{ uuid: string}> , res:Response, next:NextFunction) =>{
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

export default userRouter;