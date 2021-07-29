import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useState, useEffect } from 'react';
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

import auth from '@react-native-firebase/auth';
import Profile from './src/screens/Profile';
import HomeScreen from './src/screens/HomeScreen';
const navigator = createStackNavigator({
  Login: LoginScreen,
  Dashboard: DashboardScreen,
  HomeScreen: HomeScreen,
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
  Profile: Profile
  // FriendsScreen: FriendsScreen,
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {

    headerShown: false
  }
})
// const [user, setUser] = useState();
// {


//   useEffect(() => {
//     auth().onAuthStateChanged((userExist) => {
//       if (userExist) {
//         setUser(userExist)
//       } else {
//         setUser('')
//       }

//     })


//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);
// };


export default createAppContainer(navigator);