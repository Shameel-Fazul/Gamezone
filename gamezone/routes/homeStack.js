import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';
import { ImageBackground, StyleSheet } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => ( // Destructuring navigation from props; props.navigation
   // other options: "float", "screen"
   // screenOptions - default options for all configured components below.
  <Navigator 
    headerMode="screen" 
    screenOptions={{ 
      //headerStyle: { backgroundColor: '#cfcfcf', height: 80 },
      headerTitleAlign: 'center',
      headerTintColor: '#444'
      }}
  >  
    <Screen 
      name="Home" 
      component={Home} 
      options={{                    // Sending the navigation props object as props to the Header component.
        headerTitle: () => <Header navigation={ navigation } title='Gamezone'/>, // Using an anonymous function to return the Header component.
        headerBackground: () => <ImageBackground source={ require('../assets/game_bg.png') } style={ styles.bgImage } />
        //title: 'GameZone',  // 'title' property expects a string, so we headerTitle to define a function. 
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

const styles = StyleSheet.create({
  bgImage: {
    height:80,
  },
})

export default HomeStack;

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );