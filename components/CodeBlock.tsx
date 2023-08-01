"use client";

import SyntaxHighlighter from 'react-syntax-highlighter';

export default function CodeSnippet({ children: { props: { children: code } } }: { children: { props: { children: string } } }) {
  return <SyntaxHighlighter
    language="javascript" showLineNumbers
  >
    {code}
  </SyntaxHighlighter >;
}
