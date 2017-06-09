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
        console.log("Here is the resources: %j", resource );
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
    let uploadDate = new Date(Date.parse(req.body.publishDate));
    // fix timezone bug
    uploadDate.setDate( uploadDate.getDate() + 1 );
    // create a new resource object to hold the changes
    let resources = new resource(
        {
            _id: id,         
            topic: req.body.topic,
            publisher:req.body.publisher,
            publishDate: uploadDate,
            host:req.body.host,
            categoryOne:req.body.categoryOne,
            categoryTwo:req.body.categoryTwo,
            language:req.body.language,
            introduction:req.body.introduction,
            imageUrl: req.body.imageUrl,
            promo: req.body.promo
        }
    );

    //save resource object
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