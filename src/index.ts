import express from 'express';
import {usermodel} from "./db"
import Jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const JWT_SECRET="sadanan1234"
const app=express();
app.use(express.json())


app.post("/api/v1/signup", async (req,res)=>{
     const username=req.body.username;
     const password=req.body.password;
  
     const hashedpassword= await bcrypt.hash(password,4);

     await usermodel.create({
          username:username,
          password:hashedpassword
     })
     res.json({
          message:"you have signed up"
     })
     
})

app.post("/api/v1/signin", async (req,res)=>{
     const username=req.body.username;
     const password=req.body.username;
    
     const founduser  = await usermodel.findOne({
          username:username
     })
// @ts-ignore
     const decryptedpassword= await bcrypt.compare(password,founduser.password)
  
     if(decryptedpassword){
         const usertoken= Jwt.sign({
          //@ts-ignore
         id:founduser._id.toString()
     },JWT_SECRET)
     res.json({
          usertoken:usertoken
          })
     }
     

})



app.listen(3000);