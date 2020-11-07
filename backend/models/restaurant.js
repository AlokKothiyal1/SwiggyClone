const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//geo schema
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


//item schema
const itemSchema = new Schema({
    category:{
        type:String,
        required:true
    },
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
        type:Array,
        required:true
    },
    geometry:geoSchema,
    
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