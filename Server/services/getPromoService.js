//import mongoose
let mongoose = require('mongoose');
//create the resources object - represents a document in the resources collection
let resources = require('../Models/resources');
let moment = require('moment');


module.exports.GetPromoService = (req,res) =>
{
    try {
        
        resources.aggregate([
        { $match: {  'treasures.promo' : true }}, 
        { $unwind : '$treasures' }           
      ]
    ).
         exec( (err,resources) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
            console.log("RUNNING GetPromo");

            return resources;
            //console.log("Treasures Topic1:" + promoTreasures);                        
        }
      }
    );

    } catch (error) {
        console.log(error);
        res.redirect('/errors/404');
    }
}