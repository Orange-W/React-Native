'use strict';

// iOS
import './Interface/Common/Global/Global_Path.js'; // 全局路径
import './Interface/Common/Global/Global_DeviceSizeIOS.js';


import EasyLifeRootVC from './Interface/Moudles/Main.js';
const { AppRegistry } = require('react-native');
// getPath();
AppRegistry.registerComponent('EasyLifeRootVC', () => EasyLifeRootVC);
