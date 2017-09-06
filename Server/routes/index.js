//modules required for routing
//import express object
let express = require('express');
//create routing machanisim,create the router for my app 
let router = express.Router();


//import controller
let indexController = require('../controller/index');



/* GET home page. */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req,res);
});

//Get about page
router.get('/about', (req, res, next) => {
  indexController.DisplayAbout(req,res);
});

//Get contact page
router.get('/contact', (req, res, next) => {
  indexController.DisplayContact(req,res);
});


module.exports = router;