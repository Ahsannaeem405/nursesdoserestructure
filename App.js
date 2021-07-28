import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Dashboard from './src/AdminScreens/Dashboard';
import AdminDashboard from './src/AdminScreens/AdminDashboard';
import ShowHospital from './src/AdminScreens/ShowHospital';
import ShowMember from './src/AdminScreens/ShowMember';
import AddAdmin from './src/AdminScreens/AddAdmin';
import Contract from './src/AdminScreens/Contract';
import AddHospital from './src/AdminScreens/AddHospital';
import Compansation from './src/AdminScreens/Compansation';


// import FriendsScreen from './src/screens/FriendsScreen';
// import HomeScreen from "./src/screens/HomeScreen";
const Drawer = createDrawerNavigator();

const navigator = createStackNavigator({
  Login: LoginScreen,
  Dashboard: DashboardScreen,
  ForgetPassword: ForgetPasswordScreen,
  Register: RegisterScreen,
  AdminMainDashboard: AdminDashboard,
  AdminDashboard: Dashboard,
  ShowHospital: ShowHospital,
  ShowMember: ShowMember,
  AddAdmin: AddAdmin,
  Contract: Contract,
  AddHospital: AddHospital,
  Compansation: Compansation,
  // FriendsScreen: FriendsScreen,
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {

    headerShown: false
  }
});


export default createAppContainer(navigator);