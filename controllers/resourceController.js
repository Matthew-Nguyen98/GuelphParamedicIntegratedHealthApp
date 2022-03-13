'use strict';

const resourceData = require('../data/resources');

const getResources = async (req,res,next) =>{
    try {
        const resources = await resourceData.getResources();
        res.send(resources);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getResourceDetail = async (req,res,next) =>{
    try {
        const resourceId = req.params.id;
        const resource = await resourceData.getResourceDetail(resourceId);
        res.send(resource);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    getResources,
    getResourceDetail
}