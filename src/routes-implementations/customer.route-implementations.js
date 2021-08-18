'use strict';

const {Customer} = require ('../models/index');

async function getAll(req, res){
    let customers = await Customer.getAll();
    res.status(200).json(customers);
}

async function create(req, res){
  let customer = req.body;

  let customers = await Customer.create(customer);
  res.status(200).json(customers);
}

async function getOne(req, res){
    let id = parseInt(req.params.id);

    let customer = await Customer.getOne(id);
    res.status(200).json(customer);
}

async function update(req, res){
    let id = parseInt(req.params.id);
    let customerInfo = req.body;

    let customer = await Customer.update(customerInfo, id);
    res.status(200).json(customer);
}

async function deleteOne(req, res){
    let id = parseInt(req.params.id);

    await Customer.deletei(id);
}


module.exports = {
    getAll,
    create,
    getOne,
    update,
    deleteOne }