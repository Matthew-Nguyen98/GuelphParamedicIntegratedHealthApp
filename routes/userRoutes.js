'use strict';

const express = require('express');
const router = express.Router();
const userControler = require('../controllers/userController');
const sql = require('mssql');
const config = require('../config');
const utils = require('../data/utils');
var assert = require('assert');

//login

const {getUserLogin} = userControler;
//router.post('/login/:emailAddress',getUserLogin);

router.post('/login',getUserLogin); 
// async (req,res) => {
//     let {emailAddress, password} = req.body;
//     emailAddress = emailAddress.trim();
//     password = password.trim();
//     if (emailAddress == "" || password == ""){
//         res.json({
//             status: "FAILED",
//             message: "Missing credentials"
//         })
//     }
//     else{
//         //email & pwd provided
//         //hash input pwd and put in qry for compare
//         var crypto = require('crypto');
//         var hash = crypto.createHash('sha256');
//         var inputPwd = hash.password;
        
//         }
//         //compare hashed pwd
//         // if (userLogin != null){
//         //     userLogin.recordsets[0].passwordHashed
//         //     //var abc = res.body.passwordhashed;
//         //     const hashedpwd = userLogin.passwordHashed;
//         //     var crypto = require('crypto');
//         //     var hash = crypto.createHash('sha256');
//         //     var inputPwd = hash.password;
//         //     if (assert.equal(hashedpwd,inputPwd)){
//         //         console.log("matched!");
//         //     }
//         // }
    // }
// );

//forgot pwd
router.post('/forgot/', (req,res) =>{

});
//reset pwd
router.post('/pwdreset/', (req,res) =>{

})

module.exports = {
    routes: router
}


//router.post('/login', (req, res)=> {
    //     const email = req.body.email;
    //     const password = req.body.password;
      
    //     if (email && password) {
    //       db.query('SELECT password FROM users WHERE email = ?', [email], 
    //         (error, results, fields)=> {
    //           if (bcrypt.compareSync(password, {hash from db})) {
    //               res.send("Successful");
    //           } else {
    //               res.send('Incorrect Email and/or Password!');
    //           }           
    //           res.end();
    //       });
    //     } else {
    //       res.send('Please enter Username and Password!');
    //       res.end();
    //     }
    //   });
    