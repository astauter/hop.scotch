import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './Routes';

EStyleSheet.build({
  $primaryBlue: '#4682B4',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
});

export default class change extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}

AppRegistry.registerComponent('change', () => change);

