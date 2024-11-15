import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import Ionicon from '../components/shared/Ionicon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{ 
            backgroundColor: globalColors.background
         }}
         screenOptions={{ 
            // headerShown:
            tabBarLabelStyle : {
                marginBottom: 5,
            },
            headerStyle: {
                elevation: 0
            },
            tabBarStyle: {
                // borderTopWidth: 0,
                // elevation: 0
            }

          }}
          
    >
      <Tab.Screen name="Inicio" options={{ title:'Inicio', tabBarIcon: ({color}) =>  (<Ionicon name='home' size={25} color={color}/>) }} component={Tab1Screen} />
      <Tab.Screen name="Buscar" options={{ title:'Buscar', tabBarIcon: ({color}) =>  (<Ionicon name='search' size={25} color={color}/>) }} component={TopTabsNavigator} />
      <Tab.Screen name="Carro" options={{ title:'Carro', tabBarIcon: ({color}) =>  (<Ionicon name='cart' size={25} color={color}/>) }} component={StackNavigator} />
    </Tab.Navigator>
  );
}