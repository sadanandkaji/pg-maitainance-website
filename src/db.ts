import mongoose,{Schema,model} from "mongoose";
mongoose.connect("mongodb+srv://admin:aOum012s2CzoYkV8@cluster0.voq2a.mongodb.net/pg-maintinance")




const userschema=new Schema({
    username:String,
    password:String
})

const pgschema=new Schema({
    pgname:String,
    pgpassword:String
})

const customerschema=new Schema({
    customername:String,
    identitycard:String
    
})



export const usermodel=model("user",userschema);
export const pgmodel=model("pgs" ,pgschema);
export const addcustomermodel=model("customer" ,customerschema);

