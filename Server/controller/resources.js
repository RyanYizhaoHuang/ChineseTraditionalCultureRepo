//create the resources object - represents a document in the resources collection
let resources = require('../Models/resources');
//import mongoose
let mongoose = require('mongoose');

let moment = require('moment');
// Display "儒" list
module.exports.DisplayResourcesRu = (req,res) =>{
    
    resources.find({'categoryOne':'khkjhk'},(err,resources)=>{
      if(err)
      {
        return console.error(err);
      }
      else
      {
        // console.log("Here is the resources: %j", resource );
        res.render('itemlist',{
        title:'儒家学说',
        resources: resources,
        moment: moment,
        displayName: req.user ? req.user.displayName : ''
         });
      }
    });
}


// Display "释" list
module.exports.DisplayResourcesShi = (req,res) =>{

}



// Display "道" list
module.exports.DisplayResourcesDao = (req,res) =>{

}

// Display "净空法师" list
module.exports.DisplayResourcesJingkong = (req,res) =>{

}


// Display add resource page
module.exports.DisplayAddResources = (req, res) => 
{
    res.render('dashboard/addresources',{
        title: 'Add a new resources',
        displayName: req.user ? req.user.displayName : ''
    });
}