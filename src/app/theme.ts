// Native Base
import { theme } from "native-base";

const Theme: any = {
  background: {
    gradientColors: {
      lightMode: [theme.colors.gray[200], theme.colors.gray[100]],
      darkMode: [theme.colors.blueGray[900], theme.colors.blueGray[800]],
    },
  },
  button: {
    primary: {
      gradientColors: {
        lightMode: [theme.colors.darkBlue[500], theme.colors.purple[700]],
        darkMode: [theme.colors.darkBlue[500], theme.colors.purple[700]],
      },
    },
    secondary: {
      gradientColors: {
        lightMode: [theme.colors.gray[400], theme.colors.gray[500]],
        darkMode: [theme.colors.blueGray[600], theme.colors.blueGray[700]],
      },
    },
  },
};

export default Theme;
