import mongoose from "mongoose";

export const connectToDB = async () => {
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/hospital');
        console.log("Connected To mongodb")
    }catch(e){
        console.log(e)
    }
}
