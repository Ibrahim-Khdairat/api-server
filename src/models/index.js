'use strict';

require('dotenv').config();


// const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://ibrahim@localhost:5432/lab4";
const POSTGRES_URI = `${process.env.POSTGRES_URI}`;

const { Sequelize, DataTypes } = require('sequelize');

const customer = require('./customer.model');
const food = require('./food.model');
const Collection = require('./library/collection');

var sequelize = new Sequelize(POSTGRES_URI, {});

const customerModel = customer(sequelize  ,DataTypes);
const foodModel = food(sequelize , DataTypes);

// create our relations that will add 'foreign keys' to our tables
customerModel.hasMany(foodModel , {sourceKey : 'id', foreignKey : 'customerId'});
foodModel.belongsTo(customerModel ,{foreignKey :'customerId' , targetKey : 'id'});

const customerCollection = new Collection(customerModel);
const foodCollection = new Collection(foodModel);

module.exports = {
    db : sequelize,
    Customer : customerCollection,
    Food : foodCollection
}

