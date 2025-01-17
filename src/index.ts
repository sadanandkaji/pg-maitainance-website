import express from 'express';
const app=express();

app.put("/api/v1/signup",(req,res)=>{
     const username=req.body.username;
     const password=req.body.password;

     
})