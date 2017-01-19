import React from 'react';

import { Header } from '~/common/components';

import styles from './Aside.css';

const Aside = () => (
  <aside className={styles.aside}>
    <Header />

    <nav>
      <ul>
        <li>Properties</li>
        <li>Selectors</li>
        <li>Groups</li>
        <li>Cheatsheet</li>
      </ul>
    </nav>
  </aside>
);

export default Aside;
