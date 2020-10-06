import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home'
import { AppLoading } from 'expo' // A component that waits for an Async to complete and then invokes a function.
import { AppNavigator } from './routes/drawer';

const getFonts = () => { // Defining a Font
  return (
    Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
    })
  );
}


export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);
  
  if (fontsLoaded) {
    return (
      <AppNavigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync = { getFonts } // Triggers an Asynchronous task, in this case to check if getFonts() function is loaded.
        onFinish = { () => setFontsLoaded(true) }
      />
    );
  } 
}
