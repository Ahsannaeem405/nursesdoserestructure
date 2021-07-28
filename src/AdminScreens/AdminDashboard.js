import "react-native-gesture-handler";

import * as React from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native";

import AddHospital from "./AddHospital";
import AddAdmin from './AddAdmin';
import Compansation from './Compansation';
import HospitalList from './HospitalList';
import UpdateHospital from './UpdateHospital';
import ShowMember from './ShowMember';
import ShowMemberDetail from './ShowMemberDetail';
import ShowHospital from './ShowHospital';
import Dashboard from "./Dashboard";
import Contract from "./Contract";
import { NavigationContainer } from "@react-navigation/native";
import AdminDrawer from "./AdminDrawer";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Profile from "../screens/Profile";





const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
    <View
      style={{
        flexDirection: "row",

        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={toggleDrawer}>
        <Image style={{ height: heightPercentageToDP('5%'), width: widthPercentageToDP('12%') }} source={require('../../assets/hamburger.png')} />
      </TouchableOpacity>
    </View>
  );
}


function DashboardScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Dashboard",

          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#A80002",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function HospitalScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ShowHospital">
      <Stack.Screen
        name="ShowHospital"
        component={ShowHospital}
        options={{
          title: "ShowHospital",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#A80002",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MemberScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Member">
      <Stack.Screen
        name="ShowMember"
        component={ShowMember}
        options={{
          title: "ShowMember",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#A80002",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="AdminProfile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#A80002",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function AddAdminScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="AddAdmin">
      <Stack.Screen
        name="AddAdmin"
        component={AddAdmin}
        options={{
          title: "AddAdmin",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#A80002",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function ContractScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Contract">
      <Stack.Screen
        name="Contract"
        component={Contract}
        options={{
          title: "Contract",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#A80002",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}



function AdminNavigate() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#A80002",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <AdminDrawer {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        options={{ drawerLabel: "Dashboard" }}
        component={DashboardScreenStack}
      />
      <Drawer.Screen
        name="Hospital"
        options={{ drawerLabel: "Hospital" }}
        component={HospitalScreenStack}
      />
      <Drawer.Screen
        name="Member"
        options={{ drawerLabel: "Member" }}
        component={MemberScreenStack}
      />
      <Drawer.Screen
        name="Contract"
        options={{ drawerLabel: "Contract" }}
        component={ContractScreenStack}
      />

      <Drawer.Screen
        name="Add Admin"
        options={{ drawerLabel: "Add Admin" }}
        component={AddAdminScreenStack}
      />
    </Drawer.Navigator>
  );
}

const AdminDashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <NavigationContainer>
        <Stack.Navigator headerMode={false}>
          <Stack.Screen name="Home" component={AdminNavigate} />
          <Stack.Screen
            name="AddHospital"
            component={AddHospital}
          ></Stack.Screen>
          <Stack.Screen
            name="AddAdmin"
            component={AddAdmin}
          ></Stack.Screen>
          <Stack.Screen
            name="Compansation"
            component={Compansation}
          ></Stack.Screen>

          <Stack.Screen
            name="HospitalList"
            component={HospitalList}
          ></Stack.Screen>

          <Stack.Screen
            name="UpdateHospital"
            component={UpdateHospital}
          ></Stack.Screen>
          <Stack.Screen
            name="ShowMemberDetail"
            component={ShowMemberDetail}
          ></Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
};
export default AdminDashboard;