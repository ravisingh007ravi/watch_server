import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { router } from './routes/routes.js'



dotenv.config({quiet:true})
const app = express()
const port = process.env.PORT || 8080


mongoose.connect(process.env.URLDB)
    .then(() => console.log('MongoDB Connect'))
    .catch((err) => console.log('err', err.message))

app.use('/', router)


app.listen(port, () => console.log(`Server is Running Port = ${port}`)) 