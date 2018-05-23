import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OrderPage from '../OrderPage';
import ProfilePage from '../ProfilePage';
import Gate from '../Gate';
import Navigation from '../../components/Navigation/Navigation';

const App = ({ user }) => (
  <Router>
    <div>
      {user.isAuthenticated && (
        <div>
          <Navigation />
          <h1>React sample</h1>
          isAuthenticated: { user.isAuthenticated ? 'Yes' : 'No' }<br />
          <Route exact path="/" component={OrderPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/gate" component={Gate} />
        </div>
      )}

      {!user.isAuthenticated && (
        <Switch>
          <Route path="/gate" component={Gate} />
          <Redirect to="/gate" />
        </Switch>
      )}
    </div>
  </Router>
);

App.propTypes = {
  user: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
