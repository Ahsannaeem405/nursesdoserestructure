import React, { useState } from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
// import HomeScreen from './HomeScreen';
// import InboxScreen from "./InboxScreen";
import TabTopBarNavigator from './TopBar';

import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const DashboardScreen = props => {


	return (
		<SafeAreaProvider>
			{/* <Text>Dashboard</Text> */}
			<TabTopBarNavigator />
		</SafeAreaProvider>
	);


}





const stylesin = StyleSheet.create({});

export default DashboardScreen;