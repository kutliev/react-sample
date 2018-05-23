import ActionTypes from './ActionTypes';

export function addOrder(payload) {
  return {
    type: ActionTypes.ADD_ORDER,
    payload,
  };
}

export function removeOrder(orderId) {
  return {
    type: ActionTypes.REMOVE_ORDER,
    orderId,
  };
}
