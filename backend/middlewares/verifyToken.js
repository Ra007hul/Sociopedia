import jwt from 'jsonwebtoken'

export const verifyToken = async (req,res,next)=>{
    try {
        const token = req.headers['x-access-toke']  
        if(!token){
            res.status(201).json({
                message : "access denied"
            })
        }
        const verified = jwt.verify(token,process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}