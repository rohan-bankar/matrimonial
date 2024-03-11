const express = require("express");
const user_route = express();
const session = require('express-session');
const config = require('../config/config');

user_route.use('/public', express.static('public'));
user_route.use(session({
    secret:config.sessionSecret,
    resave: false,
    saveUninitialized: false
}));
const auth = require('../middleware/auth')

user_route.set('view engine','ejs');
user_route.set('views','./views/users');

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
    
//     }
// })

const userController = require("../controllers/userController");

user_route.get("/registration",auth.isLogout,userController.loadUser);
user_route.post("/registration",userController.insertUser);

user_route.get("/verify",userController.verifyMail);

user_route.get("/",auth.isLogout,userController.loginLoad);
user_route.get("/login",auth.isLogout,userController.loginLoad);
user_route.post("/login",userController.verifyLogin);

user_route.get("/home",auth.isLogin,userController.loadHome); 

user_route.get("/logout",auth.isLogin,userController.userLogout);

user_route.get("/forget",auth.isLogout,userController.forgetLoad);

user_route.post("/forget",userController.forgetEmail);

user_route.get("/forget-password",auth.isLogout,userController.forgetPasswordLoad);
user_route.post("/forget-password",userController.resetPassword);

const formController = require("../controllers/formController");

user_route.get("/form-registration",auth.isLogin, formController.registerForm);
user_route.post("/form-registration",formController.insertUserForm)

module.exports = {
    user_route
}