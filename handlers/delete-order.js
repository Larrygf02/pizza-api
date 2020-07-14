function deleteOrder(id) {
    if (!id) {
        throw new Error('Order id is required for deleting order')
    }
    return {}
}

module.exports = deleteOrder