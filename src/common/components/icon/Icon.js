import React, { PropTypes } from 'react';
import * as paths from './paths';

import styles from './Icon.css';

const Icon = ({
  name,
  size = '1em',
  fill = 'currentColor',
  ...props
}) => {
  const iconPaths = paths[name];

  return (
    <svg
      {...props}
      className={styles.icon}
      width={size}
      height={size}
      fill={fill}
      data-id={`icon-${name}`}
      viewBox="0 0 40 40"
    >
      {iconPaths.map((path, i) => <path key={i} d={path} />)}
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(paths)),
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fill: PropTypes.string,
};

export default Icon;
