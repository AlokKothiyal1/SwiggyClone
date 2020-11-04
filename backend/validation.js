const Joi  = require('joi');

const registerationValidation =(data)=>{
    const schema = Joi.object({
        name:Joi.string().min(2).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
        phoneNumber:Joi.string().min(10).pattern(/^[0-9]+$/).required()
    })
    return schema.validate(data);
}

const loginValidation = (data)=>{
    const schema = Joi.object({
    phoneNumber:Joi.string().min(10).pattern(/^[0-9]+$/).required()
    })
    return schema.validate(data);
}

module.exports = {registerationValidation,loginValidation}