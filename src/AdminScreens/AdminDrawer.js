import React, { Component, useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from "react-native";
import { Avatar } from "react-native-elements";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
// import * as firebase from "firebase";


const AdminDrawer = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flexDirection: "column", alignItems: "center", marginTop: 10 }}
      >


        <Text style={{ fontWeight: "bold" }}>daniyal</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <DrawerItem
          label="Logout"
          labelStyle={{
            marginTop: 15,
            fontWeight: "bold",
            color: "#A80002",
            width: "50%",
            height: "100%",
            fontSize: 16,
          }}
          drawerContentOptions={{
            activeTintColor: "#A80002",
            itemStyle: { marginVertical: 5 },
          }}
          onPress={() =>
            props.navigation.navigate("Login")
          }
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "flex-start",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AdminDrawer;
