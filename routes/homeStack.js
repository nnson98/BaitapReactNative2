import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default  Navigator =() =>{
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name='Home' component={Home} options={({navigation})=>{return {headerTitle: () =><Header navigation={navigation} title='GameZone'/>}} }/>
        <Stack.Screen
 name='ReviewDetails' component={ReviewDetails} options={{ title: 'ReviewDetails'}} />

      </Stack.Navigator>
  )
}