import * as React from "react";
import { FlatList, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MESSAGES = [
  {
    key: '1',
    name: 'Hospital',
    location: 'Lahore'

  },
  {
    key: '2',
    name: 'Hospital',
    location: 'Lahore'

  },
  {
    key: '3',
    name: 'Hospital',
    location: 'Lahore'

  },
  {
    key: '4',
    name: 'Hospital',
    location: 'Lahore'


  },
  {
    key: '5',
    name: 'Hospital',
    location: 'Lahore'

  },
  {
    key: '6',
    name: 'Hospital',
    location: 'Lahore'

  },
  {
    key: '7',
    name: 'Hospital',
    location: 'Lahore'

  }
];
const ShowHospital = (props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1
      }}>


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
          <TextInput placeholder="Search Hospitals" placeholderTextColor='gray'
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
          onPress={() => props.navigation.navigate("AddHospital")}
        >

          <Text style={{ color: "#fff", fontWeight: "bold" }}>Add</Text>

        </TouchableOpacity>
      </View>
      <FlatList

        data={MESSAGES}
        style={styles.gridView}
        staticDimension={115}
        // fixed
        horizontal={false}
        spacing={25}
        // keyExtractor={item.key}
        renderItem={({ item }) => (
          <>

            <TouchableOpacity style={{
              marginLeft: wp('2%'),
              width: wp('95%'),
              height: hp('10%'),
              justifyContent: 'center',
              marginTop: hp('2%'),
              borderRadius: 7,
              backgroundColor: '#e6e6e6'
            }}>
              <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{
                  fontSize: wp('5%'),
                  fontWeight: 'bold',
                  color: 'black',
                  marginLeft: wp('5%')

                }}>{item.name}</Text>
                <TouchableOpacity style={{
                  marginRight: wp('5%'),
                  width: wp('15%'),
                  height: hp('3%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 7,
                  backgroundColor: '#A80002'
                }}>

                  <Text style={{
                    fontSize: wp('2%'),
                    fontWeight: 'bold',
                    color: 'white',

                  }}>Delete</Text>
                </TouchableOpacity>
              </View>

              <View style={{ justifyContent: 'space-between', marginTop: hp('1%'), flexDirection: 'row', marginLeft: wp('5%'), width: wp('50%'), }}>
                <View style={{ flexDirection: 'row', marginLeft: wp('0%'), width: wp('20%'), }}>

                  <Image style={{
                    borderWidth: 1, width: wp('3%'), height: hp('2%'),
                  }} source={require('../../assets/pin.png')} />
                  <Text style={{
                    marginLeft: wp('1%'),
                    fontSize: wp('3%'),
                    color: 'black',
                  }}>{item.location}</Text>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: wp('0%'), width: wp('20%'), }}>

                  <Image style={{
                    width: wp('4%'), height: hp('2.4%'),
                  }} source={require('../../assets/date.png')} />
                  <Text style={{
                    marginLeft: wp('1%'),
                    fontSize: wp('3%'),
                    color: 'black',
                  }}>1/02/2020</Text>
                </View>
              </View>

            </TouchableOpacity>

          </>
        )}
      />
    </View>
  )
};

export default ShowHospital;