import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  alert,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Linking,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import { Feather } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { Fontisto } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { Avatar } from "react-native-elements";
// import AsyncStorage from "@react-native-async-storage/async-storage";
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
//   firebase.app(); // if already initialized, use that one
// }

const Profile = () => {

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ flex: 1, padding: "4%" }}>
          <View
            style={{
              borderBottomColor: "#f2f2f2",
              width: wp("90%"),
              height: hp('10%'),
              borderBottomWidth: 1.5,
            }}
          >
            <View style={{ flexDirection: "row" }}>

              <Image style={{
                marginLeft: wp('2%'),
                width: wp('11%'),
                height: hp('6.5%'),
                borderWidth: 2,
                borderRadius: 100
              }} source={require('../../assets/userperson.png')} />


              <View style={{ marginLeft: wp('3%') }}>
                <Text
                  style={{
                    color: "#484848",
                    fontSize: 25,
                    fontWeight: "bold",
                  }}
                >
                  daniyal
                  {/* {displayName} */}
                </Text>
                <TouchableOpacity
                // onPress={() => this.props.navigation.navigate("personal")}
                >
                  <Text style={{ color: "#3ca5a9" }}>View profile</Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>


          <TouchableOpacity
            // onPress={() =>
            //   // Linking.openURL("https://play.google.com/store/apps")
            // }
            style={{
              borderBottomColor: "#f2f2f2",
              width: wp('90%'),
              height: wp('20%'),
              borderBottomWidth: 1.5,
              justifyContent: 'center',

            }}
          >


            <View style={{ flexDirection: "row" }}>
              <Image style={{
                marginLeft: wp('2%'),
                width: wp('10%'),
                height: hp('5%'),
                borderWidth: 2,
                borderRadius: 100
              }} source={require('../../assets/money.jpg')} />

              <View style={{ marginLeft: wp('3%'), }}>
                <Text style={{ color: "#8c8c8c" }}>
                  Earn Money from your extra space
                </Text>
                <Text style={{ color: "#3ca5a9" }}>Learn more</Text>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomColor: "#f2f2f2",
              width: wp('90%'),
              height: hp('7%'),
              borderBottomWidth: 1.5,
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          // onPress={() =>
          //   Linking.openURL("https://play.google.com/store/apps")
          // }
          >


            <Text style={{ color: "#484848", fontSize: wp('5%'), }}>
              Download update app
            </Text>

            <Image style={{
              width: wp('6%'),
              height: hp('3.75%'),
            }} source={require('../../assets/download.png')} />


          </TouchableOpacity>
          <View style={{
            borderBottomColor: "#f2f2f2",
            width: wp('90%'),
            height: hp('7%'),
            alignItems: 'center',
            marginLeft: wp('1%'),
            flexDirection: "row",
            justifyContent: 'space-between'
          }}>
            <Text style={{ color: "#888888", fontSize: wp('5%'), }}>
              Account Setting
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          // onPress={() => this.props.navigation.navigate("personal")}
          >


            <Text style={{ color: "#484848", fontSize: 20 }}>
              Personal Information
            </Text>
            <Image style={{
              marginLeft: wp('1%'),
              width: wp('8%'),
              height: hp('4%'),
            }} source={require('../../assets/person.png')} />


          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text style={{ color: "#484848", fontSize: 20 }}>
              Notification
            </Text>

            <Image style={{
              marginLeft: wp('1%'),
              width: wp('6%'),
              height: hp('4%'),
            }} source={require('../../assets/bell.png')} />
          </TouchableOpacity>

          <View style={{
            borderBottomColor: "#f2f2f2",
            width: wp('90%'),
            height: hp('7%'),
            alignItems: 'center',
            marginLeft: wp('1%'),
            flexDirection: "row",
            justifyContent: 'space-between'
          }}>
            <Text style={{ color: "#888888", fontSize: wp('5%'), }}>
              Hosting
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          // onPress={() => this.props.navigation.navigate("personal")}
          >


            <Text style={{ color: "#484848", fontSize: wp('5%'), }}>
              List Your Space
            </Text>
            <Image style={{
              marginLeft: wp('1%'),
              width: wp('7%'),
              height: hp('3.5%'),
            }} source={require('../../assets/hosting.png')} />


          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.youtube.com/watch?v=Of6uXL8EPog")
            }

            style={{
              borderBottomColor: "#f2f2f2",
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text style={{ color: "#484848", fontSize: wp('5%') }}>
              Learn about hosting
            </Text>
            <Image style={{
              marginLeft: wp('1%'),
              width: wp('7%'),
              height: hp('3.5%'),
            }} source={require('../../assets/hosting.png')} />
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.google.com/")}


            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text style={{ color: "#484848", fontSize: wp('5%') }}>
              Host a Practictoner</Text>
            <Image style={{
              marginLeft: wp('1%'),
              width: wp('6.8%'),
              height: hp('3.4%'),
            }} source={require('../../assets/host1.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text style={{ color: "#484848", fontSize: wp('5%') }}>
              Invite friends
            </Text>

            <Image style={{
              marginLeft: wp('1%'),
              width: wp('7%'),
              height: hp('4.2%'),
            }} source={require('../../assets/gift.png')} />
          </TouchableOpacity>

          <View style={{
            borderBottomColor: "#f2f2f2",
            width: wp('90%'),
            height: hp('7%'),
            alignItems: 'center',
            marginLeft: wp('1%'),
            flexDirection: "row",
            justifyContent: 'space-between'
          }}>
            <Text style={{ color: "#888888", fontSize: wp('5%'), }}>Support</Text>
          </View>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.google.com/")}

            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text style={{ color: "#484848", fontSize: 20 }}>
              How Nurse's Dose Works
            </Text>

            <Image style={{
              marginLeft: wp('1%'),
              width: wp('7%'),
              height: hp('4.3%'),
            }} source={require('../../assets/browse.png')} />
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.google.com/")}

            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text style={{ color: "#484848", fontSize: 20 }}>
              Get Help
            </Text>

            <Image style={{
              marginLeft: wp('1%'),
              width: wp('7%'),
              height: hp('4.5%'),
            }} source={require('../../assets/qmark.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.google.com/")}

            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text style={{ color: "#484848", fontSize: 20 }}>
              Get us feedback
            </Text>

            <Image style={{
              marginLeft: wp('1%'),
              width: wp('7%'),
              height: hp('3.6%'),
            }} source={require('../../assets/feedback.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.google.com/")}

            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text style={{ color: "#484848", fontSize: 20 }}>
              Terms of Services
            </Text>

            <Image style={{
              marginLeft: wp('1%'),
              width: wp('5.7%'),
              height: hp('4%'),
            }} source={require('../../assets/terms.png')} />
          </TouchableOpacity>

          <TouchableOpacity

            style={{
              borderBottomColor: "#f2f2f2",
              borderBottomWidth: 1.5,
              width: wp('90%'),
              height: hp('7%'),
              alignItems: 'center',
              marginLeft: wp('1%'),
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text style={{ color: "#484848", fontSize: 20 }}>
              Logout
            </Text>

            <Image style={{
              marginLeft: wp('1%'),
              width: wp('7%'),
              height: hp('4.5s%'),
            }} source={require('../../assets/logout.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Profile;