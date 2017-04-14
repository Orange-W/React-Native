/**
 * @flow
 */

'use strict';

import type { Action } from './types';

import WeatherService from '../services/weather';
const service = new WeatherService();

const maxAgeInSeconds = (10 * 60); // 10 minutes

function getAllWeather() {
  log('初始化:开始获取所有天气');
  return (dispatch: any) => {
    service.getAllWeather(false).then(
      (result) => {
        dispatch({
          type: 'WEATHER_GET_ALL',
          data: result
        });
        console.log('所有天气:'+result);
        var dates = result.map((item) => item.freshness);
        var freshness = new Date(Math.min(...dates));
        if (getAgeInSeconds(freshness) > maxAgeInSeconds) {
          dispatch(setWeatherRefreshing());
          dispatch(forceWeatherUpdate());
        }
      }
    );
  };
}

async function forceWeatherUpdate() {
  var result = await service.getAllWeather(true);
  return {
    type: 'WEATHER_GET_ALL',
    data: result
  };
}

function getAgeInSeconds(freshness: Date) {
  return Math.floor((Date.now() - freshness.getTime()) / 1000);
}

function setWeatherLoading() {
  console.log('初始化天气');
  return {
    type: 'WEATHER_SET_LOADING'
  };
}

function setWeatherRefreshing() {
  return {
    type: 'WEATHER_SET_REFRESHING'
  };
}

module.exports = {
  getAllWeather,
  setWeatherLoading,
  setWeatherRefreshing
}
