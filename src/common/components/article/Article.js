import React, { PropTypes } from 'react';

const Article = props => (
  <div>
    <h1>Section: {props.params.section}</h1>
    <h2>Article: {props.params.article}</h2>
  </div>
  );

Article.propTypes = {
  params: PropTypes.shape({
    section: PropTypes.string,
    article: PropTypes.string,
  }),
};

export default Article;
