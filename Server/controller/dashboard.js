//create the bussinessContent object - represents a document in the bussinessContact collection
let resource = require('../Models/resources');

//import mongoose
let mongoose = require('mongoose');

//Display businessContact list
module.exports.DisplayDashboard = (req,res) => 
{
    resource.find((err,resource)=>{
      if(err)
      {
        return console.error(err);
      }
      else
      {
        // console.log("Here is the resources: %j", resource );
        res.render('dashboard/index',{
        title:'Add a new resource',
        resources: resource,
        displayName: req.user ? req.user.displayName : ''
         });
      }
    });
}



//Create new resource
module.exports.CreateResource = (req,res) =>
{
    let uploadDate = new Date(Date.parse(req.body.publishDate));
    // fix timezone bug
    uploadDate.setDate( uploadDate.getDate() + 1 );
    resource.create({
    topic: req.body.topic,
    publisher:req.body.publisher,
    publishDate: uploadDate,
    host:req.body.host,
    categoryOne:req.body.categoryOne,
    categoryTwo:req.body.categoryTwo,
    language:req.body.language,
    introduction:req.body.introduction,
    imageUrl: req.body.imageUrl,
    keyword :  req.body.topic + ',' + req.body.publisher + ',' + req.body.host + ',' + req.body.language, 
    promo: req.body.promo,
    optionalUrl: req.body.optionalUrl,
    treasures :[]
  },(error,contacts)=> {
    if(error){
      console.log(error);
      res.end(err);
    }
    else
    {
      res.redirect('/dashboard');
    }
  });
}

//display add recource
module.exports.DisplayDetail = (req,res) => {
    res.render('dashboard/resourcesDetail',{
    title:'Add a new resource',
    resource: '',
    displayName: req.user ? req.user.displayName : ''
  });
}

//Display Edit page
//Find the contact by id and populate the form 
module.exports.DisplayEdit = (req,res) =>
{
    try {
  
    //get a reference to the id of the contact to edit
    //let mongoose convert id to a HexString, if yes go to next if can not convert go to catech
    let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
      //find business contact by id
      resource.findById(id,(err,resource) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
          console.log("Here is the resource: %j", resource );
          res.render('dashboard/resourcesDetail',{
            title:'Resources Detail',
            resource: resource,
            displayName: req.user ? req.user.displayName : ''
          });
        }
      });
  } catch (error) {
      console.log(error);
      res.redirect('/errors/404');
    }   
}

//Save contact
module.exports.UpdateResource = (req,res) =>
{
    //get a reference to the id of the resource to edit
    let id = req.params.id;

    // create a new resource object to hold the changes
    let resources = new resource(
        {
            _id: id,         
            topic: req.body.topic,
            publisher:req.body.publisher,
            publishDate: req.body.publishDate,
            host:req.body.host,
            categoryOne:req.body.categoryOne,
            categoryTwo:req.body.categoryTwo,
            language:req.body.language,
            introduction:req.body.introduction,
            imageUrl: req.body.imageUrl,
            optionalUrl: req.body.optionalUrl,
            promo: req.body.promo,
            treasures: req.body.treasures,
            keyword :  req.body.topic + ',' + req.body.publisher + ',' + req.body.host + ',' + req.body.language,             
        }
    );

    // //save resource object
    // resources.save((err) => {
    //       if(err)
    //         {
    //             console.log(err);
    //             res.end(err);
    //         }
    //         else
    //         {
    //             //refresh the resource list
    //             res.redirect('/dashboard');
    //         }
    //     });
    resource.update({_id:id},resources,(err)=>{

            if(err)
            {
                console.log(err);
                res.end(error);
            }
            else
            {
                //refresh the resource list
                res.redirect('/dashboard');
            }
        });
}

//Delete Resource
module.exports.DeleteResource = (req,res) =>
{
    //get a reference to the id of the contact
  let id = req.params.id;
  resource.remove({_id: id}, (err) =>{
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      res.redirect('/dashboard');
    }
  });
}


//display treasures list
module.exports.DisplayTreasureListIndex = (req,res) => {
   try {
  
    //get a reference to the id of the contact to edit
    //let mongoose convert id to a HexString, if yes go to next if can not convert go to catech
    let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
      //find business contact by id
      resource.findById(id,(err,resource) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
            res.render('dashboard/treasuresIndex',{
            title:'Treasures List',
            resource: resource,
            displayName: req.user ? req.user.displayName : ''
          });
        }
      });
  } catch (error) {
      console.log(error);
      res.redirect('/errors/404');
    }   
}

//display add treasure detail
module.exports.DisplayTreasureDetail = (req,res) => {
    
    try {
  
    //get a reference to the id of the contact to edit
    //let mongoose convert id to a HexString, if yes go to next if can not convert go to catech
    let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
      //find business contact by id
      resource.findById(id,(err,resource) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
          res.render('dashboard/treasureDetail',{
            title:'Treasure Detail',
            resource: resource,
            treasure:'',
            displayName: req.user ? req.user.displayName : ''
          });
        }
      });
  } catch (error) {
      console.log(error);
      res.redirect('/errors/404');
    }   
}

