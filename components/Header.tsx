import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';

export default function Header() {
  return <AppBar position="fixed">
    <Link href="/" color="inherit" variant="h2" p=".2em 1ch" underline="hover">
      JS Blog
    </Link>
  </AppBar>;
}
