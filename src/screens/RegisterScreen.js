import React, { useState } from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../styles/AuthStyles";
import auth from '@react-native-firebase/auth';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

const RegisterScreen = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Please Enter Both Fields')
    }
    else {
      try {
        await auth().createUserWithEmailAndPassword(email, password)
      } catch (e) {
        Alert.alert('Something Went Wrong')
      }
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.procedText}>Registered Your</Text>
          <Text style={styles.loginText}>Account</Text>
        </View>

        {/* username */}
        <View style={{ marginTop: hp("5%") }}>
          <View style={styles.textInputContainerMain}>
            <Text style={styles.label}>Username</Text>
            <View style={styles.textInputContainerSub}>
              <TextInput
                placeholder="DURA001"
                style={{ flex: 1 }}


              />
              <FontAwesome5 name="user" size={16} />
            </View>
          </View>
          {/* Email */}

          <View style={styles.textInputContainerMain}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.textInputContainerSub}>
              <TextInput
                type="email"
                placeholder="@example.com"
                style={{ flex: 1 }}
                onChangeText={text => setEmail(text)}

              />
              <MaterialCommunityIcons name="email-open-outline" size={16} />
            </View>
          </View>
          {/* password */}

          <View style={styles.textInputContainerMain}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.textInputContainerSub}>
              <TextInput
                placeholder="***********"
                style={{ flex: 1 }}
                secureTextEntry={true}
                maxLength={15}
                onChangeText={text => setPassword(text)}
              />
              <Ionicons name="ios-key-outline" size={16} />
            </View>
          </View>

          <View style={styles.textInputContainerMain}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.textInputContainerSub}>
              <TextInput
                secureTextEntry={true}
                placeholder="***********"
                style={{ flex: 1 }}
                maxLength={15}
              />
              <Ionicons name="ios-key-outline" size={16} />
            </View>
          </View>
          <View style={styles.textInputContainerMain}>
            <Text style={styles.label}>Professional Code</Text>
            <View style={styles.textInputContainerSub}>
              <TextInput
                placeholder="Enter your code here.."
                style={{ flex: 1 }}
              />
              <MaterialCommunityIcons name="email-open-outline" size={16} />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Login")
            userSignUp();
          }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Register</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.forgotContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Login")
              userSignUp();
            }}
          >
            <Text style={styles.alreadyAcoountText}>
              Already have an Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const stylesin = StyleSheet.create({});

export default RegisterScreen;