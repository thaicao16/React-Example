import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './login/LoginScreen';
import { useTheme} from 'react-native-paper';

export default function Main() {
    const theme = useTheme();
  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
    </PaperProvider>
  );
}