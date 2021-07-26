import { StyleSheet } from "react-native";
import Theme from "./Theme";

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
  logo: {
    height: 110,
    width: 110,
  },
  logoContainer: {
    marginLeft: Theme.wp("7%"),
    marginTop: Theme.hp("10%"),
  },
  procedText: {
    marginLeft: Theme.wp("7%"),
    marginTop: Theme.hp("5%"),
    fontSize: Theme.hp("3.5%"),
  },
  loginText: {
    marginLeft: Theme.wp("7%"),
    marginTop: Theme.hp("1%"),
    fontSize: Theme.hp("4%"),
    color: "#A80002",
    fontWeight: "bold",
  },
  textInputContainerMain: {
    paddingRight: Theme.hp("4%"),
    paddingLeft: Theme.hp("4%"),
    paddingTop: Theme.hp("2%"),
  },
  textInputContainerSub: {
    paddingTop: Theme.hp("1%"),

    width: Theme.wp("84%"),
    alignSelf: "center",
    justifyContent: "center",
    borderBottomColor: Theme.textInputBottomBorderColor,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: Theme.wp("2%"),
  },
  label: {
    fontSize: Theme.hp("2.5%"),
  },
  btn: {
    marginTop: Theme.hp("5%"),
    width: Theme.wp("84%"),
    padding: Theme.hp("2%"),
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#A80002",
  },
  btnText: {
    color: Theme.btnTextColor,
    fontSize: Theme.hp("2.5%"),
  },
  forgotContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Theme.hp("2%"),
  },
  dontHaveContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: Theme.hp("2%"),
  },
  forgotText: {
    color: Theme.grey,
    fontSize: Theme.hp("2%"),
  },
  alreadyAcoountText: {
    color: Theme.grey,
    fontSize: Theme.hp("2%"),
    paddingBottom: Theme.hp("8%"),
  },
  signUpLink: {
    color: "#A80002",
    fontSize: Theme.hp("2%"),
    paddingLeft: Theme.wp("1%"),
  },
  profileBackground: {
    backgroundColor: "grey",
    width: "100%",
    height: Theme.hp("20%"),
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  profImage: {
    bottom: 0,
    marginTop: Theme.hp("-9%"),
    width: Theme.hp("18%"),
    height: Theme.hp("18%"),
    borderRadius: 70,
    justifyContent: "center",
    alignSelf: "center",
  },
  proTextInputMainContainer: {
    padding: 10,
    marginTop: Theme.hp("2%"),
  },
  proTextInputSubContainer: {
    paddingTop: "5%",
  },
  profileTextInput: {
    width: "85%",
    paddingTop: "1%",
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
  proLabel: {
    // paddingLeft: '10%',
    fontSize: 30,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  proLabelContainer: {
    width: Theme.wp("35%"),
    marginTop: Theme.hp("5%"),
    paddingLeft: Theme.hp("4%"),
  },
  textInputRowcontainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    paddingTop: Theme.hp("2%"),
  },
  iconStyle: {
    // paddingRight: Theme.hp('2%'),
    paddingTop: Theme.hp("1%"),
  },
  LogoText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C53938",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
});
