import React from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
const NavBarComponents = (props, navigation) => {
	return (
		<View style={{ width: "100%", marginTop: 30, backgroundColor: "white", height: 60, flexDirection: 'row', }}>

			<View style={{ width: "11%", marginTop: 10, marginLeft: 5 }}>
				<Ionicons name="home" size={28} color="blue" style={{ marginLeft: 5 }} />
				<View style={{ backgroundColor: "blue", height: 5, marginTop: 7 }}></View>
			</View>

			<TouchableOpacity onPress={() => alert('ahsan')}>
				<View style={{ marginTop: 10, marginLeft: 10, flex: 1 }}>
					<Ionicons name="home" size={28} color="blue" style={{ marginLeft: 5 }} />
					<View style={{ backgroundColor: "blue", height: 5, marginTop: 7, width: "120%" }}></View>
				</View>
			</TouchableOpacity>


		</View>
	);
};

const stylesin = StyleSheet.create({


});

export default NavBarComponents;