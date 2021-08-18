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
} = require('../routes-implementations/customer.route-implementations');


router.get('/customer', getAll);
router.post('/customer', create);
router.get('/customer/:id', getOne);
router.put('/customer/:id', update);
router.delete('/customer/:id', deleteOne);

module.exports = router;
