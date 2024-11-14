import React from 'react'
import { Text, View } from 'react-native'
import HamburgerMenu from '../../components/shared/HamburgerMenu'
import Icon from 'react-native-vector-icons/Ionicons';


const Tab1Screen = () => {


  return (
    <View>
      <HamburgerMenu/>
        <Text>Tab1 Screen</Text>
        <Icon name="rocket-outline" size={100} />
    </View>
  )
}

export default Tab1Screen