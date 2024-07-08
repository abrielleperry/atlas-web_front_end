function processPayment(amount) {
  console.log('Collecting payment of ' + amount);
}

function processOrder(amount, orderId) {
  console.log(orderId + ' is being processed')
  processPayment(amount);
  console.log(orderId + ' has been fully processed')

}
