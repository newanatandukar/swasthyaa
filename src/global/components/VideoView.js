import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import PropTypes from 'prop-types';

import { Styles } from '../constants';

const VideoView = props => {
  const { viewStyle, videoLink } = props;

  return (
    <View style={viewStyle}>
      <Video
        source={{ uri: videoLink }}
        rate={1.0}
        volume={1.0}
        isMuted={!false}
        resizeMode="contain"
        shouldPlay={false}
        isLooping
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
};

const s = StyleSheet.create({
  ...Styles,
});

VideoView.propTypes = {
  viewStyle: PropTypes.any,
  textStyle: PropTypes.any,
  videoLink: PropTypes.string,
};

VideoView.defaultProps = {
  viewStyle: [s.bgDark, s.border1, s.borderBlack, s.mx16, s.p12, s.justifyCenter, s.flex1],
  textStyle: [s.colorBlack, s.font14, s.ml8],
  videoLink: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
};

export default VideoView;
