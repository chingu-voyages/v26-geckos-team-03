import mongoose from "mongoose"

const cardSchema =mongoose.Schema({
     cardNo:Number,
     category: String,
     cardName: String,
     description: String,
     icon:String,
},
{
    timestamps:true
})


const cardModel =mongoose.model("cardModel", cardSchema)
export default cardModel