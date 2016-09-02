import React from 'react';
import marked from 'marked';

const MarkdownViewer = ({text}) => {
  text = marked(text, {sanitized: true});

  return <div className="markdown-viewer" dangerouslySetInnerHTML={{__html: text}} />;
}

export default MarkdownViewer;
