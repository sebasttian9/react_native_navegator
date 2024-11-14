import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AboutScreen from '../screens/about/AboutScreen';
import HomeScreen from '../screens/home/HomeScreen';
import { globalColors } from '../theme/theme';
import HamburgerMenu from '../components/shared/HamburgerMenu';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
    <HamburgerMenu></HamburgerMenu>
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
    </>
  );
}