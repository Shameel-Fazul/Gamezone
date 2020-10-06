import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about';

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = () => (

  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: { backgroundColor: '#eee', height: 60},
      headerTintColor: '#444',
      headerTitleAlign: 'center'
    }}
  >
    <Screen
      name='About'
      component={About}
      options={{ title: 'About GameZone' }}
    />
  </Navigator>
);

export default AboutStack;


