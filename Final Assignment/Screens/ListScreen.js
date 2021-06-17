import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { AuthContext } from '../Navigation/AuthProvider'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';

const ListScreen = () => {

    const [data, setData] = useState([]);
    const { currentUser } = auth();
    const { logout } = useContext(AuthContext);

    const getFundList = () => {
        // console.log("in appointments-out clear = " + clear + '  Filter = ' + filter)
        database().ref('Employees/Details').once('value', function (snapshot) {
            setData(Object.values(snapshot.val()));
        });
        console.log(data)
    };

    useEffect(() => {
        // console.log("in useEffect")
        // console.log('clear = ' + clear)
        console.log(' /in db b4 setting data/ - userID = ' + currentUser.uid)
        getFundList();
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.list}>
                <Text>{index}</Text>
                <Text>Employee Name : {item.Name}</Text>
                <Text>Contribution  : {item.Fund}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                data={data}
                keyExtractor={(item, index) => 'item' + index}
                renderItem={renderItem}
            />

            <Button
                title="Sign Out"
                onPress={() => logout()}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 15,
    },
})

export default ListScreen
