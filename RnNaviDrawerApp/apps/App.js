import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './component/HomeScreen';
import SettingScreen from './component/SettingScreen';
import DetailScreen from './component/DetailScreen';
import CustomDrawer from './CustomDrawer';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
    Setting: {screen: SettingScreen},
  },
  {
    contentComponent: CustomDrawer,
    drawerWidth: Dimensions.get('window').width - 150,
  },
);

export default createAppContainer(DrawerNavigator);
