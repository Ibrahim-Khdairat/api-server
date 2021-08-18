'use strict';

const { sequelize, DataTypes } = require('sequelize');

const Customer = (sequelize , DataTypes) => sequelize.define('Customers' , {
    customerName : {
        type : DataTypes.STRING,
        allowNull : false,
    }
});

module.exports = Customer;