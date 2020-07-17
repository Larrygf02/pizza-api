const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function deleteOrder(id) {
    if (!id) {
        throw new Error('Order id is required for deleting order')
    }
    return docClient.delete({
        TableName: 'pizza-orders',
        Key: {
            orderId: orderId
        }
    }).promise()
    .then(response => response)
    .catch(error => {
        throw error
    })
}

module.exports = deleteOrder