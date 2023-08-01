"use client";

import type { CSSProperties } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { OverrideCodeComponent } from 'utils/override';

export default OverrideCodeComponent(({ content }) => {
  return <SyntaxHighlighter
    language="javascript"
    showLineNumbers
    customStyle={{
      display: 'inline-block',
      minWidth: '40vw',
      backgroundColor: '#d9e8f9',
    } satisfies CSSProperties}
  >
    {content}
  </SyntaxHighlighter >;
});

