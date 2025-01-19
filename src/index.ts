import express from 'express';
import Jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import {pgmodel, usermodel,addcustomermodel} from "./db"
import { JWT_SECRET } from './config';
import { usermiddleware } from './middleware';

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
     const password=req.body.password;
    
     const founduser  = await usermodel.findOne({
          username:username
     })
// @ts-ignore
     const decryptedpassword= await bcrypt.compare(password,founduser.password)
  
     if(decryptedpassword){
         const usertoken= Jwt.sign({
          //@ts-ignore
         id:founduser._id.toString()
         // @ts-ignore
     },JWT_SECRET)
     res.json({
          usertoken:usertoken
          })
     }
})


app.post("/api/v1/addPg",usermiddleware, async (req,res)=>{
     const pgname=req.body.pgname
     const ownerpassword=req.body.ownerpassword

     const hashedownerpassword= await bcrypt.hash(ownerpassword,5)

     await pgmodel.create({
          pgname:pgname,
          pgpassword:hashedownerpassword,
          //@ts-ignore
          userid:req.userid
     })
         
     res.json({
          message:"added pgs"
     })
})


app.get("/api/v1/addPg",usermiddleware, async (req,res)=>{
     //@ts-ignore
     const userid=req.userid
     
     const pgs= await pgmodel.findOne({
          userid
     })
         console.log(pgs)
     res.json({
          //@ts-ignore
         pgs
     })
})
app.delete("/api/v1/addPg",usermiddleware, async (req,res)=>{
     const pgid=req.body.pgid
     await pgmodel.deleteOne({
         _id:pgid,
         //@ts-ignore
         userid:req.userid

     })
         
     res.json({
         message:"delted"
     })
})
app.post("/api/v1/addcustomer",usermiddleware,async (req,res)=>{
     
     const customername=req.body.customername
     const identitycard=req.body.identitycard

     await addcustomermodel.create({
         customername:customername,
         identitycard:identitycard
     })
     res.json({
          message:"added customer"
     })
})



app.listen(3000);