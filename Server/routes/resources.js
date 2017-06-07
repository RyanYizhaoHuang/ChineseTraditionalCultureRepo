//modules requires for routing
//import express object
let express = require('express');
//create routing machanisim,create the router for my app 
let router = express.Router();


//create the bussinessContent object - represents a document in the bussinessContact collection
let resources = require('../Models/resources');

//import userController for authentication
let userController = require('../controller/user');
//import contactController
let resourcesController = require('../controller/resources');

//define the user Models
let UserModel = require('../Models/users');
let User = UserModel.User; //alias for User