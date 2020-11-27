import * as React from 'react';
//import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen';
import DetailScreen from './component/DetailScreen';
import SettingScreen from './component/SettingScreen';

const MyStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator initialRouteName="HOME">
        <MyStack.Screen name="HOME" component={HomeScreen} />
        <MyStack.Screen name="DETAIL" component={DetailScreen} />
        <MyStack.Screen name="SETTING" component={SettingScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
