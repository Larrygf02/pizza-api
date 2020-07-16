const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function getOrders() {
    return docClient.scan({
        TableName: 'pizza-orders'
    }).promise()
    .then(result => result.Items)
}

module.exports = getOrders