//create treasure
module.exports.CreateTreasure = (req,res) =>{
   try {
  
    //get a reference to the id of the contact to edit
    //let mongoose convert id to a HexString, if yes go to next if can not convert go to catech
    let resourceId = mongoose.Types.ObjectId.createFromHexString(req.params.id);
    
    let uploadDate = new Date(Date.parse(req.body.uploadDate));

    // fix timezone bug
    uploadDate.setDate( uploadDate.getDate() + 1 );
      
    let treasure = 
        {       
        presenter : req.body.presenter,
        uploadDate: uploadDate,
        title: req.body.title,
        overSeaUrl: req.body.overSeaUrl,
        chinaUrl: req.body.chinaUrl,
        optionalUrl: req.body.optionalUrl,
        optionalNote: req.body.optionalNote,
        promo: req.body.promo,
        click : 0,
        imageUrl : req.body.imageUrl,
        type: req.body.type,  // Youtube,MP4, audio
        sortNumber : req.body.sortNumber,
        createDate: Date.now(),
        keyword :  req.body.title + ',' + req.body.presenter + ',' + req.body.optionalNote           
        }
    
      
      //find resource by id
      resource.findById(resourceId,(err,resourceDetail) =>{
        if(err)
        {
          console.error(err);
          res.end(err);
        }
        else
        {
          resourceDetail.treasures.push(treasure);
          resourceDetail.save((err) => {
          if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                //refresh the resource list
                res.redirect('/dashboard');
            }
        });

        }
      });
                               

  } catch (error) {
      console.log(error);
      res.redirect('/errors/404');
    }   
}

//display treasure edit page
module.exports.DisplayTreasureEdit = (req,res) => {

  try {
  
    //get a reference to the id of the contact to edit
    //let mongoose convert id to a HexString, if yes go to next if can not convert go to catech
    let resourceId = mongoose.Types.ObjectId.createFromHexString(req.params.resourceid);
    let treasureId = mongoose.Types.ObjectId.createFromHexString(req.params.treasureid);

      //find business contact by id
      resource.findById(resourceId,(err,resources) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
          res.render('dashboard/treasureDetail',{
            title:'Treasure Detail',
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

module.exports.UpdateTreasure = (req,res) =>{
   try {
  
    backURL=req.header('Referer') || '/dashboard';
    //get a reference to the id of the contact to edit
    //let mongoose convert id to a HexString, if yes go to next if can not convert go to catech
    let resourceId = mongoose.Types.ObjectId.createFromHexString(req.params.resourceid);
    let treasureId = mongoose.Types.ObjectId.createFromHexString(req.params.treasureid);
    
      
      //find resource by id
      resource.findById(resourceId,(err,resourceDetail) =>{
        if(err)
        {
          console.error(err);
          res.end(err);
        }
        else
        {

        //Find treasure by treasureId
        let treasure = resourceDetail.treasures.id(treasureId);
          

         treasure.presenter = req.body.presenter;
         treasure.uploadDate =  req.body.uploadDate;
         treasure.title = req.body.title;
         treasure.overSeaUrl = req.body.overSeaUrl;
         treasure.chinaUrl = req.body.chinaUrl;
         treasure.optionalUrl = req.body.optionalUrl;
         treasure.optionalNote = req.body.optionalNote;
         treasure.promo =  req.body.promo;
         treasure.click = 0;
         treasure.imageUrl = req.body.imageUrl;
         treasure.type = req.body.type;  // Youtube,MP4, audio
         treasure.sortNumber = req.body.sortNumber;
         treasure.createDate = req.body.createDate;
         treasure.keyword =  req.body.title + ',' + req.body.presenter + ',' + req.body.optionalNote;  
        
        //save update
          resourceDetail.save((err) => {
          if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                //refresh the resource list
                res.redirect('/dashboard/treasurelist/'+ resourceDetail._id);
            }
        });
        }
      });
                               

  } catch (error) {
      console.log(error);
      res.redirect('/errors/404');
    }   
}

//Delete Treasure
module.exports.DeleteTreasure = (req,res) =>
{
  try {
  
    backURL=req.header('Referer') || '/dashboard';
  
    //get a reference to the id of the contact to edit
    //let mongoose convert id to a HexString, if yes go to next if can not convert go to catech
    let resourceId = mongoose.Types.ObjectId.createFromHexString(req.params.resourceid);
    let treasureId = mongoose.Types.ObjectId.createFromHexString(req.params.treasureid);

      //find business contact by id
      resource.findById(resourceId,(err,resourceDetail) =>{

        if(err)
        {
          console.error(err);
          res.end(error);
        }
        else
        {
          resourceDetail.treasures.id(treasureId).remove();
          resourceDetail.save((err) => {
          if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                //Go back to previous route
                res.redirect(backURL);
            }
        });
        }
      });
  } catch (error) {
      console.log(error);
      res.redirect('/errors/404');
    }   
}