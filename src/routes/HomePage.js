import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import styles from '../styles';
import { Images } from '../global/constants';

class HomePage extends Component {
  render() {
    return (
      <View style={[s.flex1, s.itemsCenter]}>
        <View style={[s.itemsCenter, s.flex1]}>
          <Image source={Images.DUMMY_IMAGE} style={[s.h256, s.wFull]} />
          <Text>ksksks</Text>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  ...styles,
});

export default HomePage;
