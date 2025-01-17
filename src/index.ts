import express from 'express';
import {usermodel} from "./db"
import{ Jwt }from "jsonwebtoken"
const app=express();
app.use(express.json())
app.post("/api/v1/signup", async (req,res)=>{
     const username=req.body.username;
     const password=req.body.password;
  

     await usermodel.create({
          username:username,
          password:password
     })
     res.json({
          message:"you have signed up"
     })
     
})

app.post("api/v1/signin", async (req,res)=>{
     const username=req.body.username;
     const password=req.body.username;

     const founduser= await usermodel.findOne({
          username:username,
         
     })
  
     if(founduser){
          
          

     }

})

app.post("api/v1/signup",(req,res)=>{

})
app.post("api/v1/signup",(req,res)=>{

})
app.post("api/v1/signup",(req,res)=>{

})
app.post("api/v1/signup",(req,res)=>{

})
app.post("api/v1/signup",(req,res)=>{

})
app.post("api/v1/signup",(req,res)=>{

})
app.post("api/v1/signup",(req,res)=>{

})
app.post("api/v1/signup",(req,res)=>{
     
})

app.listen(3000);