import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OrderList from '../../components/OrderList';
import AddOrderForm from '../AddOrderForm';
import { addOrder, removeOrder } from '../../../../trial/src/store/actions';

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.removeClick = this.removeClick.bind(this);
  }

  getNewOrderId() {
    return Math.max(...this.props.orders.map(order => order.id)) + 1;
  }

  removeClick(id) {
    // eslint-disable-next-line
    console.log(`removeClick ID: ${id}`);
    return this.props.orders.filter(order => order.id === id);
  }

  render() {
    return (
      <div>
        <h2>Order Page</h2>
        <OrderList orders={this.props.orders} removeClick={this.props.removeOrder} />
        <AddOrderForm handleAdd={this.props.saveOrder} newOrderId={this.getNewOrderId()} />
      </div>
    );
  }
}

OrderPage.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  saveOrder: PropTypes.func.isRequired,
  removeOrder: PropTypes.func.isRequired,
};

function getOrders(state) {
  if (!state.orders) {
    return [];
  }

  return state.orders;
}

const mapStateToProps = state => ({
  orders: getOrders(state),
});

const mapDispatchToProps = dispatch => ({
  saveOrder: (newOrder) => {
    dispatch(addOrder(newOrder));
  },
  removeOrder: (orderId) => {
    dispatch(removeOrder(orderId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
