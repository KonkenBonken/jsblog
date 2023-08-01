import Header from 'components/Header';
import './globals.scss';

export default function Layout({
  children
}: {
  children: React.ReactNode
}
) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
