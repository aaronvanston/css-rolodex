import React, { PropTypes } from 'react';

import { Aside, Search } from '~/common/components';

import styles from './App.css';

const App = props => (
  <div className={styles.wrapper}>
    <Aside />

    <section className={styles.content}>
      <Search />

      <main className={styles.main}>
        {props.children}
      </main>
    </section>
  </div>
);


App.propTypes = {
  children: PropTypes.element,
};

export default App;
