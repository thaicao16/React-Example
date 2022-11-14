import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import Home from '../screens/Home';
// import Option from '../screens/Options';
import ScreenHome from '../screens/ScreenHome';
import ScreenDetail from '../screens/ScreenDetail';

const MainStack = createNativeStackNavigator()

function App () {
    return(
        <NavigationContainer>
        <MainStack.Navigator initialRouteName="Home">
          <MainStack.Screen name="Home" component={ScreenHome} />
          <MainStack.Screen name="Details" component={ScreenDetail} />
        </MainStack.Navigator>
      </NavigationContainer>
    )
}

export default App;

// const MainStackScreen  = () => {
//     <MainStack.Navigator
//         initialRouteName='ScreenHome'>
//         {/* <MainStack.Screen name='Home' component={Home} />
//         <MainStack.Screen name='Option' component={Option} /> */}
//         <MainStack.Screen name='ScreenHome' component={ScreenHome} />
//         <MainStack.Screen name='ScreenDetail' component={ScreenDetail} />
//     </MainStack.Navigator>
// };

// export default () => (
//     <NavigationContainer>
//         <MainStackScreen/>
//     </NavigationContainer>
// )

// import React from "react"
// import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"

// import ScreenHome from '../screens/ScreenHome';
// import ScreenDetail from '../screens/ScreenDetail';

// const MainStack = createNativeStackNavigator()
// const MainStackScreen = () => (
//   <MainStack.Navigator
//   // headerMode="none"
//   // initialRouteName="Options"
//   >
//     <MainStack.Screen
//       name="ScreenHome"
//       component={ScreenHome}
//       options={{ headerShown: false }}
//     />
//     <MainStack.Screen name="ScreenDetail" component={ScreenDetail} />
//   </MainStack.Navigator>
// )
// 
// export default () => (
//   <NavigationContainer>
//     <MainStackScreen />
//   </NavigationContainer>
// )