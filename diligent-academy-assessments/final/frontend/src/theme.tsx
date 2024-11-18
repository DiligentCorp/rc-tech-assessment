import { createTheme } from '@mui/material/styles';
import { red, blue, blueGrey } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: blue.A400,
    },
    secondary: {
      main: blueGrey.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
