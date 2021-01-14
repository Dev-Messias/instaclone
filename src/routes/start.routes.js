import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Users from '../pages/Users/index';
import Feed from '../pages/Feed/index';

export default function StartRoutes() {
  return(
    <Tab.Navigator >
      <Tab.Screen name="Users" component={Users} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}