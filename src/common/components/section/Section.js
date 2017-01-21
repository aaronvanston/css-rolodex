import React, { PropTypes } from 'react';

import styles from './Section.css';

const SectionIndex = props => (
  <div className={styles.section}>
    {props.children}
  </div>
  );

SectionIndex.propTypes = {
  children: PropTypes.element,
};

export default SectionIndex;
