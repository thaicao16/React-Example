import { DefaultTheme, MD3DarkTheme, Provider as PaperProvider, ExtendedTheme } from 'react-native-paper'
import colors from '../../App/constants/colors'

// export const palette = {
//     primary: "#0564d4",
//     secondary: "#ff6a00",
//     background: "#f6f8fa",
//     white: "#fff",
//     black: "#101214",
//     button: "#1c1e21",
//     shadow: "#757575",
//     text: "#30363b",
//     borderColor: "#d0d7de",
//     borderColorDark: "#333942",
//     placeholder: "#a1a1a1",
//     danger: "rgb(208, 2, 27)",
//     title: "rgb(102, 102, 102)",
//     separator: "rgb(194, 194, 195)",
//     highlight: "rgb(199, 198, 203)",
//     blackOverlay: "rgba(0,0,0,0.6)",
//     iconWhite: "#fff",
//     iconBlack: "#101214",
//     dynamicWhite: "#fff",
//     dynamicBlack: "#1c1e21",
//     dynamicBackground: "#fff",
//     transparent: "transparent",
//     calpyse: "#2b7488",
//   };


  export const LightTheme: ExtendedTheme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
        background: colors.white,
        foreground: colors.black,
        ...colors,
    //   background: palette.white,
    //   foreground: palette.black,
    //   text: palette.black,
    //   tabBar: palette.white,
    //   iconWhite: palette.white,
    //   iconBlack: palette.black,
    //   dynamicBackground: palette.dynamicWhite,
    //   shadow: palette.transparent,
    //   borderColor: palette.borderColor,
    //   ...palette,
    },
  };
  
  export const DarkTheme: ExtendedTheme = {
    ...MD3DarkTheme,
    colors: {
      ...LightTheme.colors,
    //   background: palette.black,
    //   foreground: palette.white,
    //   text: palette.white,
    //   tabBar: palette.black,
    //   iconWhite: palette.black,
    //   iconBlack: palette.white,
    //   dynamicBackground: palette.dynamicBlack,
    //   shadow: palette.transparent,
    //   borderColor: palette.borderColorDark,
    },
  };