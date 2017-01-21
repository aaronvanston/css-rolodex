import React, { PropTypes } from 'react';

import styles from './Section.css';

const Section = props => (
  <div className={styles.section}>
    {props.children}
  </div>
  );

Section.propTypes = {
  children: PropTypes.element,
};

export default Section;
