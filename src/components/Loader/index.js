import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from '@constants';

const Loader = ({ style, color, size }) => {
  return (
    <ActivityIndicator
      size={size ? size : 'large'}
      color={color || COLORS.primary}
      style={[{ marginTop: SIZES.padding2 }, style]}
    />
  );
};

export default Loader;

