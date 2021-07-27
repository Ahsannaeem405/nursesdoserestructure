import React, { Component, useEffect, useRef, useState } from 'react';

import {
  Text,
  View,
  TextInput,
  Image,
  alert,
  FlatList,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

const Hospitals = (props, navigation) => {
  // const initialMapState = {
  //   region: {
  //     latitude: 33.247875,
  //     longitude: -83.441162,
  //     latitudeDelta: 0.25,
  //     longitudeDelta: 0.15,
  //   },
  // };


  return (
    <View
      style={{ justifyContent: 'center' }}
    >

      <MapView
        style={styles.map}
        region={{
          latitude: 33.247875,
          longitude: -83.441162,
          latitudeDelta: 0.25,
          longitudeDelta: 0.15,
        }}
        provider={PROVIDER_GOOGLE}

      >
        <Marker coordinate={{
          latitude: 33.247875,
          longitude: -83.441162,
          latitudeDelta: 0.25,
          longitudeDelta: 0.15
        }}>
          <Callout>
            <Text>My Location</Text>
          </Callout>
        </Marker>

      </MapView>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search Hospital"
          placeholderTextColor="gray"
          autoCapitalize="none"
        // value={SHo}
        // onChangeText={search}
        // style={{ flex: 1, padding: 5 }}
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: heightPercentageToDP('100%')
  },
  searchBox: {
    marginTop: hp('2%'),
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    width: wp("90%"),
    height: hp('10%'),
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default Hospitals;