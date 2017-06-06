//create the resources object - represents a document in the resources collection
let resources = require('../Models/resources');
//import mongoose
let mongoose = require('mongoose');


// Display "儒/Man" list


// Display "儒/Can" list


// Display "释/Man" list

// Display "释/Can" list

// Display "道/Man" list

// Display "道/Can" list

// Display "净空法师/Man" list

// Display "净空法师/Can" list

// Display add resource page
module.exports.DisplayAddResources = (req, res) => 
{
    res.render('resource/addresources',{
        title: 'Add a new resources',
        displayName: req.user ? req.user.displayName : ''
    });
}

// Save new resource
module.exports.CreateResources = (req,res) =>
{
    resources.create({
    topic: req.body.topic, // 了凡四训
        publisher: req.body.publisher, // 华藏净宗学会
        publishDate: req.body.date, 
        introduction: req.body.introduction,
        type: req.body.type,   // Youtube,MP4, audio
        host: req.body.host,  //主持人
        //treasures : [treasure],
        promo : req.body.promo, 
        categoryOne: req.body.categoryOne,
        categoryTwo : req.body.categoryTwo,
        language: req.body.language 
  },(error,contacts)=> {
    if(error){
      console.log(error);
      res.end(err);
    }
    else
    {
      res.redirect('/addresources');
    }
  });
}
// Display update resource page

// delete resource 