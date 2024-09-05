import React from "react";
import { TextInput } from "react-native";
import { COLORS } from "@constants";
import { styles } from "./index.styles";

const MultiInputField = ({
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
    returnKeyType,
    restProps
}) => {


    return (

        <TextInput
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            placeholder={placeholder}
            secureTextEntry={secureText}
            multiline={true}
            numberOfLines={8}
            style={[styles.input, style]}
            placeholderTextColor={COLORS.text_grey_color}
            defaultValue={defaultValue}
            value={value}
            maxLength={maxLength}
            editable={isEdit}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            underlineColorAndroid="transparent"
            {...restProps}
        />

    );
};

export default MultiInputField;
