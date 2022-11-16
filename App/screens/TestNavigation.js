import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from '../screens/ScreenHome';
import ScreenDetail from '../screens/ScreenDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={ScreenHome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Details"
          component={ScreenDetail}
          options={
            ({route}) => ({
              title: route.params.name
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;