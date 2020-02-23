import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import styles from '../styles';

class Profile extends Component {
  render() {
    return (
      <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
        <Text> textInComponent </Text>
        <TouchableOpacity
          style={[s.p4, s.itemsCenter, s.justifyCenter]}
          onPress={() => this.props.navigation.navigate('homePage')}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  ...styles,
});

export default Profile;
