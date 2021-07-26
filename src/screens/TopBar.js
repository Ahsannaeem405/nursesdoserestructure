import * as React from 'react';
import { Text, View, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import InboxScreen from './InboxScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Stays from './Stays';
import Hospitals from './Hospitals'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
                            <Image style={{ height: hp('3%'), width: wp('7%') }}
                                source={require('../../assets/home.png')} />
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
                            <Image style={{ height: hp('3%'), width: wp('8.2%') }}
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
                            <Image style={{ height: hp('3%'), width: wp('7%') }}
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
                name='Friends'
                component={FriendsScreen}
                options={{
                    tabBarLabel: () =>
                        <View style={{ height: hp('7%'), width: wp('15%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ height: hp('3%'), width: wp('7%') }}
                                source={require('../../assets/friends.png')} />
                            <Text style={{ marginTop: hp('1%'), color: 'gray', fontSize: wp('3%'), fontWeight: '600' }}>FRIENDS</Text>
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