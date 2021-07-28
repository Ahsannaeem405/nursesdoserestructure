import * as React from "react";
import { Text, TextInput, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Compansation = (props) => {
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
          onPress={() => props.navigation.navigate("Contract")}
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
            textAlign: "center",
          }}
        >
          Job Added
        </Text>

      </View>
      <ScrollView keyboardShouldPersistTaps="handled">


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
              Job Pay
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
              placeholder="Job Pay.."
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
              Job Description
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
              placeholder="Enter Job Description"
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
              Application Link
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
              placeholder=" Application Link"
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
            width: "100%",
            justifyContent: "space-between",
            padding: 5,
            marginTop: "2%",
          }}
        >

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Employment Type
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {/* <Feather name="edit-2" size={24} color="black" /> */}

          </View>
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              marginTop: hp("3%"),
            }}
          >
            <DropDownPicker
              items={[
                { label: "Permanent", value: "permanent" },
                { label: "Temporary", value: "temporary" },
                { label: "Internee", value: "internee" },
              ]}
              // defaultValue={this.state.EmploymentType}
              placeholder="Select your Employment type.."
              containerStyle={{ height: 40 }}
              style={{ backgroundColor: "white" }}
              itemStyle={{
                justifyContent: "center",
              }}
              dropDownStyle={{
                backgroundColor: "#fafafa",
              }}
              onChangeItem={(item) =>
                this.setState({
                  EmploymentType: item.value,
                })
              }
            />
            {/* <TextInput
                    placeholder="Employment type.."
                    textAlign="center"
                    onChangeText={(EmploymentType) =>
                      this.setState({ EmploymentType })
                    }
                    style={{
                      paddingLeft: 5,
                      width: "100%",
                      borderRadius: 20,
                    }}
                  /> */}
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
              flexDirection: "row",
              padding: 10,
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Profession
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {/* <Feather name="edit-2" size={24} color="black" /> */}

          </View>
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              marginTop: hp("3%"),
            }}
          >
            <DropDownPicker
              items={[
                { label: "Doctor", value: "doctor" },
                { label: "Nurse", value: "nurse" },
                { label: "Surgeon", value: "surgeon" },
                { label: "Physician", value: "physician" },
              ]}
              // defaultValue={this.state.EmploymentType}
              placeholder="Select your Profession"
              containerStyle={{ height: 40 }}
              style={{ backgroundColor: "white" }}
              itemStyle={{
                justifyContent: "center",
              }}
              dropDownStyle={{
                backgroundColor: "#fafafa",
              }}
              onChangeItem={(item) =>
                this.setState({
                  EmploymentType: item.value,
                })
              }
            />
            {/* <TextInput
                    placeholder="Employment type.."
                    textAlign="center"
                    onChangeText={(EmploymentType) =>
                      this.setState({ EmploymentType })
                    }
                    style={{
                      paddingLeft: 5,
                      width: "100%",
                      borderRadius: 20,
                    }}
                  /> */}
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
              Start Date
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
              placeholder="Enter Date"
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
              Duration (Weeks)
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
              placeholder="Enter Duration"
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
              flexDirection: "row",
            }}
          >
            <Text
              style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
            >
              Shifts
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {/* <Feather name="edit-2" size={24} color="black" /> */}

          </View>
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              marginTop: hp("3%"),
            }}
          >
            <DropDownPicker
              items={[
                { label: "Morning", value: "morning" },
                { label: "Evening", value: "evening" },
              ]}
              // defaultValue={this.state.EmploymentType}
              placeholder="Select your Shifts"
              containerStyle={{ height: 40 }}
              style={{ backgroundColor: "white" }}
              itemStyle={{
                justifyContent: "center",
              }}
              dropDownStyle={{
                backgroundColor: "#fafafa",
              }}
              onChangeItem={(item) =>
                this.setState({
                  EmploymentType: item.value,
                })
              }
            />
            {/* <TextInput
                    placeholder="Employment type.."
                    textAlign="center"
                    onChangeText={(EmploymentType) =>
                      this.setState({ EmploymentType })
                    }
                    style={{
                      paddingLeft: 5,
                      width: "100%",
                      borderRadius: 20,
                    }}
                  /> */}
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
              Add
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
};

export default Compansation;