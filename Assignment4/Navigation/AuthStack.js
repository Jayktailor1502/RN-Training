import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
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
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#234',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}