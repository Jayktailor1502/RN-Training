import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import SignUp from '../Screens/SignUp';
import First from '../Screens/First';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="First"
        component={First}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Doctor-Consultation"
        component={LoginScreen}
        options={{
          // headerTitleAlign: 'center',
          // headerTitleStyle: {
          //   color: '#123',
          //   fontFamily: 'Kufam-SemiBoldItalic',
          //   fontSize: 20,
          //   fontStyle: 'italic',
          // },
          // headerStyle: {
          //   shadowColor: '#123',
          //   elevation: 0,
          // },
          // headerLeft: null,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}