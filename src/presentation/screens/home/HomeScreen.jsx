import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { useEffect } from 'react'
import HamburgerMenu from '../../components/shared/HamburgerMenu'

const HomeScreen = () => {

  const navigation = useNavigation();

  // useEffect(() => {
    
  //   navigation.setOptions({
  //     headerLeft : () => (
  //         <Pressable onPress={() => navigation.dispatch( DrawerActions.toggleDrawer )}>
  //           <Text>Menu</Text>
  //         </Pressable>
  //     )
  //   })

  // }, []);


  return (
    <View style={ globalStyles.constainer }>
      <HamburgerMenu/>
      <PrimaryButton 
        label={'Productos'}
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton 
        label={'Settings'}
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

export default HomeScreen