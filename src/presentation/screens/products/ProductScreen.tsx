import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/StackNavigator'

const ProductScreen = () => {

const params = useRoute<RouteProp<RootStackParamList, 'Product'>>().params;
const navigation = useNavigation();


useEffect(() => {

  navigation.setOptions({
    title: params.item.name
  })

}, []);


  return (
    <View style={globalStyles.constainer}>
        <Text>{params.item.id}-{params.item.name}</Text>
    </View>
  )
}

export default ProductScreen