import React from "react";
import { TextInput, View } from "react-native";
import { COLORS } from "@constants";
import { styles } from "./index.styles";

const InputField = ({
    style,
    placeholder,
    onChangeText,
    value,
    onSubmitEditing,
}) => {

    return (
        <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[styles.input, style]}
            placeholderTextColor={COLORS.placeholder_color}
            value={value}
            onSubmitEditing={onSubmitEditing}
            underlineColorAndroid="transparent"
        />

    );
};

export default InputField;
