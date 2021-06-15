import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Consultation from '../Screens/Consultation'
import Booking from '../Screens/Booking';
const Stack = createStackNavigator();
import Filter from '../Screens/Filter';
import FinalScreen from '../Screens/FinalScreen';

const AppStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Available Consultations"
                component={Consultation}
                initialParams={{ date: null, filter: false}}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'Kufam-SemiBoldItalic',
                        fontSize: 20,
                    },
                    headerStyle: {
                        shadowColor: '#fff',
                        elevation: 2,
                        backgroundColor: "skyblue",
                    },
                }}
            />
             <Stack.Screen
                name="Filter"
                component={Filter}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="Booking Screen"
                component={Booking}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="Confirmed Appointments"
                component={FinalScreen}
                options={{ headerShown: true }}
            />
           
        </Stack.Navigator>
    )
}

export default AppStack
