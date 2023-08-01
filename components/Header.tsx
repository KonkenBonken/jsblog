import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

export default function Header() {
  return <AppBar position="fixed">
    <Typography variant="h2" component="h4" gutterBottom>
      JS Blog
    </Typography>
  </AppBar>;
}
