'use strict';

const { json } = require('express');
const express =  require('express');
const app = express();
app.use(express.json());

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const loggerMiddleWare = require('./middleware/logger');

const foodRoutes = require('./routes/food.route');
const customerRoutes = require('./routes/costumer.route');

app.get('/' , (req,res)=>{
    res.status(200).send("Every Thing Is Working Good :)")
})
app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});

app.get('/status', (req, res) => {
    let statusOutput = {
        "domain": "ibrahim-api-server.herokuapp.com",
        "status": "running",
        "PORT ": 3000,
    }
    res.status(200).json(statusOutput)
})

app.use(loggerMiddleWare);
app.use(foodRoutes);
app.use(customerRoutes);

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}
