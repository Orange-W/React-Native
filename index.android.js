'use strict';

// iOS 设备 Size
import './Interface/Styles/GlobalStyles/Global_DeviceIOS.styles.js';


import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  NavigatorIOS,
  Text,
  View
} from 'react-native';


var RootView = require('./Interface/RootView');

class EasyLifeRootVC extends React.Component {
  renderScene = (route,navigator) => {
    const RootComponent = route.component;
    return (<RootComponent navigator={navigator} route={route} />);
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{title: 'EasyLifeRootVC', index: 0,component: RootView}}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

// 整体js模块的名称
AppRegistry.registerComponent('EasyLifeRootVC', () => EasyLifeRootVC);
