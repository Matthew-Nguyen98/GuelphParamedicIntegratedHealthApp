'use strict';

const express = require('express');
const router = express.Router();
const userControler = require('../controllers/userController');

//var assert = require('assert');

const {getUserLogin} = userControler;
const {updateUserPwd} = userControler;
const {resetUserPwd} = userControler;

//login
router.post('/login',getUserLogin); 

//forgot pwd
router.post('/changepwd/', updateUserPwd) ;
//reset pwd
router.post('/pwdreset/', resetUserPwd);
//
module.exports = {
    routes: router
}

    