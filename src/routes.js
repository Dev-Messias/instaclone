import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Home/index';
import logo from './assets/instagram.png';

const Stack = createStackNavigator();

import StartRoutes from './routes/start.routes';

export default function Routes() {
  return(
    <Stack.Navigator initialRouteName="Home" screenOptions={ { headerStyle: '#f5f5f5' },{ headerTitleAlign: 'center', title: <Image source={logo}/>}}>
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="StartRoutes" component={StartRoutes} />
    </Stack.Navigator>
  );
}