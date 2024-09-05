import React from "react";
import { COLORS, SIZES } from "@constants/index";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../index";
import { TextWeights } from "@config";

const CustomButton = ({
  style,
  onPress,
  buttonText,
  textStyle,
  isDisabled,
  color,
  size,
  weight
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}
      disabled={isDisabled}
    >
      <Text
        text={buttonText}
        style={textStyle}
        weight={weight || TextWeights.semibold}
        size={size || SIZES.h14}
        color={color}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: SIZES.padding * 2.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: SIZES.padding2,
  },
});

export default CustomButton;
