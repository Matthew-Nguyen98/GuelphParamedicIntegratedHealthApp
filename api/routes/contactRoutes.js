'use strict';

const express = require('express');
const contactController = require('../controllers/contactController');
const router = express.Router();

const {getContacts,getContactDetail} = contactController;

router.get('/contacts',getContacts);
router.get('/contact/:id',getContactDetail);
module.exports = {
    routes: router
}