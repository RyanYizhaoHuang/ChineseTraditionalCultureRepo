//import mongoose
let mongoose = require('mongoose');
//create the resources object - represents a document in the resources collection
let resources = require('../Models/resources');
let moment = require('moment');
let getPromoService = require('../services/getPromoService');

//Display home page
module.exports.DisplayHome = (req,res) => 
{


    try {

    let promoTreasures;

    resources.aggregate([
        { $match: {  'treasures.promo' : true }}, 
        { $unwind : '$treasures' }           
      ]
    ).
         exec( (err,treasureVideo) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
            this.promoTreasures = treasureVideo;
            //console.log("Treasures Topic1:" + promoTreasures); 
            //find resources by promo
            resources.find({promo : true }).
            exec(
                (err,resourcesTopic) =>{

                  if(err)
                  {
                    console.error(err);
                    res.end(error);
                  }
                  else
                  {     
                  //console.log("Treasures Topic:" + promoTreasures.length);
                    
                        res.render('index', { 
                        displayName: req.user ? req.user.displayName : '',
                        title: '中华传统文化资料库 - Chinese Traditional Culture Repository',
                        promoVideo : this.promoTreasures,
                        promoResources : resourcesTopic,
                        moment: moment
                      });
                  }
            });                       
        }
      }
    );
  } catch (error) {
      console.log(error);
      res.redirect('/errors/404');
    }   
}

//Display contact 
module.exports.DisplayContact = (req,res) =>
{
    res.render('contact', { 
    title: 'Contact Us',
    displayName: req.user ? req.user.displayName : '',
    contacts :''
  });
}

//Display about page
module.exports.DisplayAbout = (req,res) => 
{
    res.render('about', { 
    title: '关于我们 About Us',
    displayName: req.user ? req.user.displayName : '',
    contacts :''
  });
}