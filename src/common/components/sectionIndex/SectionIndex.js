import React, { PropTypes } from 'react';

const SectionIndex = props => (
  <div>
    <h1>Section: {props.params.section}</h1>
  </div>
);

SectionIndex.propTypes = {
  params: PropTypes.shape({
    section: PropTypes.string,
  }),
};

export default SectionIndex;
