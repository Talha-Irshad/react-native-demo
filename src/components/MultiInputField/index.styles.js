import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants/index";
import { TextWeights } from "@config";

export const styles = StyleSheet.create({
    input: {
        backgroundColor: COLORS.white,
        color: COLORS.text_black_color,
        letterSpacing: 0.8,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.padding2 * 0.8,
        height: SIZES.padding * 8,
        shadowColor: COLORS.shadow_color,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        textAlignVertical: "top",
        paddingTop: SIZES.padding,
        fontSize: SIZES.h13,
        fontFamily: TextWeights.medium
    },

});
