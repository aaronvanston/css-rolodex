import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import * as content from '@/';

const SectionIndex = (props) => {
  const section = props.params.section;
  const articles = _(content[section]).toPairs().sortBy(0).value();

  return (
    <div>
      <h1>Section: {section}</h1>
      {content[section] ?
        articles.map((article, articleIndex) => (
          <div key={articleIndex}>
            <Link to={`${section}/${article[0]}`}>{article[0]}</Link>
          </div>
        ))
        : <div>Like there is no content here for {section}</div>
      }
    </div>
  );
};

SectionIndex.propTypes = {
  params: PropTypes.shape({
    section: PropTypes.string,
  }),
};

export default SectionIndex;
