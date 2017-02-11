import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ markdown }) => {
  const options = {
    escapeHtml: true,
  };

  return (
    <ReactMarkdown {...options} source={markdown} />
  );
};

Markdown.propTypes = {
  markdown: PropTypes.string,
};

export default Markdown;
