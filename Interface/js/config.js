/**
 * @flow
 */

'use strict';

// TODO: find out how to handle errors from require
try {
  var  weatherApiKey = '12b2817fbec86915a6e9b4dbbd3d9036';
} catch (e) {}

module.exports = {
  weatherApiKey: weatherApiKey,
  weatherApiUrl: 'http://api.openweathermap.org/data/2.5',
  postcodeApiUrl: 'http://v0.postcodeapi.com.au/suburbs.json',
  isDebugData: false
};
