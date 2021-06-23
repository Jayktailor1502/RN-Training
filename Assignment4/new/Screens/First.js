import React from 'react'
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native'
import { FAB } from 'react-native-paper';

const First = ({ navigation }) => {

    const onPress = () => {
        navigation.navigate('Doctor-Consultation')
        // navigation.pop()
    }

    return (
        <>
            <View style={styles.container}>

                <ImageBackground
                    source={require('../assets/mycareDoc.png')}
                    style={styles.imgBackground}
                    resizeMode='center'
                />

                <FAB
                    style={styles.fab}
                    small
                    icon="minus"
                    onPress={onPress}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: 'skyblue'
    },
    btn: {
        marginTop: 200,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'thistle'
      },
})

export default First
