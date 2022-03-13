'use strict';

const utils = require('../utils');
const config = require ('../../config');
const sql = require('mssql');

const getContacts = async() =>{
    try{
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('contacts');
        const list = await pool.request().query(qry.contactslist);
        return list.recordset;

    }
    catch (error){
        return error.message;
    }
}

const getContactDetail = async(contactId) => {
    try {
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('contacts');
        const contactDetail = await pool.request()
                                .input('contactId', sql.Int, contactId)
                                .query(qry.contactdetail);
        return contactDetail.recordset;

    } catch (error) {
        return error.message;
    }
}
module.exports = {
    getContacts,
    getContactDetail
}