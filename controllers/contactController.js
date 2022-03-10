'use strict';

const contactData = require('../data/contacts');

const getContacts = async (req,res,next) =>{
    try {
        const contacts = await contactData.getContacts();
        res.send(contacts);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    getContacts
}