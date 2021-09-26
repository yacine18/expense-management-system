import jwt from 'jsonwebtoken'

export const generateToken = (user:any) => {
    const jwtSecret:any = process.env.JWT_SECRET
   return jwt.sign({
       id: user.id,
       email: user.email
    }, jwtSecret, {
        expiresIn: '30d'
    })
}