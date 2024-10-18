import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

const SettingScreen = () => {

const navigator = useNavigation();

  return (
    <View style={globalStyles.constainer}>
        <Text>SettingScreen</Text>

        <PrimaryButton
        label={'Regresar'}
        onPress={()=> navigator.goBack()}
        />

        <PrimaryButton
        label={'Regresar al home'}
        onPress={()=> navigator.dispatch(StackActions.popToTop)}
        />

    </View>
  )
}

export default SettingScreen