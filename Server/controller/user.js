//import mongoose
let mongoose = require('mongoose');
let passport = require('passport');
//define the user Models
let UserModel = require('../Models/users');
let User = UserModel.User; //alias for User

//Display user login
module.exports.DisplayLogin = (req,res) =>
{
    //check to see if the user is not already logged in
  if(!req.user)
  {
    //render the login page
    res.render('auth/login',
    {
      title:'Login',
      contacts :'',
      messages : req.flash('error'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
  }
  else{
    return res.redirect('/dashboard'); //redirect to dashboard
  }
}


//Process to login
module.exports.ProcessLogin = (req,res) =>
{    
    
    return passport.authenticate('local',{
    successReturnToOrRedirect : 'back',
    failureRedirect: '/users/login',
    failureFlash:true
  }
  // ,
  // (req,res)=>{
  //   //let backURL = req.header('Referer') || '/dashboard';  
  //   //console.log("BackUrl" + backURL);  
  //   res.redirect('/dashboard');
  // }
  );
}

//Display registration page
module.exports.DisplayRegistration = (req,res) =>
{
    //check if the user is not already logged in
  if(!req.user)
  {
    res.render('auth/register',{
      title:'Register',
      contacts :'',
      messages : req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
  }
}

//Process user register
module.exports.ProcessRegistration = (req,res) =>
{
    User.register(
    new User({
        username:req.body.username,
        //password:req.body.password,
        email:req.body.email,
        displayName:req.body.displayName
      }),
      req.body.password,
      (err) => {
        if(err) { 
          console.log('Error inserting new user');
          if(err.name == 'UserExistsError')
          {
            req.flash('registerMessage','Registration Error: User Already Exists!');
          }
          return  res.render('auth/register',{
                      title:'Register',
                      contacts :'',
                      messages : req.flash('registerMessage'),
                      displayName: req.user ? req.user.displayName : ''
                    });
        }
        //if registration is successful
        return passport.authorize('local')(req,res,()=>{
          res.redirect('/');
        });
      });
}

//Process logout
module.exports.ProcessLogout = (req,res) =>
{
    let backURL=req.header('Referer') || '/dashboard';
  
    req.logout();
    // res.redirect('/'); //redirect to homepage
    res.redirect(backURL); //redirect to homepage
}


//RequireAuth,function to check if the user is authenticated
module.exports.RequireAuth = (req,res,next) => 
{

  //check if the user is login
  if(!req.isAuthenticated())
  {
    return res.redirect('/users/login');
  }
  next();
}