"use client";

import type { CSSProperties } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import OverrideComponent from 'utils/override';

export default OverrideComponent(({ content }) => {
  return <SyntaxHighlighter
    language="javascript"
    showLineNumbers
    customStyle={{
      display: 'inline-block',
      minWidth: '40vw'
    } satisfies CSSProperties}
  >
    {content}
  </SyntaxHighlighter >;
});

