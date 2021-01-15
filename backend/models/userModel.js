import mongoose from "mongoose"

const userSchema =mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        minlength:2
    },
    lastName:{
        type:String,
        trim:true,
        minlength:2
    },
    emailAddress:{
        type:String,
        lowercase: true,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
},
{
    timestamps:true
}
)


const userModel =mongoose.model("userModel", userSchema)
export default userModel