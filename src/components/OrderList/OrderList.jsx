import React from 'react';
import PropType from 'prop-types';
import OrderRow from '../OrderRow';
import styles from './OrderList.scss';

const OrderList = ({ orders = [], removeClick }) => (
  <div className={styles.order_list}>
    { orders.length === 0 ? <div>No orders found</div> : '' }
    { orders.map(order =>
      <OrderRow key={order.id} order={order} removeClick={() => removeClick(order.id)} />) }
  </div>
);

OrderList.propTypes = {
  orders: PropType.arrayOf(PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    price: PropType.number.isRequired,
  })).isRequired,
  removeClick: PropType.func.isRequired,
};

export default OrderList;
