const { calculateDiscount } = require('./src/discountEngine');
const { requiresManagerApproval } = require('./src/approvalWorkflow');
const { validateOrder } = require('./src/orderValidator');
const orders = require('./data/sample-orders.json');

orders.forEach((order, idx) => {
  console.log(`\n--- Order ${idx + 1}: ${order.id} ---`);
  const errors = validateOrder(order);
  if (errors.length) {
    console.log('Validation errors:', errors);
    return;
  }
  const discount = calculateDiscount(order, order.customer);
  const needsApproval = requiresManagerApproval(order, discount);
  console.log(`Discount: ${(discount * 100).toFixed(1)}%`);
  console.log(`Requires manager approval: ${needsApproval}`);
});
