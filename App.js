import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import RegisterScreen from './src/screens/RegisterScreen';
// import FriendsScreen from './src/screens/FriendsScreen';
// import HomeScreen from "./src/screens/HomeScreen";


const navigator = createStackNavigator({
  Login: LoginScreen,
  Dashboard: DashboardScreen,
  ForgetPassword: ForgetPasswordScreen,
  Register: RegisterScreen,
  // FriendsScreen: FriendsScreen,
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {

    headerShown: false
  }
});

export default createAppContainer(navigator);