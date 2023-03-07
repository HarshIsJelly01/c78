import *as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import MeteorScreen from './screens/meteorsScreen';
import IssScreen from './screens/issScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator()

export default class App extends React.Component{
  render(){
    return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="IssScreeen" component={IssScreen}/>
        <Stack.Screen name="MeteorScreen" component={MeteorScreen}/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
  }
}

