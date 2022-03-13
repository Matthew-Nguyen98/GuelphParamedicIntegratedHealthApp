'use strict';

const utils = require('../utils');
const config = require ('../../config');
const sql = require('mssql');

const getResources = async() =>{
    try{
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('resources');
        const list = await pool.request().query(qry.resourceslist);
        return list.recordset;

    }
    catch (error){
        return error.message;
    }
}

const getResourceDetail = async(resourceId) => {
    try {
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('resources');
        const contactDetail = await pool.request()
                                .input('resourceID', sql.Int, resourceId)
                                .query(qry.resourcedetail);
        return contactDetail.recordset;

    } catch (error) {
        return error.message;
    }
}
module.exports = {
    getResources,
    getResourceDetail
}