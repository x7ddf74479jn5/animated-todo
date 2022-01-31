import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main-screen';
import AboutScreen from './screens/about-screen';
import Sidebar from './components/sidebar';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Main'
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#000000',
      }}
    >
      <Drawer.Screen name='Main' component={MainScreen}></Drawer.Screen>
      <Drawer.Screen name='About' component={AboutScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default App;