import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate, unauthenticate } from '../../store/actions';

const Gate = ({ logIn, logOut }) => (
  <div>
    <h2>Gate</h2>
    <div>
      <button onClick={logIn}>LOG IN</button>
      <button onClick={logOut}>LOG OUT</button>
    </div>
  </div>
);

Gate.propTypes = {
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(authenticate()),
  logOut: () => dispatch(unauthenticate()),
});

export default connect(null, mapDispatchToProps)(Gate);
