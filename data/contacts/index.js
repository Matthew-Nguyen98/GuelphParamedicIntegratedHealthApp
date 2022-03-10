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

module.exports = {
    getContacts
}