import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true,
        minlength:2
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase: true
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