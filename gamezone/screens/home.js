import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
                                               // Only components that are configured in the stack navigator get access to the 'navigation' props.
export default function Home({ navigation }) { // Destructuring the navigation object from props; props.navigation.
    // const pressHandler = () => {
    //     // navigation.navigate('ReviewDetails');
    //     navigation.push('ReviewDetails');
    // }

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={ globalStyles.container }>
            <FlatList 
                data = { reviews }
                renderItem = { ({ item }) => ( // send data to the specified component using the second argument.
                    <TouchableOpacity onPress={ () => navigation.navigate('ReviewDetails', item)}>
                        <Text style={ globalStyles.titleText }>{ item.title }</Text>
                    </TouchableOpacity>
                ) }
            />
            {/* <Text style={ globalStyles.titleText }>Home Screen</Text> */}
            {/* <Button title='go to review dets' onPress={ () => pressHandler() }/> */}
        </View>

    );
}
