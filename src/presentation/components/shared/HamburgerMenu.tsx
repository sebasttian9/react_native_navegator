import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';

const HamburgerMenu = () => {

    const navegation = useNavigation();

    useEffect(() => {
      
      navegation.setOptions({
        headerLeft: () => (
          <Pressable onPress={() => navegation.dispatch(DrawerActions.toggleDrawer)}>
            <Text>Menu</Text>
          </Pressable>
        )
      })
    
    }, [])



  return (<></>)
}

export default HamburgerMenu