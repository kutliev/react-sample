import React from 'react';
import PropTypes from 'prop-types';
import Order from '../../store/models/Order';
import styles from './OrderRow.scss';

const displayPrice = price => (price / 100).toFixed(2);

const OrderRow = ({ order, removeClick }) => (
  <div className={styles.row}>
    <div className={styles.order_id}>
      <span>ID</span> { order.id }
    </div>
    <div className={styles.order_title}>
      <span>Title</span> { order.title }
    </div>
    <div className={styles.order_price}>
      <span>Price</span> { displayPrice(order.price) }
    </div>
    <button className={styles.remove_button} onClick={() => { removeClick(); }}>
      Remove
    </button>
  </div>
);

OrderRow.propTypes = {
  order: PropTypes.instanceOf(Order).isRequired,
  removeClick: PropTypes.func.isRequired,
};

export default OrderRow;
