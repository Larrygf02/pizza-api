const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function getOrderbyId(orderId) {
    return docClient.get({
        TableName: 'pizza-orders',
        Key: {
            orderId: orderId
        }
    }).promise()
    .then(result => result.Item)
}

module.exports = getOrders