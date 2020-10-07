import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about';
import Header from '../shared/header';
import { ImageBackground, StyleSheet } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({ navigation }) => (

  <Navigator
    headerMode='screen'
    screenOptions={{
      //headerStyle: { backgroundColor: '#eee', height: 60},
      headerTintColor: '#444',
      headerTitleAlign: 'center'
    }}
  >
    <Screen
      name='About'
      component={About}
      options={{
        headerTitle: () => <Header navigation={ navigation } title='About Gamezone'/>,
        headerBackground: () => <ImageBackground source={ require('../assets/game_bg.png') } style={ styles.bgImage } />
        }}
    />
  </Navigator>
);

const styles = StyleSheet.create({
  bgImage: {
    height:80,
  },
})

export default AboutStack;


