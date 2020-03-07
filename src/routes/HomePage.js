import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, FlatList } from 'react-native';

import { ImageView, Styles, TimeView, SearchBar } from '../global';

class HomePage extends Component {
  render() {
    const contentStyle = [s.bgWhite, s.flex1, s.pt4, s.radiusTop32];

    return (
      <ScrollView contentContainerStyle={[s.bgPurple]}>
        <TimeView />
        <View style={contentStyle}>
          <ImageView />
          <View style={[s.py4, s.pl16]}>
            <Text style={[s.fontBold, s.font16, s.mb8]}>Content Book</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={this.renderCategories}
              keyExtractor={item => item.id}
            />
          </View>
          <SearchBar />
        </View>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

export default HomePage;
