import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';

const Consultation = ({ route, navigation }) => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [clear, setClear] = useState(true);
    const { date, filter } = route.params;
    const { currentUser } = auth();

    const headerRight = () => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => setClear(true)}
                    title="Clear"
                    color="#2e64e5"
                />
            ),
        });
    }

    const getAppointments = () => {
        // console.log("in appointments-out clear = " + clear + '  Filter = ' + filter)
        if (filter == false || clear == true) {
            console.log("in appointments-inn clear = " + clear + '  Filter = ' + filter)
            database().ref('Doctor/DoctorConsult/').once('value', function (snapshot) {
                setData(Object.values(snapshot.val()));
            });
            // database().ref('users/uid/').once('value', function (snapshot) {
            //     setData(Object.values(snapshot.val()));
            // });

        } else return;
    };

    const filterStuff = () => {
        const newData = data.filter((item) => {
            console.log(item)
            return item.Title == date.toDateString();
        });
        setFilterData(newData);
    };

    useEffect(() => {
        headerRight();
        // console.log("in useEffect")
        // console.log('clear = ' + clear)
        console.log(' /in db b4 setting data/ - userID = ' + currentUser.uid)
        getAppointments();
        if (filter && date) {
            //  console.log('if true')
            filterStuff()
        }
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.list}>
                <Text>{item.Title}</Text>
                <Text>{index}</Text>
                <Text style={styles.btn}>Doctor Name : {item.Name}</Text>
                <Text>{item.Date}</Text>
                <Text>{item.Time}</Text>
            </View>
        )
    }

    const calData = (clear, filter) => {
        // console.log('in calDATA , clear = ' + clear + "  filter = " + filter)
        // console.log(filterData)
        // console.log(data)
        let res = null;
        if (filter) res = filterData;
        if (clear) res = data;
        return res;
    }

    const navigateBookingScreen = () => {
        console.log(filter)
        let res = null;
        if (filter) res = filterData;
        else res = data;
        navigation.navigate("Booking Screen", { res })
    }

    return (
        <>
            <View>
                <Button style={styles.button}
                    title="Filter"
                    onPress={() => {
                        setClear(false)
                        console.log('filter clear = ' + clear)
                        console.log('filter filter = ' + filter)
                        navigation.navigate('Filter', {
                            data: { data },
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={calData(clear, filter)}
                    keyExtractor={(item, index) => 'item' + index}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.button_view}>
                <Button style={styles.btn}
                    title="Book An Apointment"
                    onPress={() => { navigateBookingScreen() }}
                />
                <Button style={styles.btn}
                    title="Show my Bookings"
                    onPress={() => {navigation.navigate('Confirmed Appointments')}}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'skyblue'
      },
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

export default Consultation
