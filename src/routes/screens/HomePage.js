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
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ImageView, Styles, TimeView, SearchBar, categories, quickLinks, news } from '../../global';

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
      s.p8,
      { width: 150 },
    ];
    const imageStyle = { width: 100, height: 100 };

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('newsView', { link: item.link })}
        style={viewStyle}>
        <Image source={item.image} style={imageStyle} resizeMode="contain" resizeMethod="scale" />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  renderQuickLinks = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(item.link)}
        style={[
          s.flex1,
          s.bgLightPurple,
          s.p8,
          s.m4,
          s.radius6,
          s.row,
          s.itemsCenter,
          s.overflowHidden,
        ]}>
        <View style={[s.bgDarkPurple, s.p4, s.radius6]}>
          <Icon name={item.icon} size={28} color="#00aced" />
        </View>
        <Text textBreakStrategy="highQuality" style={[s.px4]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const contentStyle = [s.bgLighter, s.flex1, s.pt4, s.radiusTop32];
    const categoryStyle = [s.py8, s.pl16, s.my8];
    const quickLinkStyle = [s.py8, s.px16, s.my8];
    const categoryContentTextStyle = [s.fontBold, s.font16, s.mb8];
    const marqueeStyle = [s.justifyCenter, s.itemsCenter, s.px4, s.bgLightPink, s.py12, s.mt8];
    const marqueeTextStyle = [s.colorPink];

    const a = 'https://www.nepalihealth.com/feed/';
    return (
      <ScrollView contentContainerStyle={[s.bgPurple]}>
        <TimeView />
        <View style={contentStyle}>
          <ImageView style={[s.flex1]} />
          <View style={marqueeStyle}>
            <TextTicker
              style={marqueeTextStyle}
              duration={10000}
              loop
              scroll
              animationType="scroll"
              marqueeOnMount
              scrollSpeed={100}
              repeatSpacer={50}
              marqueeDelay={1000}>
              कसरी आफ्नो बच्चको रोगसँग बच्ने क्षमता बढाउन सकिन्छ ? लोरेम इप्सुम दोलोर सित ....
            </TextTicker>
          </View>
          <View style={categoryStyle}>
            <Text style={categoryContentTextStyle}>Content Book</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={this.renderCategories}
            />
          </View>
          <SearchBar />
          <View style={quickLinkStyle}>
            <Text style={categoryContentTextStyle}>Quick Links</Text>
            <FlatList
              data={quickLinks}
              renderItem={this.renderQuickLinks}
              numColumns={2}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={categoryStyle}>
            <Text style={categoryContentTextStyle}>Running Campaigns</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={news}
              renderItem={this.renderNews}
              keyExtractor={item => item.id}
            />
          </View>
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
