import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate, unauthenticate } from '../../store/actions';

const Gate = ({ isAuthenticated, logIn, logOut }) => (
  <div>
    <h2>Gate</h2>
    <div>
      {!isAuthenticated && (
        <button onClick={logIn}>LOG IN</button>
      )}

      {isAuthenticated && (
        <button onClick={logOut}>LOG OUT</button>
      )}
    </div>
  </div>
);

Gate.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(authenticate()),
  logOut: () => dispatch(unauthenticate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gate);
