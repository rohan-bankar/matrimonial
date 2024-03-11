const User = require('../models/userRegistration');
const config = require('../config/config');
const bcrypt = require('bcrypt');
const nodeMailer = require('nodemailer');
const randormstring = require('randomstring');
//For password hashing
const securePassword = async(password)=>{
try {
    const passwordHash = await bcrypt.hash(password,10);
    return passwordHash;
} catch (error) {
    console.log(error.message);
}
}

//For mail send
const sendVerifyMail = async(firstName,email,user_id)=>{
    try {
        const transporter = nodeMailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:config.emailUser,
                pass:config.emailPassword
            }
        });
        const mailOptions = {
            from:'rbankar102@gmail.com',
            to:email,
            subject:'For verification mail',
            html:'<p>Hi '+ firstName +', please click here to <a href="http://localhost:3000/verify?id='+user_id+'">verify</a>your mail.</p>'
        }
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }else{
                console.log("Email has been sent:- ",info.response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}


const loadUser = async(req,res)=>{
    try {
        res.render('registration');
    } catch (error) {
        console.log(error.message);
    }
}

const insertUser = async(req,res)=>{
    try {
        const sPassword = await securePassword(req.body.password);
        const user = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            phone:req.body.phone,
            password:sPassword,
            // confirmPassword:req.body.confirmPassword,
            is_admin:0,

        });

        const userData = await user.save();

        if(userData){
            sendVerifyMail(req.body.firstName,req.body.email,userData._id);
            res.render('registration',{message:"your registration has been successful,please verify your mail"});
        }else{
            res.render('registration',{message:"your registration has been failed."});
        }
    } catch (error) {
        console.log(error.message);
    }
  
}

// verifying email
const verifyMail = async(req,res)=>{
    try {
        const updateInfo = await User.updateOne({_id:req.query.id},{$set:{is_verified:1}});
        console.log(updateInfo);
        res.render("email-verified");
    } catch (error) {
       console.log(error.message); 
    }
}

//login user methods started
const loginLoad = async(req,res)=>{
    try {
        res.render('login');
    } catch (error) {
        console.log(error.message);
    }
}
const isAuthenticated = (req, res, next) => {
    if (req.session.user_id) {
        return next();
    }
    res.redirect('/login'); // Redirect to login if not authenticated
};

const verifyLogin = async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userData = await User.findOne({email:email});
        if(userData){
            const passwordMatch = await bcrypt.compare(password,userData.password);
            if(passwordMatch){
                if(userData.is_verified === 0){
                    res.render('login',{message:"Please verify your mail "})
                }else{
                    console.log('User ID before setting session:', req.session.user_id);
                    req.session.user_id = userData._id;
                    console.log('User ID after setting session:', req.session.user_id);
                    req.session.save((err) => {
                        if (err) {
                            console.error('Error saving session:', err);
                        }
                    res.redirect('/home');
                    console.log(userData._id);
                });
            }
            }else{
                res.render('login',{message:"Email or password is incorrect"});
            }

        }else{
            res.render('login',{message:"Email or password is incorrect"});
        }
    } catch (error) {
        console.log(error.message);
    }
}

const loadHome = async(req,res)=>{
    try {
        res.render('home');
    } catch (error) {
        console.log(error.message);
    }
}

// user logout

const userLogout = async(req,res)=>{
    try {
         req.session.destroy();
         res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
}

// reset password send mail
const sendResetPasswordMail = async(firstName,email,token)=>{
    try {
        const transporter = nodeMailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:config.emailUser,
                pass:config.emailPassword
            }
        });
        const mailOptions = {
            from:config.emailUser,
            to:email,
            subject:'For Reset Password',
            html:'<p>Hi '+ firstName +', please click here to <a href="http://localhost:3000/forget-password?token='+token+'"> Reset </a>your Password.</p>'
        }
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }else{
                console.log("Email has been sent:- ",info.response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

// forget password 
const forgetLoad = async(req,res)=>{
    try {
        res.render('forget')
    } catch (error) {
        console.log(error.message);
    }
}

const forgetEmail = async(req,res)=>{
    try {
        const email = req.body.email;
        const userData = await User.findOne({email:email});
        if(userData){
             if(userData.is_verified === 0){
                res.render('forget',{message:"please verify your email"});
             }else{
                const randomString = randormstring.generate();
                const updateData = await User.updateOne({email:email},{$set:{token:randomString}});
                sendResetPasswordMail(userData.firstName,userData.email,randomString);
                res.render('forget',{message:"Please check your mail to reset your password"});
            }
        }else{
            res.render('forget',{message:"User email is incorrect"});
        }
    } catch (error) {
        console.log(error.message);
    }
}

const forgetPasswordLoad = async(req,res)=>{
    try {
        const token = req.query.token;
        console.log("Token:", token);
        const tokenData = await User.findOne({token:token});
        console.log("Token Data:", tokenData);
        if(tokenData){
            console.log("User_id:", tokenData._id);
            res.render('forget-password',{user_id:tokenData._id});
        }else{
            res.render('404',{message:"token is invalid."});
        }
    } catch (error) {
        console.log(error.message);
    }
}



const resetPassword = async(req,res)=>{
    try {
        const password = req.body.password;
        const user_id = req.body.user_id;

        const secure_Password = await securePassword(password);
        const updatedData = await User.findByIdAndUpdate({_id: user_id},{$set:{password:secure_Password,token:' '}});
        res.redirect("/");
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    loadUser,
    insertUser,
    verifyMail,
    loginLoad,
    verifyLogin,
    loadHome,
    userLogout,
    forgetLoad,
    forgetEmail,
    forgetPasswordLoad,
    resetPassword
}

