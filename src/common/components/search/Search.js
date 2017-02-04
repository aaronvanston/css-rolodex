import React from 'react';

import { Icon, SearchSuggest } from '~/common/components';

import styles from './Search.css';

const Search = () => (
  <div className={styles.search}>
    <div className={styles.inputGroup}>
      <Icon name="search" />

      <label htmlFor="search" className={styles.label}>Search CSS Rolodex</label>

      <SearchSuggest />
    </div>
  </div>
);

export default Search;
