import React from 'react'
import { Text, View } from 'react-native'
import HamburgerMenu from '../../components/shared/HamburgerMenu'
import Ionicon from '../../components/shared/Ionicon'



const Tab1Screen = () => {


  return (
    <View>
      <HamburgerMenu/>
        <Text>Tab1 Screen</Text>
        {/* <Ionicon name='rocket-outline' size={100} color='blue'/> */}
    </View>
  )
}

export default Tab1Screen