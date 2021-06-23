import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/AntDesign';

const Consultation = ({ route, navigation }) => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [clear, setClear] = useState(true);
    const { date, filter } = route.params;
    const { currentUser } = auth();

    const headerRight = () => {
        navigation.setOptions({
            headerRight: () => (
                // <Button
                //     onPress={() => setClear(true)}
                //     title="Clear"
                //     color="#2e64e5"
                // />
                <TouchableOpacity onPress={() => {
                    setClear(false)
                    console.log('filter clear = ' + clear)
                    console.log('filter filter = ' + filter)
                    navigation.navigate('Filter', {
                        data: { data },
                        otherParam: 'anything you want here',
                    });
                }}>
                    <Icon
                        name='filter'
                        size={27}
                        color="#111"
                    />
                </TouchableOpacity>
            ),
        });
    }

    const getAppointments = () => {
        if (filter == false || clear == true) {
            database().ref('Doctor/DoctorConsult/').once('value', function (snapshot) {
                setData(Object.values(snapshot.val()));
            });
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
            <>
                <View style={styles.item}>
                    <Text style={styles.list}>Doctor  : {item.Name}</Text>
                    <Text style={styles.list}>Date     : {item.Date}</Text>
                    <Text style={styles.list}>Time    : {item.Time}</Text>
                </View>
            </>
        )
    }

    const calData = (clear, filter) => {
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
            <View style={{ flex: 1 }}>
                <FlatList
                    data={calData(clear, filter)}
                    keyExtractor={(item, index) => 'item' + index}
                    renderItem={renderItem}
                />
            <View style={styles.button_view}>
                <Button style={styles.btn}
                    title="Book An Apointment"
                    onPress={() => { navigateBookingScreen() }}
                />
                <Button style={styles.btn}
                    title="Show my Bookings"
                    onPress={() => { navigation.navigate('Confirmed Appointments') }}
                />
            </View>
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
    item: {
        backgroundColor: '#4562',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    btn: {
        fontSize: 25,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    list: {
        fontSize: 18,
        fontWeight: '300',
        color: 'darkblue',
        fontFamily: 'Lato-Regular',
    },
    button_view: {
        width: '100%',
        fontSize: 20,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor: 'skyblue',
    }
})

export default Consultation
// #f9c2ff
{/* <View>
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
            </View> */}