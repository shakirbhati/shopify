import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import Favourite from '../Screen/Favourite';
import Demo from '../Screen/Demo';
import Demo2 from '../Screen/Demo2';
import Demo3 from '../Screen/Demo3';
import Demo4 from '../Screen/Demo4';

const Stack = createNativeStackNavigator();
console.disableYellowBox
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Demo4'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Favourite" component={Favourite} options={{ headerShown: false }} />
        <Stack.Screen name="Demo" component={Demo} options={{ headerShown: false }} />
        <Stack.Screen name="Demo2" component={Demo2} options={{ headerShown: false }} />
        <Stack.Screen name="Demo3" component={Demo3} options={{ headerShown: false }} />
        <Stack.Screen name="Demo4" component={Demo4} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;