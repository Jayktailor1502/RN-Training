import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import DatePicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker';

const Filter = ({ route, navigation }) => {

    const { data, otherParam } = route.params;
    const [date, setDate] = useState(new Date(Date.now()));
    const [time, setTime] = useState(date.toLocaleTimeString());
    const [filter, setFilter] = useState(false);
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    // const _clear = () => {
    //     setDate(new Date(Date.now()));
    //     setFilter(false);
    // }

    const onDateChange = (event, selectedDate) => {
        console.log(date)
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setFilter(true)
        setShow(false);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    useEffect(() => {
        navigation.setParams({ date: date, filter: filter });
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.txt}>Filter By</Text>
                <Button type='clear' onPress={() => showMode('date')} title={date.toDateString()} />
                {show && <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    style={styles.picker}
                    onChange={onDateChange}
                />
                }
                <Button
                    title="Submit"
                    onPress={() => navigation.navigate('Available Consultations', { date, filter })}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    txt: {
        fontSize: 25,
        fontWeight: '100',
        color: '#234',
        fontFamily: 'Lato-Regular',
        alignSelf: 'center',

    },
    picker: {
        marginHorizontal: 10,
        borderWidth: 5,
        padding:10,
        borderRadius: 10,
    }
})
export default Filter


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Button, SafeAreaView, Platform } from 'react-native';
// // import { Text,Button } from 'react-native-elements';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const Filter = ({ navigation }) => {

//     const [date, setDate] = useState(new Date(Date.now()));
//     const [time, setTime] = useState(date.toLocaleTimeString());
//     const [show, setShow] = useState(false);
//     const [filter, setFilter] = useState(false);
//     const [mode, setMode] = useState('date');

//     useEffect(() => {
//         navigation.setParams({ date: date, filter: filter, clear: _clear });
//     }, [])

//     const onDateChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setDate(currentDate);
//         setFilter(true)
//         setShow(false);
//     };

//     const showMode = (currentMode) => {
//         setShow(true);
//         setMode(currentMode);
//     };

//     const _clear = () => {
//         setDate(new Date(Date.now()));
//         setFilter(false);
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.text} h3>Filter By</Text>
//             <View style={{ flex: 1, justifyContent: 'center' }}>
//                 <Button type='clear' onPress={() => showMode('date')} title={date.toDateString()} />
//                 <Button type='clear' onPress={() => showMode('time')} title={time} />
//                 {show && (
//                     <DateTimePicker
//                         testID="dateTimePicker"
//                         value={date}
//                         mode={mode}
//                         style={styles.picker}
//                         display={Platform.OS === 'ios' ? (mode === 'date' ? 'inline' : 'spinner') : 'default'}
//                         onChange={onDateChange}
//                     />)}
//             </View>
//             <View style={{ margin: 5 }}>
//                 <Button title='Submit' onPress={() => navigation.navigate('My Consultations', { date, filter })} />
//             </View>
//         </SafeAreaView>
//     );
// }

// Filter.navigationOptions = ({ navigation }) => {

//     const params = navigation.state.params || {};

//     return {
//         headerRight: () => {
//             return <Button type='clear' title='Clear' onPress={() => {
//                 params.clear()
//                 navigation.navigate('My Consultations', { date: params.date, filter: params.filter })
//             }} />
//         }
//     };
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     text: {
//         alignSelf: 'center',
//     },
//     picker: {
//         marginHorizontal: 10,
//         borderWidth: 2,
//         borderRadius: 10,
//     }
// });

// export default Filter;