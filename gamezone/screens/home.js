import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
                                               // Only components that are configured in the stack navigator get access to the 'navigation' props.
export default function Home({ navigation }) { // Destructuring the navigation object from props; props.navigation.
    // const pressHandler = () => {
    //     // navigation.navigate('ReviewDetails');
    //     navigation.push('ReviewDetails');
    // }
    const [modalOpen, setModalOpen ] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={ globalStyles.container }>

            <Modal visible={ modalOpen } animationType='slide'>
                <View style={ styles.modalContent }>
                    <MaterialIcons 
                        name='close'
                        size={24} // \/ Destructure all the properties in the style objects and apply to the parent object {}.
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={ () => setModalOpen(false) }
                    />
                </View>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                style= { styles.modalToggle }
                onPress={ () => setModalOpen(true) }
            />

            <FlatList 
                data = { reviews }
                renderItem = { ({ item }) => ( // send data to the specified component using the second argument.
                    <TouchableOpacity onPress={ () => navigation.navigate('ReviewDetails', item)}>
                    {/* Wrapping with the <Card> Component */}
                        <Card> 
                            <Text style={ globalStyles.titleText }>{ item.title }</Text>
                            {/* ^ This will be props.children in the <Card> Component ^ */}
                        </Card>
                    </TouchableOpacity>
                ) }
            />
            {/* <Text style={ globalStyles.titleText }>Home Screen</Text> */}
            {/* <Button title='go to review dets' onPress={ () => pressHandler() }/> */}
        </View>

    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})
