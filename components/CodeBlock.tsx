"use client";

import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeSnippet: Override = ({ content }) => {
  return <SyntaxHighlighter
    language="javascript" showLineNumbers
  >
    {content}
  </SyntaxHighlighter >;
};

export default OverrideComponent(CodeSnippet);

function OverrideComponent(Component: Override) {
  return function OverrideWrapper(
    { children: { props: { children: content } } }: OverrideProp
  ) {
    return <Component content={content} />;
  };
}

interface OverrideProp {
  children: {
    props: {
      children: string
    }
  }
}

type Override = (props: { content: string }) => JSX.Element
