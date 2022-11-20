import { DefaultTheme, MD3DarkTheme,MD3LightTheme, Provider as PaperProvider, ExtendedTheme, useTheme, MD3Theme } from 'react-native-paper'
// import colors from '../constants/colors'
import { configureFonts } from './fonts'

// // export const palette = {
// //     primary: "#0564d4",
// //     secondary: "#ff6a00",
// //     background: "#f6f8fa",
// //     white: "#fff",
// //     black: "#101214",
// //     button: "#1c1e21",
// //     shadow: "#757575",
// //     text: "#30363b",
// //     borderColor: "#d0d7de",
// //     borderColorDark: "#333942",
// //     placeholder: "#a1a1a1",
// //     danger: "rgb(208, 2, 27)",
// //     title: "rgb(102, 102, 102)",
// //     separator: "rgb(194, 194, 195)",
// //     highlight: "rgb(199, 198, 203)",
// //     blackOverlay: "rgba(0,0,0,0.6)",
// //     iconWhite: "#fff",
// //     iconBlack: "#101214",
// //     dynamicWhite: "#fff",
// //     dynamicBlack: "#1c1e21",
// //     dynamicBackground: "#fff",
// //     transparent: "transparent",
// //     calpyse: "#2b7488",
// //   };


//   export const LightTheme: ExtendedTheme = {
//     dark: false,
//     myOwnProperty: true,
//     colors: {
//       ...DefaultTheme.colors,
//         background: colors.white,
//         foreground: colors.black,
//         ...colors,
//     //   background: palette.white,
//     //   foreground: palette.black,
//     //   text: palette.black,
//     //   tabBar: palette.white,
//     //   iconWhite: palette.white,
//     //   iconBlack: palette.black,
//     //   dynamicBackground: palette.dynamicWhite,
//     //   shadow: palette.transparent,
//     //   borderColor: palette.borderColor,
//     //   ...palette,
//     },
//   };

//   export const DarkTheme: ExtendedTheme = {
//     ...MD3DarkTheme,
//     myOwnProperty: true,
//     colors: {
//       ...LightTheme.colors,
//     //   background: palette.black,
//     //   foreground: palette.white,
//     //   text: palette.white,
//     //   tabBar: palette.black,
//     //   iconWhite: palette.black,
//     //   iconBlack: palette.white,
//     //   dynamicBackground: palette.dynamicBlack,
//     //   shadow: palette.transparent,
//     //   borderColor: palette.borderColorDark,
//     },
//   };


// export default theme = {
//   ...DefaultTheme,
//   // Specify custom property
//   myOwnProperty: true,
//   // Specify custom property in nested object
//   colors: {
//     myOwnColor: '#BADA55',
//     ...colors,
//   }
// };


export const LightTheme: ExtendedTheme = {
  ...DefaultTheme,
  dark: false,
  myOwnProperty: true,
  roundness: 4,
  colors: {
    // primary: '#6200ee',
    // accent: '#343434',
    // background: '#f6f6f6',
    // surface: '#ffffff',
    // error: '#B00020',
    // // text: '#000000',
    // onSurface: '#000000',
    // disabled: 'rgba(0, 0, 0, 0.26)',
    // placeholder: 'rgba(0, 0, 0, 0.54)' ,
    // backdrop: 'rgba(0, 0, 0, 0.5)',
    // notification: '#f50057',
    // // primaryColor: '#E8F7FE',
    // primaryColor: '#4f6d7a',
    // // primaryColor: 'red',
    // textTitle: '#37474F',
    // gray: '#D1D1D1',
    // red: 'red',
    // darkBlue: '#4f6d7a',
    // white: "#fff",
    // border: "#E2E2E2",
    // text: "#343434",
    // blue: "#4F6D7A",
    // textLight: "#797979",
    // offWhite: "#f0f0f0",
    // black: "#000000",
    // loadingBackground: "#60E2E2E2",
    green: "#76d275",
  },
  // fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
};

// export const DarkTheme: ExtendedTheme = {
//   ...MD3DarkTheme,
//   dark: true,
//   myOwnProperty: true,
//   mode: 'adaptive',
//   colors: {
//     // ...DefaultTheme.colors,
//     // primary: '#BB86FC',
//     // accent: '#03dac6',
//     // background: '#121212',
//     // surface: '#121212',
//     // error: '#CF6679',
//     // onSurface: '#FFFFFF',
//     // text: '#ffffff',
//     // disabled: 'rgba(255, 255, 255, 0.38)',
//     // placeholder: 'rgba(255, 255, 255, 0.54)',
//     // backdrop: 'rgba(0, 0, 0, 0.38)',
//     // notification: '#ff80ab',
//     primaryColor: '#E8F7FE',
//     // primaryColor: 'red',
//     textTitle: '#37474F',
//     gray: '#D1D1D1',
//     red: 'red',
//     darkBlue: '#4f6d7a',
//     white: "#fff",
//     border: "#E2E2E2",
//     text: "#343434",
//     blue: "#4F6D7A",
//     textLight: "#797979",
//     offWhite: "#f0f0f0",
//     black: "#000000",
//     loadingBackground: "#60E2E2E2",
//     green: "#76d275",
//   },
//   // fonts: configureFonts(),
// };

export type AppTheme = typeof LightTheme;

export const useAppTheme = () => useTheme<AppTheme>();
