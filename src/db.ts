import mongoose,{Schema,model} from "mongoose";
mongoose.connect("mongodb+srv://admin:aOum012s2CzoYkV8@cluster0.voq2a.mongodb.net/pg-maintinance")




const userschema=new Schema({
    username:String,
    password:String
})


export const usermodel=model("user",userschema);

