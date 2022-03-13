'use strict';

const contactData = require('../data/contacts');
const userData = require('../data/users');
const getContacts = async (req,res,next) =>{
    try {
        const contacts = await contactData.getContacts();
        res.send(contacts);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getContactDetail = async (req,res,next) =>{
    try {
        const contactId = req.params.id;
        const contact = await contactData.getContactDetail(contactId);
        //const contact = await userData.getUserLogin('tan@luong.com');
        res.send(contact);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    getContacts,
    getContactDetail
}