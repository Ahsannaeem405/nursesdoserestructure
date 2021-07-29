import * as React from 'react';
import { Text, View, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import Blogs from './Blogs';
import InboxScreen from './InboxScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Stays from './Stays';
import Hospitals from './Hospitals'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Profile from './Profile';

const Tab = createMaterialTopTabNavigator();
const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor: 'red',
                labelStyle: { fontSize: 12 },
                style: {
                    backgroundColor: 'white',
                }

            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarLabel: () =>
                        <View style={{ height: hp('7%'), width: wp('15%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ height: hp('4%'), width: wp('7%') }}
                                source={require('../../assets/home1.png')} />
                            <Text style={{ marginTop: hp('1%'), color: 'gray', fontSize: wp('3%'), fontWeight: '600' }}>HOME</Text>
                        </View>
                }}
            />
            <Tab.Screen
                name='Inbox'
                component={InboxScreen}
                options={{
                    tabBarLabel: () =>
                        <View style={{ height: hp('7%'), width: wp('16%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ height: hp('3.6%'), width: wp('8.2%') }}
                                source={require('../../assets/inbox.png')} />
                            <Text style={{ marginTop: hp('1%'), color: 'gray', fontSize: wp('3%'), fontWeight: '600' }}>INBOX</Text>
                        </View>
                }}
            />
            <Tab.Screen
                name='Hospitals'
                component={Hospitals}
                options={{
                    tabBarLabel: () =>
                        <View style={{ height: hp('7%'), width: wp('20%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ height: hp('3.5%'), width: wp('7%') }}
                                source={require('../../assets/hospital.png')} />
                            <Text style={{ marginTop: hp('1%'), color: 'gray', fontSize: wp('3%'), fontWeight: '600' }}>HOSPITALS</Text>
                        </View>
                }}
            />
            <Tab.Screen
                name='Stays'
                component={Stays}

                options={{
                    tabBarLabel: () =>
                        <View style={{ height: hp('7%'), width: wp('15%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ height: hp('3%'), width: wp('7%') }}
                                source={require('../../assets/stays.png')} />
                            <Text style={{ marginTop: hp('1%'), color: 'gray', fontSize: wp('3%'), fontWeight: '600' }}>STAYS</Text>
                        </View>
                }}
            />
            <Tab.Screen
                name='Blogs'
                component={Blogs}
                options={{
                    tabBarLabel: () =>
                        <View style={{ height: hp('7%'), width: wp('15%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ height: hp('3%'), width: wp('7%') }}
                                source={require('../../assets/friends.png')} />
                            <Text style={{ marginTop: hp('1%'), color: 'gray', fontSize: wp('3%'), fontWeight: '600' }}>BLOGS</Text>
                        </View>
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarLabel: () =>
                        <View style={{ height: hp('7%'), width: wp('15%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ height: hp('2.8%'), width: wp('5%') }}
                                source={require('../../assets/profile1.png')} />
                            <Text style={{ marginTop: hp('1.6%'), color: 'gray', fontSize: wp('3%'), fontWeight: '600' }}>PROFILE</Text>
                        </View>
                }}
            />

        </Tab.Navigator>
    )
}
export default function TopBarNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}