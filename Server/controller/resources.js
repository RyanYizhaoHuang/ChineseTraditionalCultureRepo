//create the resources object - represents a document in the resources collection
let resources = require('../Models/resources');
//import mongoose
let mongoose = require('mongoose');

let moment = require('moment');
// Display "儒" list
module.exports.DisplayResourcesRu = (req,res) =>{
    
      //Get side promo treasures
      let promoTreasures;

      resources.aggregate([
            { $match: {  'treasures.promo' : true , 'categoryOne' : 'ru' }}, 
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
                //render the ru index page
                resources.find({'categoryOne':'ru'}, 
                  null,
                  // sort publishDate by desc 
                  { sort : {'publishDate': -1 }},
                  (err,resourcesTopic)=>{
                    if(err)
                    {
                      return console.error(err);
                    }
                    else
                    {
                      // console.log("Here is the resources: %j", resource );
                      res.render('itemlist',{
                      title:'儒家学说',
                      resources: resourcesTopic,
                      promoVideo : this.promoTreasures,
                      moment: moment,
                      displayName: req.user ? req.user.displayName : ''
                      });
                    }
                });//End render ru index page
            }
          }
         );   
}


// Display "释" list
module.exports.DisplayResourcesShi = (req,res) =>{
     
        //Get side promo treasures
      let promoTreasures;

      resources.aggregate([
            { $match: {  'treasures.promo' : true , 'categoryOne' : 'shi' }}, 
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
                //render shi index pages
                resources.find({'categoryOne':'shi'},
                null,
                // sort publishDate by desc 
                { sort : {'publishDate': -1 }},
                (err,resourcesTopic)=>{
                    if(err)
                    {
                      return console.error(err);
                    }
                    else
                    {
                      res.render('itemlist',{
                      title:'释家佛法',
                      promoVideo : this.promoTreasures,        
                      resources: resourcesTopic,
                      moment: moment,
                      displayName: req.user ? req.user.displayName : ''
                      });
                    }
                  });
                  //end render shi index pages
            }
          }
         );
  }



// Display "道" list
module.exports.DisplayResourcesDao = (req,res) =>{
 
      //Get side promo treasures
      let promoTreasures;

      resources.aggregate([
            { $match: {  'treasures.promo' : true , 'categoryOne' : 'dao' }}, 
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
                 //render dao index page
                resources.find({'categoryOne':'dao'},
                    null,
                    // sort publishDate by desc 
                    { sort : {'publishDate': -1 }},
                    (err,resourcesTopic)=>{
                      if(err)
                      {
                        return console.error(err);
                      }
                      else
                      {
                        // console.log("Here is the resources: %j", resource );
                        res.render('itemlist',{
                        title:'道家思想',
                        promoVideo : this.promoTreasures,        
                        resources: resourcesTopic,
                        moment: moment,
                        displayName: req.user ? req.user.displayName : ''
                        });
                      }
                    });
                    //end render dao index page
            }
          }
         );
}

// Display "净空法师" list
module.exports.DisplayResourcesJingkong = (req,res) =>{
 
      //Get side promo treasures
      let promoTreasures;

      resources.aggregate([
            { $match: {  'treasures.promo' : true , 'categoryOne' : 'jingkong' }}, 
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
                 //render jinkong index page
                resources.find({'categoryOne':'jingkong'},
                    null,
                    // sort publishDate by desc 
                    { sort : {'publishDate': -1 }},
                    (err,resourcesTopic)=>{
                      if(err)
                      {
                        return console.error(err);
                      }
                      else
                      {
                        // console.log("Here is the resources: %j", resource );
                        res.render('itemlist',{
                        title:'净空法师经教',
                        promoVideo : this.promoTreasures,    
                        resources: resourcesTopic,
                        moment: moment,
                        displayName: req.user ? req.user.displayName : ''
                        });
                      }
                    });
                  //end render jinkong index page
            }
          }
         );
}

// Display "南师" list
module.exports.DisplayResourcesNan = (req,res) =>{
 
      //Get side promo treasures
      let promoTreasures;

      resources.aggregate([
            { $match: {  'treasures.promo' : true , 'categoryOne' : 'nan' }}, 
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
                //render nan index page
                 resources.find({'categoryOne':'nan'},
                  null,
                // sort publishDate by desc 
                { sort : {'publishDate': -1 }},
                (err,resourcesTopic)=>{
                    if(err)
                    {
                      return console.error(err);
                    }
                    else
                    {
                      // console.log("Here is the resources: %j", resource );
                      res.render('itemlist',{
                      title:'南懷瑾法語',
                      promoVideo : this.promoTreasures,    
                      resources: resourcesTopic,
                      moment: moment,
                      displayName: req.user ? req.user.displayName : ''
                      });
                    }
                });
                //end render nan index page
            }
          }
         );
}

//Display Cantonese resources
module.exports.DisplayResourcesCantonese = (req,res) =>{
  
       //Get side promo treasures
       let promoTreasures;
 
       resources.aggregate([
             { $match: {  'treasures.promo' : true , 'language' : 'can' }}, 
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
                 //render cantonese index page
                  resources.find({'language':'can'},
                   null,
                 // sort publishDate by desc 
                 { sort : {'publishDate': -1 }},
                 (err,resourcesTopic)=>{
                     if(err)
                     {
                       return console.error(err);
                     }
                     else
                     {
                       // console.log("Here is the resources: %j", resource );
                       res.render('itemlist',{
                       title:'粤语专区',
                       promoVideo : this.promoTreasures,    
                       resources: resourcesTopic,
                       moment: moment,
                       displayName: req.user ? req.user.displayName : ''
                       });
                     }
                 });
                 //end render nan index page
             }
           }
          );
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
       { $sort : {'treasures.sortNumber': 1 }},
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