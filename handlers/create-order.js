
function createOrder(order) {
    if (!order || !order.pizzaId || !order.address) {
        throw new Error('To order pizza please provide pizza type and address')
    }
    return {}
}
module.exports = createOrder