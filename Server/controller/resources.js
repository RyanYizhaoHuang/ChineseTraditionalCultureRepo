//create the resources object - represents a document in the resources collection
let resources = require('../Models/resources');
//import mongoose
let mongoose = require('mongoose');

let moment = require('moment');
// Display "儒" list
module.exports.DisplayResourcesRu = (req,res) =>{
    
    resources.find({'categoryOne':'ru'}, 
    null,
    // sort publishDate by desc 
    { sort : {'publishDate': -1 }},
    (err,resources)=>{
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
     resources.find({'categoryOne':'shi'},
     null,
    // sort publishDate by desc 
    { sort : {'publishDate': -1 }},
    (err,resources)=>{
      if(err)
      {
        return console.error(err);
      }
      else
      {
        // console.log("Here is the resources: %j", resource );
        res.render('itemlist',{
        title:'释家佛法',
        resources: resources,
        moment: moment,
        displayName: req.user ? req.user.displayName : ''
         });
      }
    });
}



// Display "道" list
module.exports.DisplayResourcesDao = (req,res) =>{
 resources.find({'categoryOne':'dao'},
    null,
    // sort publishDate by desc 
    { sort : {'publishDate': -1 }},
    (err,resources)=>{
      if(err)
      {
        return console.error(err);
      }
      else
      {
        // console.log("Here is the resources: %j", resource );
        res.render('itemlist',{
        title:'道家思想',
        resources: resources,
        moment: moment,
        displayName: req.user ? req.user.displayName : ''
         });
      }
    });
}

// Display "净空法师" list
module.exports.DisplayResourcesJingkong = (req,res) =>{
 resources.find({'categoryOne':'jingkong'},
    null,
    // sort publishDate by desc 
    { sort : {'publishDate': -1 }},
    (err,resources)=>{
      if(err)
      {
        return console.error(err);
      }
      else
      {
        // console.log("Here is the resources: %j", resource );
        res.render('itemlist',{
        title:'净空法师经教',
        resources: resources,
        moment: moment,
        displayName: req.user ? req.user.displayName : ''
         });
      }
    });
}

// Display "南师" list
module.exports.DisplayResourcesNan = (req,res) =>{
 resources.find({'categoryOne':'nan'},
      null,
    // sort publishDate by desc 
    { sort : {'publishDate': -1 }},
    (err,resources)=>{
      if(err)
      {
        return console.error(err);
      }
      else
      {
        // console.log("Here is the resources: %j", resource );
        res.render('itemlist',{
        title:'南懷瑾法語',
        resources: resources,
        moment: moment,
        displayName: req.user ? req.user.displayName : ''
         });
      }
    });
}


// Display add resource page
module.exports.DisplayAddResources = (req, res) => 
{
    res.render('dashboard/addresources',{
        title: 'Add a new resources',
        displayName: req.user ? req.user.displayName : ''
    });
}

// Display treasure list
module.exports.DisplayTreasuresList = (req,res) => {
 
  try {
  
    //get a reference to the id of the contact to edit
    //let mongoose convert id to a HexString, if yes go to next if can not convert go to catech
    let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
      //find business contact by id
      resources.findById(id,
      null,
       // sort sort number by desc 
       { sort : {'treasures.1.sortNumber': -1 }},
      (err,resource) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
            res.render('treasuresList',{
            title: resource.topic + '列表',
            resource: resource,
            displayName: req.user ? req.user.displayName : ''
          });
        }
      });

    //   resources.findById(id).select('treasures').sort({ 'treasures.sortNumber': -1 }).
    //  exec( (err,resource) =>{

    //     if(err)
    //     {
    //       console.error(err);
    //       res.end(error);
    //     }
    //     else
    //     {
    //        console.log(resource.treasures[1].sortNumber);
    //         res.render('treasuresList',{
    //         title: resource.topic + '列表',
    //         resource: resource,
    //         displayName: req.user ? req.user.displayName : ''
    //       });
    //     }
    //   }
    // );
  } catch (error) {
      console.log(error);
      res.redirect('/errors/404');
    }   
}

module.exports.DisplayTreasureItem = (req,res) =>{
  try {
  
    //get a reference to the id of the contact to edit
    //let mongoose convert id to a HexString, if yes go to next if can not convert go to catech
    let resourceId = mongoose.Types.ObjectId.createFromHexString(req.params.resourceId);
    let treasureId = mongoose.Types.ObjectId.createFromHexString(req.params.treasureId);

      //find business contact by id
      resources.findById(resourceId,(err,resources) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
          res.render('treasuresItem',{
            title: resources.treasures.id(treasureId).title,
            resource: resources,
            treasure: resources.treasures.id(treasureId),
            displayName: req.user ? req.user.displayName : ''
          });
        }
      });
  } catch (error) {
      console.log(error);
      res.redirect('/errors/404');
    }   
}