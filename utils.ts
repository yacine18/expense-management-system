import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

declare module "express" { 
    export interface Request {
      user?: any
    }
  }
export const generateToken = (user:any) => {
    const jwtSecret:any = process.env.JWT_SECRET || '@TRNHGsq14253@://!§§/.Klkfslh+098+7'
   return jwt.sign({
       id: user.id,
       email: user.email
    }, jwtSecret, {
        expiresIn: '30d'
    })
}

export const isAuth = (req:Request, res:Response, next:NextFunction) => {
     const authorization = req.headers.authorization

     if(authorization){
         const token = authorization.slice(7, authorization.length)
         const jwtSecret:any = process.env.JWT_SECRET
         
         jwt.verify(token, jwtSecret, (err:any, decode:any) => {
             if(err){
                res.status(500).json({ message: err.message });
             } else {
                 req.user = decode
                 next()
             }
         })
     } else {
        res.status(500).json({ message: 'Invalid Token' });
     }
}