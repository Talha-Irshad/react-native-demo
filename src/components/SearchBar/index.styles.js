import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";
import { TextWeights } from "@config";

export const styles = StyleSheet.create({
    input: {
        height: SIZES.padding * 2.5,
        paddingHorizontal: SIZES.padding2,
        borderRadius: SIZES.padding2,
        borderWidth: 1,
        fontSize:SIZES.h15,
        color:COLORS.white,
        fontFamily:TextWeights.light,
        borderColor: COLORS.border_color,
        backgroundColor: COLORS.searchbar_background_color
    },
});
