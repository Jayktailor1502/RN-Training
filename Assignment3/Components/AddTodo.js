import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const AddTodo = ({additem}) => {

    const [text, setText] = useState('');
    
    const changeHandler = (value = undefined) => {
        setText(value);
        console.log(text);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add Todo ...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => additem(text)} title='Add Todo' color='coral' />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        marginTop: 40,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});

export default AddTodo;
