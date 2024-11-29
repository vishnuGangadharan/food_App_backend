import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
    userName:{
        type: String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
         default: "https://www.w3schools.com/w3images/avatar2.png"
    }

},{ timestamps : true })


const User = mongoose.model('User',userSchema)
export default User;