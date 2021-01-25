import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cardRoutes from './routes/cardRoutes.js'
import userRoutes from './routes/userRoutes.js'
const PORT = process.env.PORT || 5000
const app =express()



dotenv.config()
app.use(cors())

app.use('/users',userRoutes)
app.use('/cards',cardRoutes)
 


mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
    .then(()=>
        app.listen(PORT,()=>console.log(`Database is connected at port: ${PORT}`))
    ).catch((error)=>console.log(error))

mongoose.set("useFindAndModify", false)
