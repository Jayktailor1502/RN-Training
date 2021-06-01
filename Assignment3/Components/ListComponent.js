import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ListComponent = ({title}) => {

    return (    
        <TouchableOpacity>
            <Text style={styles.list}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    list: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
})

export default ListComponent
