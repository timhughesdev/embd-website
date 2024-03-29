import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#DEE2E9",
  secondary: "#4671B2",
  // success:
  info: "#000",
  // danger:
  // warning:
  // dark:
  light: "#aaa",
  // muted:
  // border:
  // inverse:
  //////////////
  //Solid Color
  //////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundImage: "url(src/assets/images/Background-Circles.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            height: "100%",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: false,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableFocus: false,
      },
    },
    MuiFab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  MuiList: {
    root: {
      width: "fit-content",
    },
  },
});

export default theme;
