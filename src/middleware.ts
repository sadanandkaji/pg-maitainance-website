import { Request,Response,NextFunction } from "express"
import Jwt  from "jsonwebtoken"
import { JWT_SECRET } from "./config";


export function usermiddleware(req:Request,res:Response,next:NextFunction){
    
 const token=req.headers["authorization"];
 const  decodedpassword=Jwt.verify(token as string ,JWT_SECRET)

   if(decodedpassword){
    // @ts-ignore
    req.userid=decodedpassword.id
    next()
   }else{
    res.json({
        message:"you have not logged in"
    })
   }

}
    
