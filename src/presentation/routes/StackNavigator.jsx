import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import ProductScreen from '../screens/products/ProductScreen';


export type RootStackParamList = {
    Home: undefined,
    Product: { id: number, name: string },
    Products: undefined,
    Settings: undefined,
}

const Stack = createStackNavigator();


export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: true,
        headerStyle: {
            elevation:0,
            shadowColor: 'transparent'
        }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}