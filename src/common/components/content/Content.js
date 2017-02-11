import React, { PropTypes } from 'react';
import camelCase from 'camelcase';
import { Markdown } from '~/common/components';
import fm from 'front-matter';

import * as content from '@/';

const Content = (props) => {
  const section = camelCase(props.section);
  const article = camelCase(props.article);

  return (
    <div>
      {content[section] && content[section][article] ?
        <span><Markdown markdown={fm(content[section][article]).body} /></span>
        : <div>No content found, try the search bar.</div>
      }
    </div>
  );
};

Content.propTypes = {
  section: PropTypes.string,
  article: PropTypes.string,
};

export default Content;
