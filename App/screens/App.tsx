import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, MD3LightTheme, adaptNavigationTheme} from 'react-native-paper';
import App from '../screens/login/LoginScreen';

import LoginScreen from '../screens/login/LoginScreen';
// import ScreenDetail from './screens/ScreenDetail';

const Stack = createNativeStackNavigator();

const { LightTheme } = adaptNavigationTheme({ light: DefaultTheme });


const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    myOwnColor: '#BADA55',
  },
};

export default function Main() {
  // return (
  //   <PaperProvider theme={theme}>
  //     <App />
  //   </PaperProvider>
  // );
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer theme={LightTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={LoginScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}