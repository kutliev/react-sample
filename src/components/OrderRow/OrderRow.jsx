import React from 'react';
import PropTypes from 'prop-types';
import Order from '../../store/models/Order';

const displayPrice = price => (price / 100).toFixed(2);

const OrderRow = ({ order, removeClick }) => (
  <div>
    ID: { order.id }<br />
    Title: { order.title }<br />
    Price: { displayPrice(order.price) }<br />
    <button onClick={() => { removeClick(); }}>
      Remove
    </button>
  </div>
);

OrderRow.propTypes = {
  order: PropTypes.instanceOf(Order).isRequired,
  removeClick: PropTypes.func.isRequired,
};

export default OrderRow;
