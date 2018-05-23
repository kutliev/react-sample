import React from 'react';
import PropTypes from 'prop-types';
import Order from '../../store/models/Order';

const OrderRow = ({ order, removeClick }) => (
  <div>
    ID: { order.id }<br />
    Title: { order.title }<br />
    Price: { order.price }<br />
    <button onClick={() => removeClick(order.id)}>Remove</button>
  </div>
);

OrderRow.propTypes = {
  order: PropTypes.instanceOf(Order).isRequired,
  removeClick: PropTypes.func.isRequired,
};

export default OrderRow;
