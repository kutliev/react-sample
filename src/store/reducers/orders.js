import ActionTypes from '../actions/ActionTypes';
import Order from '../models/Order';

const initialState = [
  new Order(1, 'One', 100),
  new Order(2, 'Two', 200),
  new Order(3, 'Three', 300),
];

export default function orders(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_ORDER:
      return [...state, action.payload];
    case ActionTypes.REMOVE_ORDER:
      return state.filter(order => order.id !== action.orderId);
    default:
      return state;
  }
}
