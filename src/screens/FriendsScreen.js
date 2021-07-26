import React from 'react';

import styles from "../styles/AuthStyles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
const FriendsScreen = props => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#dedede",
          width: wp('100%'),
          height: hp('14%'),
        }}>
        <Text style={{
          marginTop: hp('1%'), marginLeft: wp('2%'),
          fontSize: wp('7%'),
          fontWeight: 'bold'

        }}>Chats</Text>
        <TextInput />

      </View>
    </View>
  );
};

const stylesin = StyleSheet.create({


});

export default FriendsScreen;