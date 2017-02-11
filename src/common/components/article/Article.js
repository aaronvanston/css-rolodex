import React, { PropTypes } from 'react';

import { Content } from '~/common/components';

const Article = props => (
  <div>
    <h1>Section: {props.params.section}</h1>
    <Content
      section={props.params.section}
      article={props.params.article}
    />
  </div>
  );

Article.propTypes = {
  params: PropTypes.shape({
    section: PropTypes.string,
    article: PropTypes.string,
  }),
};

export default Article;
