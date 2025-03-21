import { createTheme } from '@mui/material';
import { blue, blueGrey, grey, orange } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      100: blue[500],
      200: blue[600],
      300: blue[700],
      400: blue[800],
      main: blue[900],
    },
    hoverPrimary: {
      main: blue[300],
    },
    secondary: {
      main: orange[200],
    },
    action: {
      disabled: grey[500],
    },
    background: {
      default: blueGrey[900],
    },
  },
  typography: {
    allVariants: {
      color: grey[300],
    },
  },
});
