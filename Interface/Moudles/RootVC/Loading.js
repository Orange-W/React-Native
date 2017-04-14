/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import {commonStyle} from  './Styles/RootViewCommon.style.js';

class Loading extends Component {
  render() {
    return (
      <View style={commonStyle.container}>
        <View style={commonStyle.headerView}>
          <Text style={commonStyle.loadingText}>Loading...</Text>
          <Image source={require('./img/sunny.gif')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingView: {
    backgroundColor: '#fff',
    flex: 1
  },
  loadingHeader: {
    height: 290,
    backgroundColor: '#589BC7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginBottom: 18
  }
});

module.exports = Loading;
