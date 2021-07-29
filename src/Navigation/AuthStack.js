import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useState, useEffect } from 'react';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Dashboard from '../AdminScreens/Dashboard';
import AdminDashboard from '../AdminScreens/AdminDashboard';
import ShowHospital from '../AdminScreens/ShowHospital';
import ShowMember from '../AdminScreens/ShowMember';
import AddAdmin from '../AdminScreens/AddAdmin';
import Contract from '../AdminScreens/Contract';
import AddHospital from '../AdminScreens/AddHospital';
import Compansation from '../AdminScreens/Compansation';

import auth from '@react-native-firebase/auth';
import Profile from '../screens/Profile';
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