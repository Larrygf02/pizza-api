const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function createOrder(request) {
    if (!request || !request.pizza || !request.address) {
        throw new Error('To order pizza please provide pizza type and address')
    }
    return docClient.put({
        TableName: 'pizza-orders',
        Item: {
            orderId: 'some-id',
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
}
module.exports = createOrder