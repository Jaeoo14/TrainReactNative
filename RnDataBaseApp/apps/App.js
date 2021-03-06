/* eslint-disable prettier/prettier */
import * as React from 'react';
//import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'HOME',
            headerStyle: {
              backgroundColor: '#1877f5',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
          }}
        />
        {/* <Stack.Screen />
        <Stack.Screen /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
