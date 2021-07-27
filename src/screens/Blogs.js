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
  TouchableOpacity,
  FlatList
} from 'react-native';

const BLOGS = [
  {
    key: '1',
    name: 'Daniyal',
    description: 'Hello Daniyal',
    postPic: require('../../assets/home.jpg'),
    profilePic: require('../../assets/userperson.png'),
    status: 'Public'

  },
  {
    key: '2',
    name: 'Daniyal',
    description: 'Hello Daniyal',
    postPic: require('../../assets/home.jpg'),
    profilePic: require('../../assets/userperson.png'),
    status: 'Public'

  },
  {
    key: '3',
    name: 'Daniyal',
    description: 'Hello Daniyal',
    postPic: require('../../assets/home.jpg'),
    profilePic: require('../../assets/userperson.png'),
    status: 'Public'

  },
  {
    key: '4',
    name: 'Daniyal',
    description: 'Hello Daniyal',
    postPic: require('../../assets/home.jpg'),
    profilePic: require('../../assets/userperson.png'),
    status: 'Public'


  },
  {
    key: '5',
    name: 'Daniyal',
    description: 'Hello Daniyal',
    postPic: require('../../assets/home.jpg'),
    profilePic: require('../../assets/userperson.png'),
    status: 'Public'

  },
  {
    key: '6',
    name: 'Daniyal',
    description: 'Hello Daniyal',
    postPic: require('../../assets/home.jpg'),
    profilePic: require('../../assets/userperson.png'),
    status: 'Public'

  },
  {
    key: '7',
    name: 'Daniyal',
    description: 'Hello Daniyal',
    postPic: require('../../assets/home.jpg'),
    profilePic: require('../../assets/userperson.png'),
    status: 'Public'

  }
];
const Blogs = props => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1
      }}>
      <FlatList
        data={BLOGS}
        style={styles.gridView}
        staticDimension={115}
        // fixed
        horizontal={false}
        spacing={25}
        // keyExtractor={item.key}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#e3e3e3",
              width: wp("100%"),

              borderBottomColor: "grey",
              borderBottomWidth: 0.5,
              marginTop: hp('1%')
            }}
          >

            <View style={{ flexDirection: "row", height: hp('10%'), alignItems: 'center', marginLeft: wp('2%') }}>

              <Image
                source={item.profilePic}
                style={{ height: hp('7.5%'), width: wp('13%'), borderRadius: 50 }}
              />

              <View style={{ width: wp("50%"), marginLeft: wp('3%') }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {item.name}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text>{item.status}</Text>

                </View>
              </View>


            </View>

            <View style={{ backgroundColor: "white", padding: "5%" }}>
              <Text>{item.description}</Text>
            </View>
            <View>
              <Image
                source={item.postPic}
                style={{ height: 400, width: "100%" }}
              />
            </View>

            <View style={{ borderColor: '#ECECEC', backgroundColor: 'white', flexDirection: "row", borderBottomWidth: 1, height: hp('7%'), alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: "row", height: hp('6%'), alignItems: 'center', justifyContent: 'space-between' }}>
                <Image style={{
                  marginLeft: wp('1%'),
                  width: wp('5%'),
                  height: hp('3%'),
                }} source={require('../../assets/like.png')} />
                <Text style={{
                  marginLeft: wp('1%'),
                  fontWeight: 'bold',
                  color: 'gray'
                }}>2</Text>

              </View>

              <Text style={{
                marginRight: wp('2%'),
                fontWeight: 'bold',
                color: 'gray'
              }}>2 Comments</Text>

            </View>



            <View style={{ backgroundColor: 'white', flexDirection: "row", height: hp('7%'), alignItems: 'center', justifyContent: 'space-between' }}>

              <TouchableOpacity style={{ flexDirection: 'row', height: hp('5%'), width: wp("20%"), alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{
                  marginLeft: wp('1%'),
                  width: wp('5%'),
                  height: hp('2.5%'),
                }} source={require('../../assets/like1.png')} />
                <Text style={{
                  marginLeft: wp('1%'),
                  fontWeight: 'bold',
                  color: 'gray'
                }}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row', height: hp('5%'), width: wp("40%"), alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{
                  width: wp('5%'),
                  height: hp('2.8%'),
                }} source={require('../../assets/Comments.png')} />
                <Text style={{
                  fontWeight: 'bold',
                  color: 'gray', marginLeft: wp('1%'),
                }}>Comments</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row', height: hp('5%'), width: wp("25%"), alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{
                  width: wp('5%'),
                  height: hp('2.5%'),
                }} source={require('../../assets/share.png')} />
                <Text style={{
                  fontWeight: 'bold',
                  color: 'gray', marginLeft: wp('1%'),
                }}>Share</Text>
              </TouchableOpacity>
            </View>


          </View>
        )} />

    </View>
  );


  const stylesin = StyleSheet.create({


  });
}
export default Blogs;
