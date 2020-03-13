import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import PropTypes from 'prop-types';

import { Styles, Images } from '../constants';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
];

class ImageView extends Component {
  onImagePress = index => {
    switch (index) {
      case 0:
        alert('Image 1 pressed');
        break;

      case 1:
        console.warn('Image 2 pressed');
        break;

      case 2:
        alert('Image 3 pressed');
        break;

      case 3:
        console.warn('Image 4 pressed');
        break;
    }
  };

  render() {
    const viewStyle = [s.m16, s.radius16, s.overflowHidden, s.relative, s.maxWidthFull];
    const imageStyle = [s.radius16, s.flex1];
    return (
      <View style={viewStyle}>
        <SliderBox images={images} onCurrentImagePressed={this.onImagePress} />
      </View>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

ImageView.propTypes = {
  viewStyle: PropTypes.any,
  imageStyle: PropTypes.any,
};

ImageView.defaultProps = {};

export default ImageView;
