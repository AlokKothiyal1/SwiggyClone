const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    price:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    veg:{
        type:Boolean,
        required:true
    },
    img_url:{
        type:String,
        required:true
    }
})

const restaurantSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    average_cost:{
        type:Number,
        required:true
    },
    average_time:{
        type:Number,
        required:true
    },
    cuisines:{

    },
    location:{
        type:Array,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },
    veg:{
        type:Boolean,
        required:true
    },
    top_pick:{
        type:Boolean,
        required:true
    },
    exclusive:{
        type:Boolean,
        required:true
    },
    newly_added:{
        type:Boolean,
        required:true
    },
    items:{
        type:[itemSchema],
        required:true
    }


})
module.exports = mongoose.model('Restaurant',restaurantSchema)