import * as React from "react";
import { FlatList, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MESSAGES = [
  {
    key: '1',
    name: 'User',
    mail: 'test@test.com'

  },
  {
    key: '2',
    name: 'User',
    mail: 'test@test.com'

  },
  {
    key: '3',
    name: 'User',
    mail: 'test@test.com'

  },
  {
    key: '4',
    name: 'User',
    mail: 'test@test.com'


  },
  {
    key: '5',
    name: 'User',
    mail: 'test@test.com'

  },
  {
    key: '6',
    name: 'User',
    mail: 'test@test.com'

  },
  {
    key: '7',
    name: 'User',
    mail: 'test@test.com'

  }
];
const ShowMember = () => {
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
          height: hp('5%'),
          backgroundColor: '#ECECEC',
          borderRadius: 100, alignItems: 'center'
        }}>
          <Image style={{
            width: wp('5%'), height: hp('2.5%'), marginLeft: wp('5%')
          }} source={require('../../assets/search.png')} />
          <TextInput placeholder="Search Users" placeholderTextColor='gray'
            style={{
              borderRadius: 30,
              backgroundColor: '#ECECEC', height: hp('5%'), width: wp('50%')
            }} />

        </View>




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



              <Text style={{
                marginTop: hp('1%'),
                marginLeft: wp('5%'),
                fontSize: wp('3%'),
                color: 'black',
              }}>{item.mail}</Text>





            </TouchableOpacity>

          </>
        )}
      />
    </View>
  )
};

export default ShowMember;