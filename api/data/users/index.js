'use strict';

const utils = require('../utils');
const config = require ('../../config');
const sql = require('mssql');

const getUserLogin = async(emailAddress,inputPwd) => {
    try {
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('users');
        const userLogin = await pool.request()
                                .input('emailAddress', sql.VarChar, emailAddress)
                                .input('inputPwd',sql.NVarChar,inputPwd)
                                .query(qry.userlogin);
        return userLogin.recordset;

    } catch (error) {
        return error.message;
    }
}
module.exports = {
    getUserLogin
}