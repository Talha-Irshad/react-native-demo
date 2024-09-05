import React from "react";
import { Text } from "react-native";
import { COLORS, SIZES } from "@constants";
import { TextWeights } from "@config";

const CustomText = ({ style, text, onPress, numberOfLines, onLayout, size, align, weight, color, mt, ml, mr, mb }) => {

  const textstyle = {
    fontSize: size || SIZES.h13,
    fontFamily: weight || TextWeights.medium,
    color: color || COLORS.white,
    textAlign: align || "left",
    marginTop: mt || 0,
    marginLeft: ml || 0,
    marginRight: mr || 0,
    marginBottom: mb || 0
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[textstyle, style]}
      onLayout={onLayout}
      onPress={onPress}
    >
      {text}
    </Text>
  );
};

export default CustomText;
