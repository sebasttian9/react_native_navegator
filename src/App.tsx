import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/routes/StackNavigator';
import React from 'react'
import { Text, View } from 'react-native'
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <Text>App.tsx</Text> */}
      {/* <StackNavigator></StackNavigator> */}
      <SideMenuNavigator/>
    </NavigationContainer>
  )
}
