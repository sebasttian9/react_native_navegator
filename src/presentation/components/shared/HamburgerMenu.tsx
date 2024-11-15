import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import Ionicon from './Ionicon';

const HamburgerMenu = () => {

    const navegation = useNavigation();

    useEffect(() => {
      
      navegation.setOptions({
        headerLeft: () => (
          <Pressable style={{ marginLeft: 10 }} onPress={() => navegation.dispatch(DrawerActions.toggleDrawer)}>
            <Ionicon name='menu-outline' size={30} />
          </Pressable>
        )
      })
    
    }, [])



  return (<></>)
}

export default HamburgerMenu