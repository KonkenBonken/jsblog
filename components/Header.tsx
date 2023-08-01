import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

export default function Header() {
  return <AppBar position="fixed">
    <Typography variant="h2" component="h4" p=".2em 1ch">
      JS Blog
    </Typography>
  </AppBar>;
}
