import React, {useMemo} from 'react';
import {Appearance} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import LoginScreen from '../screens/login/LoginScreen';

import defaultTheme from '../theme/config/default';
import CyanTheme from '../theme/config/cyan';

const Stack = createNativeStackNavigator();


export default function App() {
  const colorScheme = Appearance.getColorScheme();

  const systemTheme = useMemo(() => {
    // const isDark = colorScheme === 'dark';
    // return isDark ? CyanTheme : defaultTheme;
    return CyanTheme;
  }, [colorScheme]);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={systemTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={LoginScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </SafeAreaProvider>
  );
}
