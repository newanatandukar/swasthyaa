import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { ImageView, Styles, categories, TimeView, SearchBar, VideoView, news } from '../../global';

class HomePage extends Component {
  renderCategories = ({ item }) => {
    const viewStyle = [
      s.justifyCenter,
      s.itemsCenter,
      s.border1,
      s.shadow3,
      s.borderTransparent,
      s.overflowHidden,
      s.bgWhite,
      s.radius8,
      s.mx4,
    ];
    const imageStyle = { width: 150, height: 150 };
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(item.toScreen)}
        style={viewStyle}>
        <Image source={item.image} style={imageStyle} resizeMode="contain" resizeMethod="scale" />
      </TouchableOpacity>
    );
  };

  renderNews = ({ item }) => {
    const viewStyle = [
      s.justifyCenter,
      s.itemsCenter,
      s.border1,
      s.shadow3,
      s.borderTransparent,
      s.overflowHidden,
      s.bgWhite,
      s.radius8,
      s.mx4,
    ];
    const imageStyle = { width: 150, height: 150 };

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('newsView', { link: item.link })}
        style={viewStyle}>
        <Image source={item.image} style={imageStyle} resizeMode="contain" resizeMethod="scale" />
      </TouchableOpacity>
    );
  };

  render() {
    const contentStyle = [s.bgLighter, s.flex1, s.pt4, s.radiusTop32];
    const categoryStyle = [s.py8, s.pl16, s.mb4];
    const categoryContentTextStyle = [s.fontBold, s.font16, s.mb8];

    return (
      <ScrollView contentContainerStyle={[s.bgPurple]}>
        <TimeView />
        <View style={contentStyle}>
          <ImageView />
          <View style={categoryStyle}>
            <Text style={categoryContentTextStyle}>Content Book</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={this.renderCategories}
              keyExtractor={item => item.id}
            />
          </View>
          <SearchBar />
          <View style={categoryStyle}>
            <Text style={categoryContentTextStyle}>News</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={news}
              renderItem={this.renderNews}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

export default HomePage;
