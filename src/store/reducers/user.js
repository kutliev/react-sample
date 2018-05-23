import ActionTypes from '../actions/ActionTypes';
// import User from '../models/User';

const initialState = {
  isAuthenticated: true,
  name: 'John Doe',
  email: 'jd@yahoo.com',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      return state;
    default:
      return state;
  }
}
