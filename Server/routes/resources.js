//modules requires for routing
//import express object
let express = require('express');
//create routing machanisim,create the router for my app 
let router = express.Router();


//create the bussinessContent object - represents a document in the bussinessContact collection
let resources = require('../Models/resources');

//import contactController
let resourcesController = require('../controller/resources');

router.get('/ru',(req,res, next)=>{
    resourcesController.DisplayResourcesRu(req,res);
});

module.exports = router;