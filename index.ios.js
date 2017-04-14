'use strict';

// iOS
import './Interface/Common/Global/Global_Path.js'; // 全局路径
import './Interface/Common/Global/Global_DeviceSizeIOS.js';

const { AppRegistry } = require('react-native');

// import EasyLifeRootVC from './Interface/Moudles/Main.js';
// AppRegistry.registerComponent('EasyLifeRootVC', () => EasyLifeRootVC);

const setup = require('./Interface/js/main');

AppRegistry.registerComponent('EasyLifeRootVC', setup);
