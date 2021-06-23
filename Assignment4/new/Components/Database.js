import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import database from '@react-native-firebase/database'
// import ConsultView from './ConsultView';
const Database = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        console.log('in db')
        database().ref('Doctor/DoctorConsult/').once('value', function (snapshot) {
            setData(Object.values(snapshot.val()));
        });
    }, []);

    return (
        console.log({ data }),
        <View>
            <Text>List Of Available Appointments</Text>
            <FlatList
                data={data}
                renderItem={({ item, key }) =>
                    // <ConsultView 
                    //     Name={item.Name}
                    //     Date={item.Date}
                    //     Time={item.Time}
                    //     key={key}
                    //     />
                    <View>
                        <Text>{key}</Text>
                        <Text>{item.Name}</Text>
                        <Text>{item.Date}</Text>
                        <Text>{item.Time}</Text>
                    </View>
                }
                keyExtractor={(item) => item.id}
            />

            <Button
                // onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default Database

//    <View>
//                     <Text>{key}</Text>
//                      <Text>{item.Name}</Text>
//                      <Text>{item.Date}</Text>
//                      <Text>{item.Time}</Text>
//                 </View>