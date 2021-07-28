import * as React from "react";
import { Text, TextInput, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome
} from 'react-native-vector-icons/Ionicons';
const AddHospital = (props) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          width: wp("100%"),
          height: hp("7%"),
          flexDirection: "row",
          borderBottomColor: "black",
          elevation: 10,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "white",
            width: wp("12%"),
            height: hp("7%"),
            flexDirection: "row",
            borderBottomColor: "black",

          }}
          onPress={() => props.navigation.navigate("ShowHospital")}
        >
          <Image style={{

            width: wp("13%"),
            height: hp("2.5%"),


          }} source={require('../../assets/back-arrow.png')} />
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: wp('5%'),
            alignSelf: 'center',
          }}
        >
          Hospital Added
        </Text>

      </View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View
          style={{
            flexDirection: "column",
            borderRadius: 1,
            borderBottomWidth: 0.5,
            height: hp('30%'),
            borderBottomColor: "grey",
          }}
        >
          <View
            style={{
              flexDirection: "row",

              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: wp('5%'), fontWeight: "bold" }}>
                Hospital Image
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Text
                // onPress={pickImage}
                style={{ color: "#2596be", fontSize: wp('5%'), marginTop: hp('0%') }}
              >
                Upload
              </Text>
            </View>
          </View>


          <Image style={{ marginTop: hp('0%'), height: hp('25%'), width: wp('50%'), alignSelf: 'center' }} source={require("../../assets/AddHospital.png")} />
        </View>

        <View
          style={{
            flexDirection: "column",
            width: wp("100%"),
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >

          <View
            style={{
              justifyContent: "space-between",
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: "row",
              height: hp('5%'), width: wp('95%')
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Hospital Name
            </Text>
            <Image style={{ height: hp('3%'), width: wp('6') }} source={require('../../assets/pen.png')} />
          </View>




          <View
            style={{
              marginTop: hp("1%"),
              width: wp("95%"),
              borderColor: "gray",
              borderWidth: 1, alignSelf: 'center'
            }}
          >
            <TextInput
              placeholder="Enter hospital name.."
              textAlign="center"
              // onChangeText={(HospitaName) => this.setState({ HospitaName })}
              style={{
                paddingLeft: 5,
                width: wp("95%"),
                borderRadius: 20,
              }}
            />

          </View>

        </View>

        <View
          style={{
            flexDirection: "column",
            width: wp("100%"),

            justifyContent: "space-between",
            padding: 5,
            marginTop: hp("2%"),
          }}
        >

          <View
            style={{
              justifyContent: "space-between",
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: "row",
              height: hp('5%'), width: wp('95%')
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Hospital Address
            </Text>
            <Image style={{ height: hp('3%'), width: wp('6') }} source={require('../../assets/pen.png')} />
          </View>




          <View
            style={{
              marginTop: hp("1%"),
              width: wp("95%"),
              borderColor: "gray",
              borderWidth: 1, alignSelf: 'center'
            }}
          >
            <TextInput
              placeholder="Enter hospital Address"
              textAlign="center"
              // onChangeText={(HospitaName) => this.setState({ HospitaName })}
              style={{
                paddingLeft: 5,
                width: wp("95%"),
                borderRadius: 20,
              }}
            />

          </View>
        </View>



        <View
          style={{
            flexDirection: "column",
            width: wp("95%"),
            marginTop: hp("3%"),
            alignSelf: 'center',
          }}
        >

          <View
            style={{
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Posted Date
            </Text>
            <Image style={{ height: hp('3%'), width: wp('6') }} source={require('../../assets/pen.png')} />

          </View>
          {/* <DatePicker
              style={{ width: "100%" }}
              // date={this.state.date}
              placeholder="Posted date"
              placeholderTextColor="black"
              showIcon={false}
              borderColor="gray"
              mode="date"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
            // onDateChange={(date) => {
            //   this.setState({ date: date });
            // }}
            /> */}

          <View
            style={{
              marginTop: hp("1%"),
              width: wp("95%"),
              borderColor: "gray",
              borderWidth: 1,
            }}
          >
            <TextInput
              placeholder="Enter Date"
              textAlign="center"
              // onChangeText={(PostedDate) => this.setState({ PostedDate })}

              style={{
                paddingLeft: 5,
                width: wp("95%"),
                borderRadius: 20,
              }}
            />

          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            width: wp("100%"),
            justifyContent: "space-between",
            padding: 5,
            marginTop: hp("2%"),
          }}
        >

          <View
            style={{
              justifyContent: "space-between",
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: "row",
              height: hp('5%'), width: wp('95%')
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Hospital Description
            </Text>
            <Image style={{ height: hp('3%'), width: wp('6') }} source={require('../../assets/pen.png')} />
          </View>




          <View
            style={{
              marginTop: hp("1%"),
              width: wp("95%"),
              borderColor: "gray",
              borderWidth: 1, alignSelf: 'center',
            }}
          >
            <TextInput
              placeholder="Enter Description"
              textAlign="center"
              // onChangeText={(HospitaName) => this.setState({ HospitaName })}
              style={{
                paddingLeft: 5,
                width: wp("95%"),
                borderRadius: 20,
              }}
            />

          </View>
        </View>


        <View
          style={{
            flexDirection: "column",
            width: wp("100%"),
            justifyContent: "space-between",
            padding: 5,
            marginTop: "2%",
          }}
        >

          <View
            style={{
              justifyContent: "space-between",
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: "row",
              height: hp('5%'), width: wp('95%')
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Special Arrangments
            </Text>
            <Image style={{ height: hp('3%'), width: wp('6') }} source={require('../../assets/pen.png')} />
          </View>




          <View
            style={{
              marginTop: hp("1%"),
              width: wp("95%"),
              borderColor: "gray",
              borderWidth: 1, alignSelf: 'center'
            }}
          >
            <TextInput
              placeholder="Special Arrangments"
              textAlign="center"
              // onChangeText={(HospitaName) => this.setState({ HospitaName })}
              style={{
                paddingLeft: 5,
                width: "100%",
                borderRadius: 20,
              }}
            />

          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
            padding: 5,
            marginTop: "2%",
          }}
        >

          <View
            style={{
              justifyContent: "space-between",
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: "row",
              height: hp('5%'), width: wp('95%')
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              State
            </Text>
            <Image style={{ height: hp('3%'), width: wp('6') }} source={require('../../assets/pen.png')} />
          </View>




          <View
            style={{
              marginTop: hp("1%"),
              width: wp("95%"),
              borderColor: "gray",
              borderWidth: 1, alignSelf: 'center'
            }}
          >
            <TextInput
              placeholder="Enter State"
              textAlign="center"
              // onChangeText={(HospitaName) => this.setState({ HospitaName })}
              style={{
                paddingLeft: 5,
                width: "100%",
                borderRadius: 20,
              }}
            />

          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
            padding: 5,
            marginTop: "2%",
          }}
        >

          <View
            style={{
              justifyContent: "space-between",
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: "row",
              height: hp('5%'), width: wp('95%')
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              City
            </Text>
            <Image style={{ height: hp('3%'), width: wp('6') }} source={require('../../assets/pen.png')} />
          </View>




          <View
            style={{
              marginTop: hp("1%"),
              width: wp("95%"),
              borderColor: "gray",
              borderWidth: 1, alignSelf: 'center'
            }}
          >
            <TextInput
              placeholder="Enter City"
              textAlign="center"
              // onChangeText={(HospitaName) => this.setState({ HospitaName })}
              style={{
                paddingLeft: 5,
                width: "100%",
                borderRadius: 20,
              }}
            />

          </View>
        </View>


        <View
          style={{
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
            padding: 5,
            marginTop: "3%",
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: "row",
              height: hp('5%'), width: wp('95%')
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Location
            </Text>
            <Image style={{ height: hp('3%'), width: wp('6') }} source={require('../../assets/pen.png')} />
          </View>
          <MapView
            region={{
              latitude: 33.247875,
              longitude: -83.441162,
              latitudeDelta: 0.25,
              longitudeDelta: 0.15,
            }}
            maxZoomLevel={18}
            style={{
              width: 340,
              height: 180,
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 20,
            }}
            provider="google"
            showsMyLocationButton={true}
            showsUserLocation={true}
          // onPress={(e) => {
          //   this.setState({
          //     coordinate: e.nativeEvent.coordinate,
          //   });
          // }}
          >
            <Marker
              coordinate={{
                latitude: 33.247875,
                longitude: -83.441162,
              }}
            ></Marker>
          </MapView>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignSelf: "center",
            }}
          >
            {/* <Entypo
              name="location-pin"
              size={24}
              color="#A80002"
              style={{ marginRight: 10 }}
            /> */}
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 8,
                color: "#A80002",
              }}
            >
              Click on Map to Add a Marker
            </Text>
          </View>
        </View>

        <TouchableOpacity
        // onPress={() => this.AddHospital()}
        >
          <View
            style={{
              marginTop: hp("5%"),
              width: wp("84%"),
              padding: hp("2%"),
              borderRadius: 5,
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
              marginBottom: hp("5%"),
              backgroundColor: "#A80002",
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: hp("2.5%"),
              }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
};

export default AddHospital;