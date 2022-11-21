import React, { useMemo } from 'react';
import { Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import LoginScreen from '../screens/login/LoginScreen';
import LoginOtpScreen from '../screens/loginOtp/LoginOtpScreen';
// import OtpInputs from '../components/OtpInput';

import defaultTheme from '../theme/config/default';
import CyanTheme from '../theme/config/cyan';
import { SCREENS } from '../navigation/screen';

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
          <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
            <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
            {/* <Stack.Screen
              name= {SCREENS.LOGIN_OTP}
              options={
                ({route}) => ({
                  title: route.params.name
                })
              }>
              {(props) => <LoginOtpScreen uuid={props.route.params.uuid} {...props}/>}
              </Stack.Screen> */}
            <Stack.Screen
              name={SCREENS.LOGIN_OTP}
              component={LoginOtpScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
