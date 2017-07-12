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
         exec( (err,resources) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
            this.promoTreasures = resources;
            //console.log("Treasures Topic1:" + promoTreasures);                        
        }
      }
    );

      //find resources by promo
      resources.find({promo : true }).
      exec(
          (err,resources) =>{

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
                  promoResources : resources,
                  moment: moment
                });
            }
      });


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
    title: 'About Us',
    displayName: req.user ? req.user.displayName : '',
    contacts :''
  });
}


//Display project page
module.exports.DisplayProject = (req,res) =>
{
    res.render('projects', { 
    title: "Ryan's Project",
    displayName: req.user ? req.user.displayName : '',
    contacts :''
  });
}


//Display services page
module.exports.DisplayServices = (req,res) =>
{
    res.render('services', { 
    title: "Ryan's Services",
    displayName: req.user ? req.user.displayName : '',
    contacts :''
  });
}


//Display projects detail page
module.exports.DisplayProjectDetail = (req,res) =>
{
  res.render('projects/detail',{
    title: "Ryan's Project",
    displayName: req.user ? req.user.displayName : ''
  });
}