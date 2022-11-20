import { theme } from "./App/theme/theme";

declare module "react-native-paper" {
  export type ExtendedTheme = typeof theme;
  export function useTheme(): ExtendedTheme;
}
