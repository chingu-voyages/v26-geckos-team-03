import mongoose from "mongoose"

const cardSchema =mongoose.Schema({
     category: String,
     cardName: String,
     description: String,
     icon:String,
     createdAt:{
         type:Date,
         default: new Date()
     }
})


const cardModel =mongoose.model("cardModel", cardSchema)
export default cardModel