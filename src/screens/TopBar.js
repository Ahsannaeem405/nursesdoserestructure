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

                    tabBarIcon:
                        // <Ionicons name="home" size={23} color="blue" style={{ marginLeft: 5 }} />
                        <View>
                            <Image resizeMode='contain' source={require('../../assets/home.png')} />
                            <Text>Home</Text>
                        </View>
                }}
            />
            <Tab.Screen
                name='Friends'
                component={FriendsScreen}
                options={{ tabBarLabel: 'Friends' }}
            />
            <Tab.Screen
                name='Inbox'
                component={InboxScreen}
                options={{ tabBarLabel: 'Inbox' }}
            />
            <Tab.Screen
                name='Hospitals'
                component={Hospitals}
                options={{ tabBarLabel: 'Hospitals' }}
            />
            <Tab.Screen
                name='Stays'
                component={Stays}
                options={{ tabBarLabel: 'Stays' }}
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