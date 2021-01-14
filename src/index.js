import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return(
      <NavigationContainer>
       <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <Routes />
      </NavigationContainer>
    
  );
}