"use client";
import type { NextPage } from 'next';
import ReactMarkdown from 'markdown-to-jsx';
import SyntaxHighlighter from 'react-syntax-highlighter';

import Article from 'content/Article';
import { assertDefined } from 'utils/assert';

import './globals.css';

type pageProps = {
  article: string
}

function CodeSnippet({ children: { props: { children: code } } }: { children: { props: { children: string } } }) {
  return <SyntaxHighlighter
    language="javascript" showLineNumbers
  >
    {code}
  </SyntaxHighlighter >;
}

const Page: NextPage<{ params: pageProps }> = ({ params: { article } }) => {
  const markdown = Article.getArticle(article)?.markdown;
  assertDefined(markdown);

  return (<>
    <ReactMarkdown options={{
      overrides: {
        pre: CodeSnippet
      }
    }}>
      {markdown}
    </ReactMarkdown>
  </>);
};

export default Page;

export const generateStaticParams = (): pageProps[] =>
  Article.titles.map(article => ({ article }));
