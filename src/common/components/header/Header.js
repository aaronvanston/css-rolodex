import React from 'react';
import { Link } from 'react-router';

import { cssRolodex } from '~/images/';
import styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img src={cssRolodex} alt="CSS Rolodex" className={styles.logo} />
    </Link>
  </header>
);

export default Header;
