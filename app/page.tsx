import Article from "content/Article";

export default function RootLayout() {
  return (
    <ul>
      {Article.titles.map(title => <li key={title}>
        <a href={title}>{title}</a>
      </li>)}
    </ul>
  );
}
