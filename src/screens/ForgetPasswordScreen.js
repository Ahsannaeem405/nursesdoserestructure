import React from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  StyleSheet
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const ForgetPasswordScreen = props => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.procedText}>Enter Your Email To Reset</Text>
          <Text style={styles.loginText}>Password</Text>
        </View>
        <View style={{ marginTop: Theme.hp("5%") }}>
          <View style={styles.textInputContainerMain}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.textInputContainerSub}>
              <TextInput
                placeholder="Your Email"
                style={{ flex: 1 }}
                onChangeText={(val) => this.updateInputVal(val, "email")}
              />
              <MaterialCommunityIcons name="email-open-outline" size={16} />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.ForgetPassword()}
        >
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ForgetPassword")}
        ></TouchableOpacity>
        <View style={styles.dontHaveContainer}>
          <Text style={styles.forgotText}>Don't have an Account </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Register")}
          >
            <Text style={styles.signUpLink}>SignUp Now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const stylesin = StyleSheet.create({});

export default ForgetPasswordScreen;