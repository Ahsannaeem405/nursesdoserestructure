import * as React from "react";
import { TextInput, Text, ScrollView, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AddAdmin = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white" }}
    >
      <View style={styles.mainContainer}>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: hp("2%") }}>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: hp('3%'),
                color: "#A80002",
                fontSize: wp('5%'),
              }}
            >
              Add New Admin
            </Text>
          </View>

          <Image style={{ height: hp('15%'), width: wp('30%') }} source={require("../../assets/adminImg.png")} />
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: hp('3%'),
              color: "#A80002",
              fontSize: wp('5%'),
            }}
          // onPress={pickImage}
          >
            Upload Image
          </Text>
        </View>

        <View style={{ marginTop: hp("1%") }}>
          <View style={styles.textInputContainerMain}>
            <Text style={styles.label}>Username</Text>
            <View style={styles.textInputContainerSub}>
              <TextInput
                placeholder="DURA001"
                style={{ flex: 1 }}
              // value={this.state.displayName}
              // onChangeText={(username) => this.setState({ username })}
              />
              {/* <FontAwesome5 name="user" size={16} /> */}
            </View>
          </View>
          {/* Email */}

          <View style={styles.textInputContainerMain}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.textInputContainerSub}>
              <TextInput
                placeholder="@example.com"
                style={{ flex: 1 }}
              // value={this.state.email}
              // onChangeText={(email) => this.setState({ email })}
              />
              {/* <MaterialCommunityIcons name="email-open-outline" size={16} /> */}
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
                // value={this.state.password}
                maxLength={15}
              // onChangeText={(password) => this.setState({ password })}
              />
              {/* <Ionicons name="ios-key-outline" size={16} /> */}
            </View>
          </View>
        </View>
        <TouchableOpacity
        // onPress={() => this.registerAdmin()}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
};

export default AddAdmin;