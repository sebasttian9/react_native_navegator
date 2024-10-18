import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/routes/StackNavigator';
import React from 'react'
import { Text, View } from 'react-native'

export const App = () => {
  return (
    <NavigationContainer>
      {/* <Text>App.tsx</Text> */}
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  )
}
