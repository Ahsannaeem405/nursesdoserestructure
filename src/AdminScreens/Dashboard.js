import React, { Component } from "react";
import { Image, Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

// import * as firebase from "firebase";
// const firebaseConfig = {
//   databaseURL: "https://dose-nurse-default-rtdb.firebaseio.com/",
//   apiKey: "AIzaSyDg5PKc9K8y_eO3bXu5XGqJz5Y0XwpuadU",
//   authDomain: "dose-nurse.firebaseapp.com",
//   projectId: "dose-nurse",
//   storageBucket: "dose-nurse.appspot.com",
//   messagingSenderId: "30012938724",
//   appId: "1:30012938724:web:329e38cb02b70a808ccff1",
//   measurementId: "G-8JCRHFSZ83",
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }

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
      {/* <Drawer.Screen
        name="Profile"
        options={{ drawerLabel: "Profile" }}
        component={ProfileScreenStack}
      /> */}
      <Drawer.Screen
        name="Add Admin"
        options={{ drawerLabel: "Add Admin" }}
        component={AddAdminScreenStack}
      />
    </Drawer.Navigator>
  );
}

const Dashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.MView}>
          <View style={styles.MainView}>
            <Text style={styles.TextS}>Total Users</Text>
            <View style={{
              width: wp("17%"),
              height: hp("5%"), flexDirection: 'row', alignItems: 'center'
            }}>
              <Image style={{

                width: wp("6.5%"),
                height: hp("3%"),
                marginRight: wp('4%')


              }} source={require('../../assets/user1.png')} />

              <Text style={styles.TextS}>1</Text>
            </View>
          </View>
          <View style={styles.MainView1}>
            <Text style={styles.TextS}>Total Hospital</Text>
            <View style={{
              width: wp("17%"),
              height: hp("5%"), flexDirection: 'row', alignItems: 'center'
            }}>
              <Image style={{

                width: wp("6.5%"),
                height: hp("3%"), marginRight: wp('4%')


              }} source={require('../../assets/hosp.png')} />

              <Text style={styles.TextS}>1</Text>
            </View>
          </View>
          <View style={styles.MainView2}>
            <Text style={styles.TextS}>Total Houses</Text>
            <View style={{
              width: wp("17%"),
              height: hp("5%"), flexDirection: 'row', alignItems: 'center'
            }}>
              <Image style={{

                width: wp("6.5%"),
                height: hp("3%"), marginRight: wp('4%')


              }} source={require('../../assets/house.png')} />

              <Text style={styles.TextS}>1</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}
export default Dashboard;

const styles = StyleSheet.create({
  MView: {
    alignItems: "center",
    width: "100%",
  },
  MainView: {
    flexDirection: "row",
    marginTop: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#A80002",
    borderRadius: 10,
    width: "95%",
    height: 100,
    padding: 10,
  },
  MainView1: {
    flexDirection: "row",
    marginTop: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 10,
    width: "95%",
    height: 100,
    padding: 10,
  },
  MainView2: {
    flexDirection: "row",
    marginTop: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
    width: "95%",
    height: 100,
    padding: 10,
  },
  TextS: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
