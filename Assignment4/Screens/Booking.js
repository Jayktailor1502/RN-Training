import React, { useState } from 'react'
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';

const Booking = ({ navigation, route }) => {

    const { res } = route.params;
    const [isActive, setisActive] = useState(false);
    const [booked, setBooked] = useState(null);
    let res1 = null;

    const onPress = (index, item) => {
        console.log("-------------12")
        console.log(index);
        setisActive(true);
        setBooked(item);
        res1 = booked;
        console.log("res1 = " + res1);
        console.log("booked = " + booked);
        console.log({booked})
        console.log(booked)
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => onPress(index, item)}>
                <View style={styles.list}>
                    <Text>{item.Title}</Text>
                    <Text>{index}</Text>
                    <Text style={styles.btn}>Doctor Name : {item.Name}</Text>
                    <Text>{item.Date}</Text>
                    <Text>{item.Time}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const confirm = () => {
        const { currentUser } = auth();
        console.log(currentUser.uid)
        console.log("in confirm booking btn")
        console.log(booked)
        database().ref(`users/uid/${currentUser.uid}/`)
            .push({booked});
        navigation.navigate('Confirmed Appointments', { data:res1 })
    }

    return (
        <>
        <View style={{ flex: 1 }} >
            <FlatList
                data={res}
                keyExtractor={(item, index) => 'item' + index}
                renderItem={renderItem}
            />
        </View>
        <View>
            {isActive ? <Button title="Confirm Booking" onPress={(index) => confirm(index)} /> : <Text style={styles.btn}>Please select one appointment</Text>}
            {/* <Button title="Confirm Booking" onPress={() => navigation.navigate('Booking Confirmed')} /> */}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    btn: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    list: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 15,
    },
    button: {
        fontSize: 25,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
        width: 200,
    },
    button_view: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    }
})

export default Booking
