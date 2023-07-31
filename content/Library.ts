import kebabCase from 'just-kebab-case';

import { assertStringArray } from 'utils/assert';
import articlesJSON from 'content/articles.json';

assertStringArray(articlesJSON);

function articleToTitle(article: string) {
  return kebabCase(article.split('\n', 1)[0].toLowerCase());
}

export default {
  articles: articlesJSON,

  get titles() {
    return this.articles.map(articleToTitle);
  },

  getArticle(title: string) {
    return this.articles.find(article => articleToTitle(article) === title);
  }
};
