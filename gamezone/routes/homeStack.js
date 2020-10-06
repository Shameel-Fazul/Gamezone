import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
   // other options: "float", "screen"
   // screenOptions - default options for all configured components below.
  <Navigator 
    headerMode="float" 
    screenOptions={{ 
      headerStyle: { backgroundColor: '#cfcfcf', height: 60 },
      headerTitleAlign: 'center',
      headerTintColor: '#444'
      }}
  >  
    <Screen 
      name="Home" 
      component={Home} 
      options={{ 
        title: 'GameZone',
        //headerStyle: { backgroundColor: '#cfcfcf' } 
        }}
    />
    <Screen name="ReviewDetails"
      component={ReviewDetails} 
      options={{ 
        title: 'Review Details',
        //headerStyle: { backgroundColor: '#cfcfcf' }
        }}
    />
  </Navigator>
);

export default HomeStack;

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );