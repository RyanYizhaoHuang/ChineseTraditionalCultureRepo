//modules requires for routing
//import express object
let express = require('express');
//create routing machanisim,create the router for my app 
let router = express.Router();


//create the bussinessContent object - represents a document in the bussinessContact collection
let resources = require('../Models/resources');

//import contactController
let resourcesController = require('../controller/resources');

//display "RU" resource
router.get('/ru',(req,res, next)=>{
    resourcesController.DisplayResourcesRu(req,res);
});

//display "Shi" resource
router.get('/shi',(req,res, next)=>{
    resourcesController.DisplayResourcesShi(req,res);
});

//display "Dao" resource
router.get('/dao',(req,res, next)=>{
    resourcesController.DisplayResourcesDao(req,res);
});

//display "Jingkong" resource
router.get('/jingkong',(req,res, next)=>{
    resourcesController.DisplayResourcesJingkong(req,res);
});

//display "Nanshi" resource
router.get('/nan',(req,res, next)=>{
    resourcesController.DisplayResourcesNan(req,res);
});

// display trasures list
router.get('/:id',(req,res,next)=>{
    resourcesController.DisplayTreasuresList(req,res);
});
module.exports = router;