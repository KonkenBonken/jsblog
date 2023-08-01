"use client";

import SyntaxHighlighter from 'react-syntax-highlighter';
import OverrideComponent from 'utils/override';

export default OverrideComponent(({ content }) => {
  return <SyntaxHighlighter
    language="javascript" showLineNumbers
  >
    {content}
  </SyntaxHighlighter >;
});

