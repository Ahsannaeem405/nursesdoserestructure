import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const HomeScreen = props => {
  return (
    <View>
      <ScrollView>
        <ScrollView>
          <SafeAreaView style={{ flex: 1, color: "#ffffff" }}>
            <View
              style={{ width: wp("100%"), height: hp('10%'), justifyContent: 'center', alignItems: 'center', backgroundColor: "#000000" }}
            >
              <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Blog")}
              >

                <Text
                  style={{ fontSize: wp('4%'), color: "#ffffff", textDecorationLine: "underline" }}
                >
                  Get the latest on your NEWS Blog
                </Text>

              </TouchableOpacity>
            </View>

            <View
              style={{
                borderRadius: 1,
                borderWidth: 1,
                borderColor: 'white',
                width: wp("100%"),
                height: hp('55%'),
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ImageBackground
                source={require("../../assets/home.jpg")}
                style={{ width: wp("100%"), height: hp('55%') }}
              >
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignSelf: 'center',
                    alignItems: 'center',
                    flexDirection: "row",
                    backgroundColor: "white",
                    width: wp('70%'),
                    height: hp('6%'),
                    borderRadius: 25,

                    marginTop: hp("5%"),
                  }}
                  onPress={() => {
                    // this.props.navigation.navigate("ContractMap");
                  }}
                >

                  <Image
                    source={require("../../assets/search.png")}
                    style={{ width: wp("5%"), height: hp('3%'), marginRight: wp('1.5%') }} />

                  <Text
                    style={{



                      fontSize: wp('4%')


                    }}
                  >
                    Where are you going?
                  </Text>

                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate("StayMap");
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignSelf: 'center',
                      alignItems: 'center',
                      flexDirection: "row",
                      backgroundColor: "white",
                      width: wp('40%'),
                      height: hp('6%'),
                      borderRadius: 10,
                      marginTop: hp("30%"),
                    }}
                  >
                    <Text>Explore the Globe</Text>
                  </View>
                </TouchableOpacity>

              </ImageBackground>

            </View>
          </SafeAreaView>

        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#dedede",
            width: wp('100%'),
            height: hp('10%'),
            borderWidth: 1,

          }}>
          <Text style={{
            marginLeft: wp('2%'),
            fontSize: wp('5%'),
            fontWeight: 'bold'

          }}>Hot Contacts</Text>
        </View>


        <View
          style={{
            backgroundColor: "#dedede",
            width: wp('100%'),
            height: hp('40%'),
            borderWidth: 1,

          }}>
          <Text style={{
            marginLeft: wp('2%'),
            fontSize: wp('5%'),
            fontWeight: 'bold'

          }}>Hospitals</Text>

          <ScrollView
            style={{ borderWidth: 1, flex: 1, backgroundColor: "#dedede" }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("AddPost")}
              style={{
                // alignSelf: 'center',
                marginLeft: wp('2%'),
                backgroundColor: "#dedede",
                width: wp('25%'),
                height: hp('25%'),
                alignItems: 'center',
                borderWidth: 1,
              }}
            >

              <Image
                source={require("../../assets/home.jpg")}
                style={{
                  width: wp('25%'),
                  height: hp('25%'),

                  borderRadius: 10,
                }}
              ></Image>
              <View
                style={{
                  backgroundColor: "#e8e9eb",
                  height: 90,
                  marginTop: -18,
                  width: 110,
                  borderBottomEndRadius: 10,
                  alignItems: "center",
                  borderBottomStartRadius: 10,
                }}
              >
                <View
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#1770e4",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 2,
                    borderColor: "white",
                    width: 35,
                    height: 35,
                    marginTop: -15,
                  }}
                >
                  <AntDesign name="plus" size={24} color="white" />
                </View>

                <Text
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                    color: "white",
                    width: 70,
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Creat a Blog
                </Text>
              </View>

            </TouchableOpacity>
          </ScrollView>
        </View>

        <ScrollView
          style={{ borderWidth: 1, flex: 1, backgroundColor: "#dedede" }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("AddPost")}
            style={{
              backgroundColor: "#dedede",
              width: 130,
              height: 247,
            }}
          >
            <View style={{ padding: 10 }}>
              <Image
                source={require("../../assets/home.jpg")}
                style={{
                  height: 160,
                  width: 110,

                  borderRadius: 10,
                }}
              ></Image>
              <View
                style={{
                  backgroundColor: "#e8e9eb",
                  height: 90,
                  marginTop: -18,
                  width: 110,
                  borderBottomEndRadius: 10,
                  alignItems: "center",
                  borderBottomStartRadius: 10,
                }}
              >
                <View
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#1770e4",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 2,
                    borderColor: "white",
                    width: 35,
                    height: 35,
                    marginTop: -15,
                  }}
                >
                  <AntDesign name="plus" size={24} color="white" />
                </View>

                <Text
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                    color: "white",
                    width: 70,
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Creat a Blog
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const stylesin = StyleSheet.create({});

export default HomeScreen;