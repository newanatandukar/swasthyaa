import React from 'react';
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
const ImageView = props => {
  const { viewStyle, imageStyle } = props;
  return (
    <View style={viewStyle}>
      <SliderBox images={images} />
    </View>
  );
};

const s = StyleSheet.create({
  ...Styles,
});

ImageView.propTypes = {
  viewStyle: PropTypes.any,
  imageStyle: PropTypes.any,
};

ImageView.defaultProps = {
  viewStyle: [s.m16, s.radius16, s.overflowHidden, s.relative, s.maxWidthFull],
  imageStyle: [s.radius16, s.flex1],
};

export default ImageView;
