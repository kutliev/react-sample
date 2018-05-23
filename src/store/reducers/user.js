import ActionTypes from '../actions/ActionTypes';
// import User from '../models/User';

const initialState = {
  isAuthenticated: true,
  name: 'John Doe',
  email: 'jd@yahoo.com',
};

const emptyState = {
  isAuthenticated: false,
  name: '',
  email: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      return initialState;
    case ActionTypes.UNAUTHENTICATE:
      return emptyState;
    default:
      return state;
  }
}
