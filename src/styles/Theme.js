import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Theme = {
  primary: '#F7F8FC',
  secondary: '#34495e',
  backgroundColor: '#ffffff',
  primary: '#F7F8FC',
  iconbackground: '#34495e',
  backgroundColor: '#ffffff',
  textInputBottomBorderColor: 'grey',
  btnTextColor: '#ffffff',
  btnBackgroundColor: 'black',
  btnRadius: 10,
  white: 'white',
  black: 'black',
  btntextSize: 20,
  bold: 'bold',
  fontFamily: 'default',
  grey: 'grey',
  lightGrey: 'lightgrey',
  profileTextcolor: '#262626',
  bold: 'bold',
  fontFamily: 'default',
  grey: 'grey',
  lightGrey: 'lightgrey',
  border_Radius: 5,
  selectedColor: 'gray',
  heightPer: Dimensions.get('window').height / 100,
  widthPer: Dimensions.get('window').width / 100,
  wp,
  hp,
};
