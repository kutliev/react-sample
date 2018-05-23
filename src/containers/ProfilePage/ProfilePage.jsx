import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProfilePage = ({ name, email }) => (
  <div>
    <h2>Profile</h2>
    <p>
      Name: { name }<br />
      Email: { email }<br />
    </p>
  </div>
);

ProfilePage.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state.user.name,
  email: state.user.email,
});

export default connect(mapStateToProps)(ProfilePage);
