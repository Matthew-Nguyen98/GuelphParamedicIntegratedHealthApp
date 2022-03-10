'use strict';

const express = require('express');
const contactController = require('../controllers/contactController');
const router = express.Router();

const {getContacts} = contactController;

router.get('/contacts',getContacts);

module.exports = {
    routes: router
}