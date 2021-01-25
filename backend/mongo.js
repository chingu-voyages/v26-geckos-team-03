const mongoose =require('mongoose')

const mongoPath='mongodb+srv://upluke:upluke123@cluster0.gfckv.mongodb.net/<dbname>?retryWrites=true'

module.exports=async()=>{
    await mongoose.connect(mongoPath,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    return mongoose
}