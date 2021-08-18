'use strict';
const express = require('express');
const router = express.Router();

const 
{
    getAll,
    create,
    getOne,
    update,
    deleteOne
} = require('../routes-implementations/food.route-implementations');


router.get('/food', getAll);
router.post('/food', create);
router.get('/food/:id', getOne);
router.put('/food/:id', update);
router.delete('/food/:id', deleteOne);

module.exports = router;
