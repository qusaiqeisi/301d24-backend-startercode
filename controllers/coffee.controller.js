'use strict';
const axios=require('axios');
const coffeeModel=require('../models/coffee.model');

// Endpoint for testing
const home=(req,res)=>{
// provide your logic here
res.send('hello im live');
}
// Call the coffee api here and return the results
const retreiveItemsController= async (req,res)=>{
    // provide your logic here
    let url = 'https://coffeepedias.herokuapp.com/coffee-list/';
    let urlRes = await axios.get(url);
    let allCoffe = urlRes.data.map((item,index)=>{
        let coffe = new Coffe(item)
        return coffe
    })
    res.send(allCoffe)
};

//  ..........class for coffe ....
class Coffe {
    constructor(data){
        this.title=data.title,
        this.description=data.description,
        this.ingredients=data.ingredients,
        this.image_url=data.image_url
    }
}

// Get favorite coffee from MongoDB
const getFavoriteCoffee= async(req,res)=>{
    // provide your logic here
    coffeeModel.find({},(error,data)=>{
        res.send(data)
    })
}
// Create new fav coffee endpoint
const createItemController=(req,res)=>{
    // provide logic here
    let {title,description,ingredients,image_url}=req.body;
    let favData = new coffeeModel({
        title:title,
        description:description,
        ingredients:ingredients,
        image_url:image_url
    })
    favData.save();
};

// update coffee from MongoDB
const updateItemController=(req,res)=>{
    // provide logic here
    let id = req.params.id;
    let {title,description,ingredients,image_url}=req.body;
    coffeeModel.findOne({_id:id},(error,data)=>{
        data.title=title,
        data.description=description,
        data.ingredients=ingredients,
        data.image_url=image_url
        data.save().then(()=>{
            coffeeModel.find({},(error,allData)=>{
                res.send(allData)
            }) ;  
        });
    });

};

// delete coffee from MongoDB
const deleteItemController=(req,res)=>{
    // provide your logic here
    let id = req.params.id;
    coffeeModel.remove({_id:id},(error,data)=>[
        coffeeModel.find({},(error,allData)=>[
            res.send(allData)
        ])
    ])


};




module.exports={
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};