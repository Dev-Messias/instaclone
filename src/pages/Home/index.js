import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {
  function navigationToStartRoutes(){
    navigation.navigate('StartRoutes', {
      screen: 'Feed'
    });
  }

  return(
    <View>
        <Text>Home</Text>
        <Button title="Navigation to Users"  onPress={navigationToStartRoutes}/>
      </View>
  );
}
