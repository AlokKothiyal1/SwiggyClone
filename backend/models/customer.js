const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})


const itemSchema = new Schema({
    price:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    veg:{
        type:Boolean,
        required:true
    }
})

const orderSchema = new Schema({
    restaurant_id:{
        type:String,
        required:true
    },
    restaurant_name:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    },
    location:[geoSchema],
    address_1:{
        type:String,
        default:""
    },
    address_2:{
        type:String,
        default:""
    },
    date:{
        type:Date,
        default: Date.now()
    },
    items:[itemSchema]

})

const customerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    orders:[orderSchema]
})


module.exports = mongoose.model('Customer',customerSchema)