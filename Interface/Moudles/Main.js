'use strict';
import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  NavigatorIOS,
  Text,
  View
} from 'react-native';


var RootView = require('./RootVC/Loading.js');
var HeaderView = require('./RootVC/Header.js');

export default class EasyLifeRootVC extends React.Component {
  renderScene = (route,navigator) => {
    const RootComponent = route.component;
    return (<RootComponent navigator={navigator} route={route} />);
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{title: 'EasyLifeRootVC', index: 0,component: RootView}}
        renderScene={this.renderScene} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

// module.exports = EasyLifeRootVC;
