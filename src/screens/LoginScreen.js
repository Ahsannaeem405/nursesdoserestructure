import React from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/AuthStyles";
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
const LoginScreen = props => {
  return (
    <ScrollView style={styles.mainContainer}>

      <TouchableOpacity style={styles.btn}
        onPress={() => props.navigation.navigate('AdminMainDashboard')} >
        <Text style={styles.btnText}>Login as Admin</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer} >
        <Image source={require("../../assets/icon.png")} style={styles.logo} />
      </View>


      <View>
        <Text style={styles.procedText}>Proceed With Your</Text>
        <Text style={styles.loginText}>Login</Text>
      </View>

      <View style={{ marginTop: Theme.hp("5%") }}>
        <View style={styles.textInputContainerMain}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.textInputContainerSub}>
            <TextInput
              placeholder="Enter Your Email"
              style={{ flex: 1 }}
              onChangeText={(val) => this.updateInputVal(val, "email")}
            />
            <FontAwesome5 name="user" size={16} />
          </View>
        </View>
        <View style={styles.textInputContainerMain}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.textInputContainerSub}>
            <TextInput
              secureTextEntry={true}
              placeholder="***********"
              style={{ flex: 1 }}
              onChangeText={(val) => this.updateInputVal(val, "password")}
              maxLength={15}
            />
            <Ionicons name="ios-key-outline" size={16} />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Dashboard')} >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ForgetPassword')}
      >
        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}> Forgot Password</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.dontHaveContainer}>
        <Text style={styles.forgotText}>Don't have an Account </Text>
        <TouchableOpacity

          onPress={() => props.navigation.navigate('Register')}
        >
          <Text style={styles.signUpLink}>SignUp Now!</Text>
        </TouchableOpacity>
      </View>



    </ScrollView>

  );
};

const stylesin = StyleSheet.create({


});

export default LoginScreen;