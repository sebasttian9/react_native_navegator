import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PrimaryButton from '../../components/shared/PrimaryButton';

const ProfileScreen = () => {

const { top } = useSafeAreaInsets();

console.log(top)

  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top
    }}>
        <Text>ProfileScreen</Text>

        <PrimaryButton
          onPress={()=>{}}
          label='Abrir Menu'
        />
    </View>
  )
}

export default ProfileScreen