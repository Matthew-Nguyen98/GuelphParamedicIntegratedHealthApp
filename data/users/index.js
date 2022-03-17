'use strict';

require('dotenv').config();
const utils = require('../utils');
const config = require ('../../config');
const sql = require('mssql');
const nodemailer = require('nodemailer');


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

const updateUserPwd = async(emailAddress,newHashedPwd) => {
    try {
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('users');
        const userLogin = await pool.request()
                                .input('emailAddress', sql.VarChar, emailAddress)
                                .input('newHashedPwd',sql.NVarChar,newHashedPwd)
                                .query(qry.changepwd);
        if (userLogin.rowsAffected == 1){
            return true;
        }
        else {return false};
    } catch (error) {
        return error.message;
    }
}
const resetUserPwd = async(emailAddress,newHashedPwd) => {
    try {
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('users');
        const userLogin = await pool.request()
                                .input('emailAddress', sql.VarChar, emailAddress)
                                .input('newHashedPwd',sql.NVarChar,newHashedPwd)
                                .query(qry.changepwd);
        if (userLogin.rowsAffected == 1){
            return true;
        }
        else {return false};
    } catch (error) {
        return error.message;
    }
}
const checkUserExist = async(emailAddress) => {
    try {
        let pool = await sql.connect(config.sql);
        const qry = await utils.loadSqlQries('users');
        const userExist = await pool.request()
                                .input('emailAddress', sql.VarChar, emailAddress)
                                .query(qry.userexist);
        return userExist.recordset;

    } catch (error) {
        return error.message;
    }
}
module.exports = {
    getUserLogin,
    updateUserPwd,
    resetUserPwd,
    checkUserExist
}