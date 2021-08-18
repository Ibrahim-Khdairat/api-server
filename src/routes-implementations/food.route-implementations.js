'use strict';

const {Food} = require ('../models/index');

async function getAll(req, res){
    let foods = await Food.getAll();
    res.status(200).json(foods);
}

async function create(req, res){
  let food = req.body;

  let foods = await Food.create(food);
  res.status(200).json(foods);
}

async function getOne(req, res){
    let id = parseInt(req.params.id);

    let food = await Food.getOne(id);
    res.status(200).json(food);
}

async function update(req, res){
    let id = parseInt(req.params.id);
    let foodInfo = req.body;

    let food = await Food.update(foodInfo, id);
    res.status(200).json(food);
}

async function deleteOne(req, res){
    let id = parseInt(req.params.id);

    await Food.deletei(id);
}



module.exports = {
    getAll,
    create,
    getOne,
    update,
    deleteOne }