import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

export default class TimeView extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#eee' }}>
        <Text> {moment().format('lll')} </Text>
      </View>
    );
  }
}
