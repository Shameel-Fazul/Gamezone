import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

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
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <View style={ styles.rating }>
                   <Text>GameZone Rating: </Text>
                    <Image source={ images.ratings[rating]}/>
                </View>
            </Card>
            {/* <Button title='back to home screen' onPress={ () => pressHandler() }/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
});