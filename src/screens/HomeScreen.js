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

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const PROFILES = [
  {
    key: '1',
    name: 'VISA',
    p: require('../../assets/profile.png')

  },
  {
    key: '2',
    name: 'VISA',
    p: require('../../assets/profile.png')

  },
  {
    key: '3',
    name: 'VISA',
    p: require('../../assets/profile.png')

  },
  {
    key: '4',
    name: 'VISA',
    p: require('../../assets/profile.png')


  },
  {
    key: '5',
    name: 'VISA',
    p: require('../../assets/profile.png')

  },
  {
    key: '6',
    name: 'VISA',
    p: require('../../assets/profile.png')

  },
  {
    key: '7',
    name: 'VISA',
    p: require('../../assets/profile.png')

  }
];
const HOSPITALS = [
  {
    key: '1',
    name: 'Hospital 1',
    p: require('../../assets/home.jpg')

  },
  {
    key: '2',
    name: 'Hospital 1',
    p: require('../../assets/home.jpg')

  },
  {
    key: '3',
    name: 'Hospital 1',
    p: require('../../assets/home.jpg')

  },
  {
    key: '4',
    name: 'Hospital 1',
    p: require('../../assets/home.jpg')


  },
  {
    key: '5',
    name: 'VIHospital 1SA',
    p: require('../../assets/profile.png')

  },
  {
    key: '6',
    name: 'Hospital 1',
    p: require('../../assets/home.jpg')

  },
  {
    key: '7',
    name: 'Hospital 1',
    p: require('../../assets/home.jpg')

  }
];
const HOSTS = [
  {
    key: '1',
    name: 'HOST 1',
    p: require('../../assets/home.png')

  },
  {
    key: '2',
    name: 'HOST 1',
    p: require('../../assets/home.png')

  },
  {
    key: '3',
    name: 'HOST 1',
    p: require('../../assets/home.png')

  },
  {
    key: '4',
    name: 'HOST 1',
    p: require('../../assets/home.png')


  },
  {
    key: '5',
    name: 'HOST 1SA',
    p: require('../../assets/profile.png')

  },
  {
    key: '6',
    name: 'HOST 1',
    p: require('../../assets/home.png')

  },
  {
    key: '7',
    name: 'HOST 1',
    p: require('../../assets/home.png')

  }
];
const HomeScreen = props => {
  return (
    <View>
      <ScrollView
        style={{
          backgroundColor: "#dedede",


        }}>
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

          }}>
          <Text style={{
            marginLeft: wp('2%'),
            fontSize: wp('7%'),
            fontWeight: 'bold'

          }}>Hot Contacts</Text>
        </View>




        <View
          style={{
            backgroundColor: "#d3d3d3",
            width: wp('100%'),
            height: hp('40%'),

          }}>
          <View
            style={{
              backgroundColor: "#dedede",
              width: wp('100%'),
              height: hp('7%'),

            }}>
            <Text style={{
              marginTop: hp('1%'), marginLeft: wp('2%'),
              fontSize: wp('7%'),
              fontWeight: 'bold',


            }}>Hospitals</Text>
          </View>
          <FlatList

            data={HOSPITALS}
            style={styles.gridView}
            staticDimension={115}
            // fixed
            horizontal={true}
            spacing={25}
            // keyExtractor={item.key}
            renderItem={({ item }) => (
              <>

                <TouchableOpacity style={{
                  marginLeft: wp('2%'),
                  marginTop: hp('2%'),
                  backgroundColor: "#dedede",
                  width: wp('30%'),
                  height: hp('30%'),
                  alignItems: 'center',
                  borderRadius: 10,

                }}>
                  <Image style={{
                    width: wp('30%'),
                    height: hp('30%'),

                    borderRadius: 10,

                  }} source={item.p} />
                  <Text style={{
                    marginTop: hp('-7%'),
                    fontSize: wp('5%'),
                    fontWeight: 'bold',
                    color: 'white'

                  }}>{item.name}</Text>
                </TouchableOpacity>

              </>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: "gra",
            width: wp('100%'),
            height: hp('17%'),
          }}>
          <View
            style={{
              backgroundColor: "#dedede",
              width: wp('100%'),
              height: hp('7%'),

            }}>
            <Text style={{
              marginTop: hp('1%'), marginLeft: wp('2%'),
              fontSize: wp('7%'),
              fontWeight: 'bold',


            }}>Friends</Text>
          </View>
          <FlatList

            data={PROFILES}
            style={styles.gridView}
            staticDimension={115}
            // fixed
            horizontal={true}
            spacing={25}
            // keyExtractor={item.key}
            renderItem={({ item }) => (
              <>

                <TouchableOpacity style={{
                  marginLeft: wp('1%'),
                  marginTop: hp('1%'),
                  backgroundColor: "#d3d3d3",
                  width: wp('15%'),
                  height: hp('7%'),
                  alignItems: 'center',


                }}>
                  <Image style={{
                    width: wp('17%'),
                    height: hp('7.5%'),
                  }} source={item.p} />
                </TouchableOpacity>

              </>
            )}
          />
        </View>

        <View
          style={{
            backgroundColor: "#dedede",
            width: wp('100%'),
            height: hp('40%'),
          }}>

          <View
            style={{
              backgroundColor: "#dedede",
              width: wp('100%'),
              height: hp('7%'),

            }}>
            <Text style={{
              marginTop: hp('1%'), marginLeft: wp('2%'),
              fontSize: wp('7%'),
              fontWeight: 'bold',


            }}>Nurse's Dose Blogs</Text>
          </View>
          <ScrollView
            style={{ flex: 1, backgroundColor: "#d3d3d3" }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >

            <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("AddPost")}
              style={{
                backgroundColor: "#d3d3d3",
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
        </View>
        <View
          style={{
            backgroundColor: "#d3d3d3",
            width: wp('100%'),
            height: hp('40%'),

          }}>
          <View
            style={{
              backgroundColor: "#dedede",
              width: wp('100%'),
              height: hp('7%'),

            }}>
            <Text style={{
              marginTop: hp('1%'), marginLeft: wp('2%'),
              fontSize: wp('7%'),
              fontWeight: 'bold',


            }}>Nurse's Dose Blogs</Text>
          </View>
          <FlatList

            data={HOSTS}
            style={styles.gridView}
            staticDimension={115}
            // fixed
            horizontal={true}
            spacing={25}
            // keyExtractor={item.key}
            renderItem={({ item }) => (
              <>

                <TouchableOpacity style={{
                  marginLeft: wp('2%'),
                  marginTop: hp('2%'),
                  backgroundColor: "#d3d3d3",
                  width: wp('50%'),
                  height: hp('27%'),
                  alignItems: 'center',

                }}>
                  <Image style={{
                    width: wp('44%'),
                    height: hp('22%'),


                  }} source={item.p} />
                  <Text style={{
                    fontSize: wp('5%'),
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: hp('1%')

                  }}>{item.name}</Text>
                </TouchableOpacity>

              </>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: "#d3d3d3",
            width: wp('100%'),
            height: hp('40%'),
            borderBottomWidth: 1,
            marginTop: hp('2%')

          }}>
          <Text style={{
            marginTop: hp('1%'), marginLeft: wp('2%'),
            fontSize: wp('7%'),
            fontWeight: 'bold'

          }}>Stay Informed</Text>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: "#d3d3d3",
              width: wp('95%'),
              height: hp('8%'),
              borderBottomWidth: 1,
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center'

            }}>
            <Text style={{

              fontSize: wp('4.5%'),
              fontWeight: '600'

            }}>For Guest</Text>
            <Text style={{
              fontSize: wp('4.5%'),
              fontWeight: '600'

            }}>For Host</Text>


          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: "#d3d3d3",
              width: wp('95%'),
              height: hp('8%'),
              borderBottomWidth: 1,

              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center'

            }}>
            <Text style={{

              fontSize: wp('4.5%'),
              fontWeight: 'bold'

            }}>Our COVID-19 response</Text>
            <Text style={{
              fontSize: wp('4.5%'),
              fontWeight: 'bold'

            }}>Message From</Text>


          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: "#d3d3d3",
              width: wp('95%'),
              height: hp('8%'),
              borderBottomWidth: 1,

              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center'

            }}>
            <Text style={{

              fontSize: wp('4.5%'),
              fontWeight: 'bold'

            }}>Cancellation Option</Text>
            <Text style={{
              fontSize: wp('4.5%'),
              fontWeight: 'bold'

            }}>Resources for</Text>


          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: "#d3d3d3",
              width: wp('95%'),
              height: hp('8%'),
              borderBottomWidth: 1,

              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center'

            }}>
            <Text style={{

              fontSize: wp('4.5%'),
              fontWeight: 'bold'

            }}>Help Center</Text>
            <Text style={{
              fontSize: wp('4.5%'),
              fontWeight: 'bold'

            }}>Providing from</Text>


          </View>

        </View>
      </ScrollView>
    </View>
  );
};

const stylesin = StyleSheet.create({});

export default HomeScreen;