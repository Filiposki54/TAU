export function createUser(name, email, password) {
  const user = { name, email, password };
  return user;
}
export function getUser(userId) {
  const user = { id: userId, name: 'John', email: 'john@example.com' };
  return user;
}
export function updateUser(userId, updatedUserData) {
  const updatedUser = { id: userId, ...updatedUserData };
  return updatedUser;
}
export function deleteUser(userId) {
  return true;
}
export function createProduct(name, price, description) {
  const product = { name, price, description };
  return product;
}
export function getProduct(productId) {
  const product = {
    id: productId,
    name: 'Product X',
    price: 9.99,
    description: 'Description of product X',
  };
  return product;
}
export function updateProduct(productId, updatedProductData) {
  const updatedProduct = { id: productId, ...updatedProductData };
  return updatedProduct;
}
export function deleteProduct(productId) {
  return true;
}
export function createOrder(customerName, orderItems) {
  const order = { customerName, orderItems };
  return order;
}
export function getOrder(orderId) {
  const order = {
    id: orderId,
    customerName: 'John Smith',
    orderItems: [
      { productId: 1, quantity: 2 },
      { productId: 3, quantity: 1 },
    ],
  };
  return order;
}
