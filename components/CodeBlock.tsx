"use client";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { OverrideCodeComponent } from 'utils/override';

export default OverrideCodeComponent(({ content }) => {
  return <SyntaxHighlighter
    language="javascript" showLineNumbers
  >
    {content}
  </SyntaxHighlighter >;
});

