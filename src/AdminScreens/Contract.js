import * as React from "react";
import { TextInput, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Contract = (props) => {
  return (
    <View style={{
      flexDirection: 'row',
      width: wp('100%'),
      height: hp('8%'), marginTop: hp('2%'), justifyContent: 'center', alignItems: 'center'
    }}>

      <View style={{
        flexDirection: 'row',
        width: wp('70%'),
        height: hp('6%'),
        backgroundColor: '#ECECEC',
        borderRadius: 100, alignItems: 'center'
      }}>
        <Image style={{
          width: wp('5%'), height: hp('2.5%'), marginLeft: wp('5%')
        }} source={require('../../assets/search.png')} />
        <TextInput placeholder="Search Job..." placeholderTextColor='gray'
          style={{
            borderRadius: 30,
            backgroundColor: '#ECECEC', height: hp('6%'), width: wp('50%')
          }} />

      </View>



      <TouchableOpacity
        style={{
          width: wp("25%"),
          height: hp('4%'),
          marginLeft: wp('2%'),
          borderRadius: 15,
          justifyContent: "center",
          alignItems: 'center',
          backgroundColor: '#A80002'

        }}
        onPress={() => props.navigation.navigate("Compansation")}
      >

        <Text style={{ color: "#fff", fontWeight: "bold" }}>Add</Text>

      </TouchableOpacity>
    </View>
  )
};

export default Contract;