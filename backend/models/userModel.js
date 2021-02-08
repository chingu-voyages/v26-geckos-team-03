import mongoose from "mongoose"


const userSchema = mongoose.Schema({
    userName:{
        type:String,
        require:[true,"can't be blank"],
        trim:true,
        minlength:2,
        maxlength:20,
        index:true,
    },
    slug:{type: String, slug:"userName"},
    email:{
        type:String,
        require:true,
        unique:[true,"can't be blank"],
        match:[/\S+@\S+\.\S+/, 'is invalid'],
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



const userModel =mongoose.model("users", userSchema)
export default userModel
