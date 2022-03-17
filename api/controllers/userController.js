'use strict';

const userData = require('../data/users');
const crypto = require('crypto');
require('dotenv').config();

//login
const getUserLogin = async (req,res,next) =>{
    try {
        let {emailAddress, password} = req.body;
        emailAddress = emailAddress.trim();
        password = password.trim();
        if (emailAddress == "" || password == ""){
            res.json({
                status: "FAILED",
                message: "Missing credentials"
            })
        }
        else{
            //email & pwd provided
            //hash input pwd and put in qry for compare
            var hash = crypto.createHash('sha256');
            var inputPwd = hash.update(password).digest('hex');
            const user = await userData.getUserLogin(emailAddress,inputPwd);
            //
            if (user.length != 0){
                res.json({
                    status: "SUCCESS",
                    message: "Signed in completed",
                    user
                })
            }
            else{
                res.json({
                    status: "FAILED",
                    message: "Invalid credentials, try again"
                })
            }
        //qry for user with hashed pwd
        }
    } catch (error) {
        res.send(error.message);
    }
};


//change pwd. THIS IS NOT RESET/FORGET!!!
const updateUserPwd = async (req,res,next) =>{
    try{
        let {emailAddress, oldPassword, newPassword} = req.body;
        emailAddress = emailAddress.trim();
        oldPassword = oldPassword.trim();
        newPassword = newPassword.trim();
        if (emailAddress == "" || newPassword == "" || oldPassword == ""){
            res.json({
                status: "FAILED_TO_UPDATE_PWD",
                message: "MISSING INPUTS"
            })
        }
        else{
            //email & pwd & old pwd provided
            //hash input pwd and put in qry for compare
            //with old user password
            var hash = crypto.createHash('sha256');
            var inputPwd = hash.update(oldPassword).digest('hex');
            //qry for user with OLD hashed pwd
            const user = await userData.getUserLogin(emailAddress,inputPwd);
            //WHEN MATCH OLD PWD
            if (user.length != 0){
                //HASH NEW PASSWORD
                var hash2 = crypto.createHash('sha256');
                var newPwd = hash2.update(newPassword).digest('hex');
                //call update
                const updateUser = await userData.updateUserPwd(emailAddress,newPwd);
                if (updateUser){
                    res.json({
                        status: "UPDATED",
                        message: "Password Updated",
                        user
                    })
                }
                else{
                    res.json({
                        status: "UPDATE_FAILED",
                        message: "Failed to update password, please try again"
                    })
                }
            }
            else{
            res.json({
                status: "FAILED",
                message: "Invalid credentials, try again"
            })
            }
        }
    }
    catch (error){
        res.send(error.message);
    }
}
//RESET/FORGET PASSWORD
const resetUserPwd = async (req,res,next) =>{
    try{
        let {emailAddress} = req.body;
        emailAddress = emailAddress.trim();
        if (emailAddress == ""){
            res.json({
                status: "FAILED_TO_RESET_PWD",
                message: "MISSING INPUTS"
            })
        }
        else{
            //email provided
            //qry if user exist
            const userExist = await userData.checkUserExist(emailAddress);
            //user exist, generate pwd
            if (userExist.length == 1){
                //generate random password
                var newRandomedPwd = crypto.randomBytes(4).toString('hex');
                //hash new pwd for storage
                        /*  hash is for login
                            hash2 is for changing pwd
                            hash3 is for reseting pwd */
                var hash3 = crypto.createHash('sha256');
                var newRandomHashedPwd = hash3.update(newRandomedPwd).digest('hex');
                //call update
                const updateUser = await userData.updateUserPwd(emailAddress,newRandomHashedPwd);
                if (updateUser){
                    //EMAIL GENERATOR HERE
                    const nodemailer = require('nodemailer');
                    const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: process.env.AUTH_EMAIL,
                            pass: process.env.AUTH_PASSWORD
                        }
                    });
                    transporter.verify((error,success) =>{
                        if (error){
                            console.log(error);
                        }
                        else{
                            console.log("Ready" + success);
                        }
                    })
                    const mailOptions = {
                        from: process.env.AUTH_EMAIL,
                        to: 'luongmga@gmail.com',
                        subject: 'Testing',
                        text: 'Temp pwd is ' + newRandomedPwd
                    }
                    transporter.sendMail(mailOptions).then(()=>{
                        res.json({status: "EMAILED", message:"SUMTHING RIGHT!"});
                    }).catch((error)=>{
                        console.log(error);
                        res.json({status: "FAILED", message:"SUMTHING WRONG!"});
                    })
                    //send the new RandomedPwd
                    //EMAIL GENERATOR END
                }
                else{
                    res.json({
                        status: "RESET_FAILED",
                        message: "Failed to RESET password, please try again"
                    })
                }
            }
        }
    }
    catch (error){
        res.send(error.message);
    }
}
module.exports ={
    getUserLogin,
    updateUserPwd,
    resetUserPwd
}