import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

import { Images, Styles, categories, TimeView } from '../../global';

class HomePage extends Component {
  renderCategories = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate(item.toScreen)}
      style={[s.justifyCenter, s.itemsCenter, s.border1, s.mx2, s.shadow3, s.borderTransparent]}>
      <Image source={item.image} style={{ width: 150, height: 150 }} resizeMode="contain" />
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <TimeView />

        <View>
          <Image source={Images.DUMMY_IMAGE} resizeMode="contain" />
        </View>
        <View style={[s.mt24]}>
          <FlatList
            horizontal
            data={categories}
            renderItem={this.renderCategories}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

export default HomePage;
