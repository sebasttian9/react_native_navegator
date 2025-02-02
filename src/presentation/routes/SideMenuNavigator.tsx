import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import Ionicon from '../components/shared/Ionicon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {


  const dimensions = useWindowDimensions();


  return (
    <Drawer.Navigator 

      drawerContent={ (props) => <CustomDrawerContent {...props} />}

      screenOptions={{

        headerShown: false,
        drawerType: (dimensions.width >= 730) ? 'permanent': 'slide',

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}>
      <Drawer.Screen options={{ drawerIcon: ({color}) => (<Ionicon name='bonfire' color={ color } />) }} name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen options={{ drawerIcon: ({color}) => (<Ionicon name='person-circle' color={color} />) }} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent = (props: DrawerContentComponentProps) => {

  return (

      <DrawerContentScrollView>
        <View

          style={{ 
            height: 200,
            backgroundColor: globalColors.primary,
            margin: 30,
            borderRadius: 50
           }}
        >

        </View>

        <DrawerItemList {...props} />
        <DrawerItem 
          label={"Hola Mundo"}
          style={{borderRadius: 100, paddingHorizontal:20 }}
        ></DrawerItem>
      </DrawerContentScrollView>

  )
}