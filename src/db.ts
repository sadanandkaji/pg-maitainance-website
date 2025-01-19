import mongoose,{Schema,model} from "mongoose";
import dotenv  from "dotenv"
dotenv.config()
// @ts-ignore
mongoose.connect(process.env.MONGO_URL)




const userschema=new Schema({
    username:String,
    password:String
})

const pgschema=new Schema({
    pgname:String,
    pgpassword:String,
    userid:{type:mongoose.Types.ObjectId,ref:"user"},
    pgid:{type:mongoose.Types.ObjectId,ref:"pgs"}

})

const customerschema=new Schema({
    customername:String,
    identitycard:String
    
})



export const usermodel=model("user",userschema);
export const pgmodel=model("pgs" ,pgschema);
export const addcustomermodel=model("customer" ,customerschema);

