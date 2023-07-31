import kebabCase from 'just-kebab-case';

import { assertStringArray } from 'utils/assert';
import articlesJSON from 'content/articles.json';

assertStringArray(articlesJSON);

class Article {
  static readonly articles = articlesJSON.map(markdown => new Article(markdown));

  static getArticle(title: string) {
    return this.articles.find(article => article.title === title);
  }

  static get titles() {
    return this.articles.map(article => article.title);
  }

  constructor(readonly markdown: string) { }

  get title() {
    return kebabCase(this.markdown.split('\n', 1)[0].toLowerCase());
  }
}

export default Article;
