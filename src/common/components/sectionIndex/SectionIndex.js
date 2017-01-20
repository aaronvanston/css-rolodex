import React, { PropTypes } from 'react';

const SectionIndex = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Section: {props.params.section}</h1>
      {props.children}
    </div>
  );
};

SectionIndex.propTypes = {
  children: PropTypes.element,
  params: PropTypes.shape({
    section: PropTypes.string,
  }),
};

export default SectionIndex;
