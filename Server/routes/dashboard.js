//modules required for routing
//import express object
let express = require('express');
//create routing machanisim,create the router for my app 
let router = express.Router();

//import userController for authentication
let userController = require('../controller/user');
//import dashboardController
let dashboardController = require('../controller/dashboard');

//define the user Models
let UserModel = require('../Models/users');
let User = UserModel.User; //alias for User


//display dashboard page
router.get('/',userController.RequireAuth,(req,res,next)=>{

  dashboardController.DisplayDashboard(req,res);
  
});


//display dashboard detail page and add resource
router.get('/detail',userController.RequireAuth,(req,res,next)=>{
  dashboardController.DisplayDetail(req,res);
}).post('/detail',userController.RequireAuth,(req,res,next)=>{
  dashboardController.CreateResource(req,res);
});


//display dashboard edit page
router.get('/edit/:id',userController.RequireAuth,(req,res,next)=>{
  dashboardController.DisplayEdit(req,res);
}).post('/edit/:id',userController.RequireAuth,(req,res,next)=>{
  dashboardController.UpdateResource(req,res);
});

//delete resource
router.get('/delete/:id',userController.RequireAuth,(req,res,next)=>{
  dashboardController.DeleteResource(req,res);
});

//display create treasure page
router.get('/addTreasure/:id',userController.RequireAuth,(req,res,next)=>{
  dashboardController.DisplayTreasureDetail(req,res);
}).post('/addTreasure/:id',userController.RequireAuth,(req,res,next)=>{
  dashboardController.CreateTreasure(req,res);
});

//display treasures edit
router.get('/treasure/:resourceid/:treasureid',userController.RequireAuth,(req,res,next)=>{
  dashboardController.DisplayTreasureEdit(req,res);
}).post('/treasure/:resourceid/:treasureid',userController.RequireAuth,(req,res,next)=>{
  dashboardController.UpdateTreasure(req,res);
});


//Delete Treasure
router.get('/treasure/delete/:resourceid/:treasureid',userController.RequireAuth,(req,res,next)=>{
  dashboardController.DeleteTreasure(req,res);
});


// Display treasures list 
router.get('/treasurelist/:id',(req,res,next) =>{
  dashboardController.DisplayTreasureListIndex(req,res);
});
module.exports = router;

