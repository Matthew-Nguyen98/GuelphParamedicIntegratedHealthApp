'use strict';

require('dotenv').config();
const utils = require('../utils');
const config = require ('../../config');
const sql = require('mssql');

const getAllPdf = async() =>{
    try{
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('assessments');
        const list = await pool.request().query(qry.pdflist);
        return list.recordset;

    }
    catch (error){
        return error.message;
    }
}
const searchPdf = async() =>{
    try{
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('assessments');
        const list = await pool.request().query(qry.searchPdf);
        return list.recordset;

    }
    catch (error){
        return error.message;
    }
}

const readPdf = async() =>{
    try{
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('assessments');
        const list = await pool.request().query(qry.readpdf);
        return list.recordset;

    }
    catch (error){
        return error.message;
    }
}

module.exports = {
    getAllPdf,
    searchPdf,
    readPdf
}