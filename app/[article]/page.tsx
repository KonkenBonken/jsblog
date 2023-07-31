import ReactMarkdown from 'react-markdown';
import Article from 'content/Article';
import type { NextPage } from 'next';
import { assertDefined } from 'utils/assert';

import './globals.css';

type pageProps = {
  article: string
}

const Page: NextPage<{ params: pageProps }> = ({ params: { article } }) => {
  const markdown = Article.getArticle(article)?.markdown;
  assertDefined(markdown);

  return (<>
    <ReactMarkdown>
      {markdown}
    </ReactMarkdown>
  </>);
};

export default Page;

export const generateStaticParams = (): pageProps[] =>
  Article.titles.map(article => ({ article }));
