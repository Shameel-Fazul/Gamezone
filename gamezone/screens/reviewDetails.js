import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
    // const pressHandler = () => {
    //     navigation.goBack();
    // }
    const { title, body, rating } = route.params;
    
    return (
        <View style={ globalStyles.container }>
            {/* Get the second argument on the navigate() method using the 'route' property in props 
                 In this case, we're taking the item object, and using the title paramter.
                 THE PROPERTIES OF THE OBJECT ARE CALLED PARAMETERS */}
            <Text>{ title }</Text>
            <Text>{ body }</Text>
            <Text>{ rating }</Text>
            {/* <Button title='back to home screen' onPress={ () => pressHandler() }/> */}
        </View>
    );
}