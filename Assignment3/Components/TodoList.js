

import React from 'react';
import { StyleSheet, Text, TouchableOpacity ,
        TextInput, Button, View} from 'react-native';

const TodoList = ({ item,  delItem, pressHandler }) => {

    return (
        <View style={styles.view1}>
        <TouchableOpacity onPress={() => pressHandler({item})}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
        <Button onPress={() => delItem(item.key)} title='Delete' color='coral' />
       </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexWrap: 'wrap',
    },
    view1: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap'
    }
});

export default TodoList



