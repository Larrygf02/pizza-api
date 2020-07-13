'use strict'
const getPizzas = require('./handlers/get-pizzas')
const Api = require('claudia-api-builder')
const api = new Api() 

api.get('/pizzas/{id}', (request) => {
    return getPizzas(request.pathParams.id)
},{
    error: 404
})

module.exports = api