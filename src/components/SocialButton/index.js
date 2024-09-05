import React from "react";
import { COLORS, SIZES } from "@constants/index";
import { TouchableOpacity, View } from "react-native";
import { Icons, Text } from "../index";
import { TextWeights } from "@config";
import { styles } from "./index.styles";

const SocialButton = ({
    onPress,
    icon,
    title
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={styles.main_view}
        >
            <View style={styles.icon_view} >
                <Icons name={icon} />
            </View>
            <Text
                style={{ flex: 1, }}
                text={title}
                weight={TextWeights.semibold}
                size={SIZES.h13}
                align={"center"}
                ml={-SIZES.padding}
                color={COLORS.black}
            />

        </TouchableOpacity>
    );
};



export default SocialButton;
