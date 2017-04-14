'use strict'; // 严格报错

import React, { Component } from 'react';
import {
  // AppRegistry,
  Navigator,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native';

// 引入 style 文件
import styles from  './Styles/RootView.Styles.js';
import SearchPage from './SearchPage.js';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

class RootView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '重庆',
      isLoading: false,
      message: '加载中...'
    };
    this.weatherObj = {
      isShow : false,
      area: '',
      weatherType: '',
      maxTemperature:0,
      minTemperature:0,
      windDescription:'',
      windLevel:'',
    }
    this.init();
  }

  init(){
    let url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + this.state.searchString + "&day=0&dfc=3";
    console.log('request url:'+ url);
    fetch(url, {
      method: 'GET'
    }).then(response => {
      return response.text();
    }).then(text => {
      eval(text);
      console.log('jb:'+ window.SWther);
      let weatherObject = window.SWther.w[this.state.searchString][0];
      return weatherObject;
    }).then(jsonObj => {
      this.weatherObject = {
        isShow: true,
        area: this.state.searchString,
        weatherType: jsonObj.s1,
        maxTemperature: jsonObj.t1,
        minTemperature: jsonObj.t2,
        windDescription: jsonObj.d1,
        windLevel: jsonObj.p1,
      };
      let jsonStr = JSON.stringify(this.weatherObject); //可以将json对象转换成json对符串

      var _f = jsonObj.f1 + "_0.png";
      if (new Date().getHours() > 17) {
         _f = jsonObj.f2 + "_1.png";
      }
        //  var img = "<img width='16px' height='16px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" + _f
        //  + "' />";
      var tq = "今日天气 :　" + this.state.searchString  + " " + jsonObj.s1 + " " + jsonObj.t2 + "℃～" + jsonObj.t1 + "℃ " + jsonObj.d1 + jsonObj.p1 + "级 "+_f;

      this.setState({ message: tq });
    }).catch(error =>
       this.setState({
        isLoading: false,
        message: 'xxx:Something bad happened ' + error
     }));

    //  $.ajax({
    //                url: url,
    //                dataType: "script",
    //                scriptCharset: "gbk",
    //                success: function (data) {
    //                var _w = window.SWther.w[citytq][0];
    //                var _f = _w.f1 + "_0.png";
    //                if (new Date().getHours() > 17) {
    //                    _f = _w.f2 + "_1.png";
    //                    }
    //                   //  var img = "<img width='16px' height='16px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" + _f
    //                   //  + "' />";
    //                    var tq = "今日天气 :　" + citytq + " " + _w.s1 + " " + _w.t2 + "℃～" + _w.t1 + "℃ " + _w.d1 + _w.p1 + "级";
    //                    this.state.message = tq;
    //                }
    //         });
  }

  goContentPage = () => {
    const {navigator} = this.props;
    navigator.push({
      component:SearchPage,
    });
  }

  // 图层渲染
  render() {
    var data={src:require('../../Resources/timg.jpeg')};
    console.log(' 开始渲染');
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={data.src} >
            <View style={styles.items}>
              <TouchableHighlight onPress={this.goContentPage}>
                <Text>{this.state.message}</Text>
              </TouchableHighlight>
            </View>
        </Image>
      </View>
    );
  }
}

module.exports = RootView;
