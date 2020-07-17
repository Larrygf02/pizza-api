const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function updateOrder(id, body) {
    if (!id || !body || !body.pizza || !body.address) {
        throw new Error('Order ID and updates object are required for updating the order')
    }
    return docClient.update({
        TableName: 'pizza-orders',
        Key: {
            orderId: id
        },
        UpdateExpression: "set pizza = :p, address= :a",
        ExpressionAttributeValues: {
            ":p": body.pizza,
            ":a": body.address
        },
        ReturnValues: 'ALL_NEW'
    }).promise()
    .then(result => result.Attributes)
    .catch(error => {
        throw error
    })
    return {
        message: `Order ${id} was successfully updated`
    }
}
module.exports = updateOrder