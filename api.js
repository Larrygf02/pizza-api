'use strict'
const Api = require('claudia-api-buider')
const api = new Api()

api.get('/pizzas', () => {
    return [
        'Capricciosa',
        'Quattro Formaggi',
        'Napoletana',
        'Margherita'
    ]
})