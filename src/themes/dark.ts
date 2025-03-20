import { createTheme } from '@mui/material';
import { blue, blueGrey, grey, orange } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[200],
    },
    secondary: {
      main: orange[300],
    },
    action: {
      disabled: grey[500],
    },
    background: {
      default: blueGrey[900],
    },
  },
});
