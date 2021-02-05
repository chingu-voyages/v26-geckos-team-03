import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import slug from "mongoose-slug-generator"
import cors from 'cors'
dotenv.config()

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        require:[true,"can't be blank"],
        trim:true,
        minlength:2,
        maxlength:125,
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

userSchema.statics.generateHashPassword=(password)=>{
    if(password){
        const salt=bcrypt.genSaltSync(10)
        const hash=bcrypt.hashSync(password, salt)
        return hash
    }
}

userSchema.methods.validatePassword=(password, hashedPassword)=>{
    let res=bcrypt.compareSync(password, hashedPassword)
    return res
}

userSchema.methods.generateJWT=function(){
    let today=new Date()
    let exp=new Date(doday)
    exp.setDate(today.getDate()+1)
    return jwt.sign(
        {
        id:this._id,
        name:this.name
    },
     process.env.JWT_SECRET,
     {expiresIn:'10h'}
    )
}


const userModel =mongoose.model("users", userSchema)
export default userModel
