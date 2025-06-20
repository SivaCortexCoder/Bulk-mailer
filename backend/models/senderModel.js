import mongoose from "mongoose";

const senderSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }
},{
    timestamps: true 
})

const senderCredentials = mongoose.model("senderCredentials",senderSchema);

export default senderCredentials;