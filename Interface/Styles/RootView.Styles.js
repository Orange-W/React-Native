
import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },

  container: {
    padding: 0,
    marginTop: Global_IOS_DeviceStatusBarHeight,
    flex:1,
    flexDirection:'row-reverse',
    // backgroundColor: '#000000',
  },

  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },

  backgroundImage: {
    flex: 1,
    opacity: 0.6,
  },

  items:{
    // flex:0,
    // flexDirection:'row-reverse',
    alignSelf:'flex-end',
    backgroundColor:'red',
    height:400,
    width:200,
    alignItems:"center",
    justifyContent:'center',
  }
});

module.exports = styles;
