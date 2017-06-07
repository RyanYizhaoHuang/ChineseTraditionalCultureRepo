//modules required for routing
//import express object
let express = require('express');
//create routing machanisim,create the router for my app 
let router = express.Router();

//import userController for authentication
let userController = require('../controller/user');
//import contactController
let dashboardController = require('../controller/dashboard');

//define the user Models
let UserModel = require('../Models/users');
let User = UserModel.User; //alias for User


//display dashboard page
router.get('/',(req,res,next)=>{

  dashboardController.DisplayDashboard(req,res);
  
});

module.exports = router;