import { createTheme } from '@mui/material';
import {
  blueGrey,
  deepOrange,
  green,
  grey,
  lightBlue,
} from '@mui/material/colors';

const palette = {
  primary: lightBlue[500],
  secondary: green[400],
  accent: deepOrange[300],
  disabled: grey[500],
  background: blueGrey[900],
  gray: grey[300],
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.secondary,
    },
    accent: {
      main: palette.accent,
    },
    action: {
      disabled: palette.disabled,
    },
    background: {
      default: palette.background,
    },
  },
  typography: {
    allVariants: {
      color: palette.gray,
    },
  },
});
