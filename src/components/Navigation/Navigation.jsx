import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.scss';

const Navigation = () => (
  <ul className={styles.navigation}>
    <li><NavLink exact to="/" activeClassName={styles.active}>Orders</NavLink></li>
    <li><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
    <li><NavLink to="/gate" activeClassName={styles.active}>Gate</NavLink></li>
  </ul>
);

export default Navigation;
