"use client";

import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeSnippet: Override = ({ children: { props: { children: code } } }) => {
  return <SyntaxHighlighter
    language="javascript" showLineNumbers
  >
    {code}
  </SyntaxHighlighter >;
};

export default CodeSnippet;

interface OverrideProp {
  children: {
    props: {
      children: string
    }
  }
}

type Override = (props: OverrideProp) => JSX.Element
