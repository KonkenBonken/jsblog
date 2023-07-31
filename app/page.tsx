import Library from "content/Library";

export default function RootLayout() {
  return (
    <ul>
      {Library.titles.map(title => <li key={title}>
        <a href={title}>{title}</a>
      </li>)}
    </ul>
  );
}
