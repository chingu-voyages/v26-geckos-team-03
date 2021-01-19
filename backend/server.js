import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import cardRoutes from './routes/cardRoutes.js'
import userRoutes from './routes/userRoutes.js'


const app =express()
dotenv.config()
app.use(cors())

app.use('/users',userRoutes)
app.use('/cards',cardRoutes)
 
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser:true, useUnifiedTopology:true, 'useCreateIndex':true})
    .then(()=>
        app.listen(PORT,()=>console.log(`Database is connected at port: ${PORT}`))
    ).catch((error)=>console.log(error))

mongoose.set("useFindAndModify", false)