'use strict';

const userData = require('../data/users');
const crypto = require('crypto');

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
        }
        //qry for user with hashed pwd
        const user = await userData.getUserLogin(emailAddress,inputPwd);
        //
        if (user.length != 0){
            res.json({
                status: "SUCCESS",
                user
            })
        }
        else{
            res.json({
                status: "FAILED",
                message: "Invalid credentials, try again"
            })
        }
        //res.send(user);
    } catch (error) {
        res.send(error.message);
    }
}

module.exports ={
    getUserLogin
}