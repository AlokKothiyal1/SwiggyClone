const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const restaurantRouter = require('./routes/restaurant')
const authRouter = require('./routes/auth')
const paymentRouter = require('./routes/payment')

dotenv.config();

const app = express()

app.use(cors());
app.use(express.json());
app.use("/api/customer",authRouter)
app.use("/api/restaurant",restaurantRouter)
app.use('/api/razor',paymentRouter)


mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true},()=>{
    console.log("The database is connected!")
})

app.listen(5000,()=>{
    console.log("Server is Up & Running")
})



