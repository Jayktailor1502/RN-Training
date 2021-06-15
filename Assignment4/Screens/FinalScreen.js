import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, FlatList, Button, SectionList } from 'react-native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'
import { AuthContext } from '../Navigation/AuthProvider';

const FinalScreen = ({ navigation }) => {

    const [data, setData] = useState()
    const { currentUser } = auth();
    const { logout } = useContext(AuthContext);

    const getAppointments = () => {
        // console.log("in appointments-out clear = " + clear + '  Filter = ' + filter)
        // console.log("in appointments-inn clear = " + clear + '  Filter = ' + filter)
        database().ref(`users/uid/${currentUser.uid}/`).once('value', function (snapshot) {
            setData(Object.values(snapshot.val()));
        });
        // database().ref('users/uid/').once('value', function (snapshot) {
        //     setData(Object.values(snapshot.val()));
        // });  
    };

    useEffect(() => {
        console.log(' /in db b4 setting data/ - userID = ' + currentUser.uid)
        getAppointments();
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => logout()}
                    title="Sign Out"
                    color="#2e64e5"
                />
            ),
        });
    }, []);

    const renderItem = ({ item, index }) => {
        item = item.booked
        return (
            console.log("item"),
            console.log(item),
            <View style={styles.list}>
                <Text>{item.Title}</Text>
                <Text style={styles.btn}>Doctor Name : {item.Name}</Text>
                <Text>{item.Date}</Text>
                <Text>{item.Time}</Text>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => 'item' + index}
                renderItem={renderItem}
            />
            <Button
                    onPress={() => navigation.navigate('Available Consultations')}
                    title="Book one more appointment"
                    color="#2e64e5"
                />
        </View>
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
})

export default FinalScreen
