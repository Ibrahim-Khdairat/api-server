'use strict';

const { sequelize, DataTypes } = require('sequelize');

const Food = (sequelize , DataTypes) => sequelize.define('Foods' , {
    foodName : {
        type : DataTypes.STRING,
        allowNull : false
    },

    foodSize : {
        type : DataTypes.STRING,
        allowNull : false
    },

    customerId : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
})

module.exports = Food;