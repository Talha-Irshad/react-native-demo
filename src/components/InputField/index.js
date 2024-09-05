import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { COLORS } from "@constants";
import { Icons } from "../index";
import { styles } from "./index.style";

const InputField = ({
  style,
  placeholder,
  onChangeText,
  secureText,
  keyboardType,
  defaultValue,
  isEdit,
  value,
  maxLength,
  onSubmitEditing,
  restProps,
  returnKeyType,
  inputStyle,
  icon,
  numberOfLines,
  placeholderTextColor,
  isPassword
}) => {

  const [showPassword, setShwoPassword] = useState(true)


  return (
    <View style={[styles.main_view, style]} >
      <TextInput
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={isPassword ? showPassword : secureText}
        numberOfLines={numberOfLines}
        style={[styles.input, inputStyle]}
        placeholderTextColor={placeholderTextColor || COLORS.placeholder_color}
        defaultValue={defaultValue}
        value={value}
        maxLength={maxLength}
        editable={isEdit}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid="transparent"
        {...restProps}
      />
      {
        icon &&
        <TouchableOpacity
          activeOpacity={0.6}
          disabled={!isPassword}
          onPress={() => setShwoPassword(!showPassword)}
        >
          <Icons name={icon} />
        </TouchableOpacity>
      }
    </View>
  );
};

export default InputField;
