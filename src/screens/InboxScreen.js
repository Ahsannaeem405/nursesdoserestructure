import React from 'react';

import styles from "../styles/AuthStyles";
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const MESSAGES = [
  {
    key: '1',
    name: 'Daniyal',
    p: 'Hello Daniyal'

  },
  {
    key: '2',
    name: 'Daniyal',
    p: 'Hello Daniyal'

  },
  {
    key: '3',
    name: 'Daniyal',
    p: 'Hello Daniyal'

  },
  {
    key: '4',
    name: 'Daniyal',
    p: 'Hello Daniyal'


  },
  {
    key: '5',
    name: 'Daniyal',
    p: 'Hello Daniyal'

  },
  {
    key: '6',
    name: 'Daniyal',
    p: 'Hello Daniyal'

  },
  {
    key: '7',
    name: 'Daniyal',
    p: 'Hello Daniyal'

  }
];
const InboxScreen = props => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1
      }}>
      <View
        style={{
          backgroundColor: "white",
          width: wp('100%'),
          height: hp('7%'),
          flexDirection: 'row',
          alignItems: 'center', marginTop: hp('1%')
        }}>
        <Image style={{
          marginLeft: wp('2%'),
          width: wp('10%'),
          height: hp('6%'),
          borderWidth: 2,
          borderRadius: 100
        }} source={require('../../assets/userperson.png')} />
        <Text style={{
          marginLeft: wp('2%'),
          fontSize: wp('7%'),
          fontWeight: 'bold'

        }}>Chats</Text>
        <TouchableOpacity style={{
          width: wp('10%'),
          height: hp('6%'),
          backgroundColor: '#dedede', marginLeft: wp('55%'),
          borderRadius: 100, justifyContent: 'center', alignItems: 'center'
        }}>
          <Image style={{
            width: wp('5%'),
            height: hp('3%'),
            borderWidth: 1,
          }} source={require('../../assets/pen.png')} />
        </TouchableOpacity>




      </View>
      <View style={{
        flexDirection: 'row',
        width: wp('73%'),
        height: hp('6%'),
        backgroundColor: '#ECECEC', alignSelf: 'center',
        borderRadius: 100, justifyContent: 'center', alignItems: 'center'
      }}>
        <Image style={{
          width: wp('5%'), height: hp('2.5%'), marginLeft: wp('5%')
        }} source={require('../../assets/search.png')} />
        <TextInput placeholder="Search..." placeholderTextColor='gray' style={{ borderRadius: 30, backgroundColor: '#ECECEC', height: hp('6%'), width: wp('65%') }} />
      </View>
      <Text style={{
        marginLeft: wp('6%'),
        marginTop: wp('2%'),
        fontSize: wp('9%'),
        fontWeight: 'bold'
      }}>Messages</Text>
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
              marginLeft: wp('7%'),
              borderBottomWidth: 1,
              width: wp('90%'),
              height: hp('10%'),
              justifyContent: 'center',

            }}>

              <Text style={{
                fontSize: wp('5%'),
                fontWeight: 'bold',
                color: 'black'

              }}>{item.name}</Text>
              <Text style={{
                fontSize: wp('4%'),
                color: 'gray'

              }}>{item.p}</Text>

            </TouchableOpacity>

          </>
        )}
      />
    </View>
  );
};

const stylesin = StyleSheet.create({


});

export default InboxScreen;