'use strict';

const express = require('express');
const resourceControlelr = require('../controllers/resourceController');
const router = express.Router();

const {getResources,getResourceDetail} = resourceControlelr;

router.get('/resources',getResources);
router.get('/resource/:id',getResourceDetail);

module.exports = {
    routes: router
}