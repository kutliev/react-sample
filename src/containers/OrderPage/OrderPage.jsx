import React, { Component } from 'react';
import OrderList from '../../components/OrderList';
import Order from '../../store/models/Order';
import AddOrderForm from '../AddOrderForm';

class OrderPage extends Component {
  constructor(props) {
    super(props);

    const initState = [
      new Order(1, 'One', 100),
      new Order(2, 'Two', 200),
      new Order(3, 'Three', 300),
    ];

    this.state = {
      orders: initState,
    };

    this.removeClick = this.removeClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  removeClick(id) {
    // eslint-disable-next-line
    console.log(`removeClick ID: ${id}`);
    return this.state.orders.filter(order => order.id === id);
  }

  handleAdd(newOrder) {
    // eslint-disable-next-line
    console.log(newOrder);
    return this.state.orders.length;
  }

  render() {
    return (
      <div>
        <h2>Order Page</h2>
        <OrderList orders={this.state.orders} removeClick={this.removeClick} />
        <AddOrderForm handleAdd={this.handleAdd} orderCount={this.state.orders.length} />
      </div>
    );
  }
}

export default OrderPage;
