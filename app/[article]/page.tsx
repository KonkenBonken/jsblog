import type { NextPage } from 'next';
import ReactMarkdown from 'markdown-to-jsx';

import Article from 'content/Article';
import { assertDefined } from 'utils/assert';
import CodeBlock from 'components/CodeBlock';
import Typography from 'components/Typography';

type pageProps = {
  article: string
}

const Page: NextPage<{ params: pageProps }> = ({ params: { article } }) => {
  const markdown = Article.getArticle(article)?.markdown;
  assertDefined(markdown);

  return (<>
    <ReactMarkdown options={{
      overrides: {
        pre: CodeBlock,
        h1: Typography.H1,
        h2: Typography.H2,
        p: Typography.P,
      }
    }}>
      {markdown}
    </ReactMarkdown>
  </>);
};

export default Page;

export const generateStaticParams = (): pageProps[] =>
  Article.titles.map(article => ({ article }));
