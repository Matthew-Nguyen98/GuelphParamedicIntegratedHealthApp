'use strict';

const userData = require('../data/users');

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
            var crypto = require('crypto');
            var hash = crypto.createHash('sha256');
            var inputPwd = hash.password;
        }
        const user = await userData.getUserLogin(emailAddress,inputPwd);
        res.send(user);
    } catch (error) {
        res.send(error.message);
    }
}

module.exports ={
    getUserLogin
}