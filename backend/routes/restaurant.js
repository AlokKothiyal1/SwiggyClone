const express = require('express');
const dotenv = require('dotenv')
const Restaurant = require('../models/restaurant')

const router = express.Router();
dotenv.config();

router.post('/addRestaurant',async(req,res)=>{
    const payload = new Restaurant(req.body.restaurantDetails)

    try{
        const savedRestaurant = await payload.save();
        res.status(200).send("Restaurant added")
    }catch(err){
        res.status(400).send(err)
    }
});

router.get('/', async(req,res)=>{

    const page = req.query.page && parseInt(req.query.page);
    const limit = req.query.limit && parseInt(req.query.limit);
    const filter = req.query.filter
    const sort = req.query.sort

    const results = {}

    const startIndex = page && limit && (page-1)*limit;
    const endIndex = page && limit && (page)*limit;

    //Getting all nearby restaurant
    let total = await Restaurant.aggregate().near({
        near: {
         'type': 'Point',
         'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        maxDistance: 10000,
        spherical: true,
        distanceField: "dis"
       })
    
    try{
        
        if(filter && filter!='all'){
            let temp= total.filter((item)=>item[filter]==true)
            total = temp
        }
    } catch(err){
        res.status(500).send(err)
    }

    //apply sort
    if(sort){
        if(sort =="average_cost"){
            total = total.sort((a,b)=>a.average_cost-b.average_cost)
        }
        else if(sort=="average_time"){
            total = total.sort((a,b)=>a.average_time-b.average_time)
        }
        else if(sort=="rating"){
            total = total.sort((a,b)=>b.rating-a.rating)
        }
    }

    //apply pagination
    if(endIndex <total.length){
        results.next = {
            page:page+1,
            limit:limit
        }
    }
    if(startIndex>0){
        results.prev = {
            page:page-1,
            limit:limit
        }
    }

    try{
       startIndex===undefined || endIndex===undefined ? results.current = total : results.current = total.slice(startIndex,endIndex)
        results.total = total.length
        res.json(results)

    } catch(err){
        res.status(500).send(err)
    }
});

module.exports = router;
//77.6229, 12.9259