class Order {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    // saving price in cents to avoid roundation errors
    this.price = Math.round(Number.parseInt(100 * price, 0));
  }
}

export default Order;
