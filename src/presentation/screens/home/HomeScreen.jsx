import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/shared/PrimaryButton'

const HomeScreen = () => {

  const navigation = useNavigation();


  return (
    <View style={ globalStyles.constainer }>
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