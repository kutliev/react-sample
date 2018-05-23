import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li><Link to="/">Orders</Link></li>
    <li><Link to="/profile">Profile</Link></li>
    <li><Link to="/gate">Gate</Link></li>
  </ul>
);

export default Navigation;
