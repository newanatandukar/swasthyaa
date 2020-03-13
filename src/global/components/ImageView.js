import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Styles, Images } from '../constants';

const ImageView = props => {
  const { viewStyle, imageStyle } = props;
  return (
    <View style={viewStyle}>
      <Image source={Images.DUMMY_IMAGE} resizeMode="cover" style={imageStyle} />
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
  viewStyle: [s.m16, s.radius16, s.overflowHidden, s.relative, s.maxWidthFull, s.maxHeightHalf],
  imageStyle: [s.radius16, s.flex1],
};

export default ImageView;
