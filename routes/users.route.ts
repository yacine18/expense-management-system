import {Request, Response, Router} from 'express'


const userRouter = Router()

userRouter.get('/', async(req:Request, res:Response) => {
    res.send('users api')
})

export default userRouter