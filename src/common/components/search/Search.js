import React from 'react';

import { Icon } from '~/common/components';

import styles from './Search.css';

const Search = () => (
  <div className={styles.search}>
    <Icon name="search" />
    Search
  </div>
);

export default Search;
