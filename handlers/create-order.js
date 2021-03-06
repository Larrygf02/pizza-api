const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const rp = require('minimal-request-promise');
const { v4: uuidv4 } = require('uuid')

function createOrder(request) {
    if (!request || !request.pizza || !request.address) {
        throw new Error('To order pizza please provide pizza type and address')
    }

    return rp.post('https://some-like-it-hot.effortless-serverless.com/delivery', {
        headers: {
            'Authorization': 'aunt-marias-pizzeria-1234567890',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            pickupTime: '15:34pm',
            pickupAddress: 'Aunt Maria Pizzeria',
            deliveryAddress: request.address,
            webhookUrl: 'https://whpcvzntil.execute-api.eu-central-1.amazonaws.com/chapter4_1/delivery'
        })
    }).then(rawResponse => JSON.parse(rawResponse.body))
    .then(response => {
        return docClient.put({
            TableName: 'pizza-orders',
            Item: {
                orderId: response.deliveryId,
                pizza: request.pizza,
                address: request.address,
                orderStatus: 'pending'
            }
        }).promise()
        .then(res => {
            return res
        })
        .catch(error => {
            throw error
        })
    })
}
module.exports = createOrder