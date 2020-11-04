const express = require('express');
const {loginValidation,registerationValidation} = require('../validation')
const Customer = require('../models/customers')
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const dotenv = require('dotenv')
let userOtp = 123456

dotenv.config();
const client = require('twilio')(accountSid, authToken);

const router = express.Router();

function randomOtp(){
    let otp =""
    for(var i=0;i<6;i++){
     otp+=Math.floor(Math.random()*9)
    }
    return Number(otp)
  }

router.post('/register',async(req,res)=>{
    const {error} = registerationValidation(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    const phoneNumberExists = await Customer.findOne({phoneNumber:req.body.phoneNumber});
    if(phoneNumberExists){
        return res.status(400).send("Phone number already exists")
    }

    const emailExists = await Customer.findOne({email:req.body.email});
    if(emailExists){
        return res.status(400).send("Email already exists in the Database")
    }
    
    try{
        // userOtp = randomOtp()
        // client.messages
        // .create({
        //     body: `OTP for Sweggy registration is ${userOtp}`,
        //     from: '+14696601442',
        //     to: `+91${req.body.phoneNumber}`
        // })
        // .then(message => console.log(message.sid));
        res.status(200).send("OTP sent successfully")
    } catch(err){
        res.status(400).send(err)
    }
})

router.post('/register/verify',async(req,res)=>{

    if(userOtp==Number(req.body.otp)){
        const customer = new Customer({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber :req.body.phoneNumber

    })
        try{
            const savedCustomer = await customer.save();
            res.send(savedCustomer)
        } catch(err){
            res.status(400).send(err)
        }
    }
    else{
        res.status(400).send("Invalid OTP")
    }
})

router.post('/login',async(req,res)=>{
    const {error} = loginValidation(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    const phoneNumberExists = await Customer.findOne({phoneNumber:req.body.phoneNumber});
    if(!phoneNumberExists){
        return res.status(400).send("Phone number does not exists..Sign up")
    }

    try{
        // userOtp = randomOtp()
        // client.messages
        // .create({
        //     body: `OTP for Sweggy registration is ${userOtp}`,
        //     from: '+14696601442',
        //     to: `+91${req.body.phoneNumber}`
        // })
        // .then(message => console.log(message.sid));
        res.status(200).send("OTP sent successfully")
    } catch(err){
        res.status(400).send(err)
    }
})

router.post('/login/verify',async(req,res)=>{

    if(userOtp==Number(req.body.otp)){
        const userData = await Customer.findOne({phoneNumber:req.body.phoneNumber});
        res.status(200).send(userData)
    }
    else{
        res.status(400).send("Invalid OTP")
    }
})

module.exports = router;