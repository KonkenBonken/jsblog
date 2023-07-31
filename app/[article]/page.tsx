import ReactMarkdown from 'react-markdown';
import Library from 'content/Library';
import type { GetStaticPaths, NextPage } from 'next';
import { assertDefined } from 'utils/assert';

import './globals.css';

type pageProps = {
  article: string
}

const Page: NextPage<{ params: pageProps }> = ({ params: { article } }) => {
  const markdown = Library.getArticle(article);
  assertDefined(markdown);

  return (<>
    <ReactMarkdown>
      {markdown}
    </ReactMarkdown>
  </>);
};

export default Page;

export const getStaticPaths: GetStaticPaths<pageProps> = () => {
  return {
    paths: Library.titles.map(article => ({
      params: { article }
    })),
    fallback: false,
  };
};
