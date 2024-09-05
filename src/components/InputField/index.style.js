import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants/index";
import { TextWeights } from "@config";

export const styles = StyleSheet.create({
    main_view: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.padding2,
        height: SIZES.padding * 3,
    },
    input: {
        flex: 1,
        fontFamily: TextWeights.medium,
        fontSize: SIZES.h13,
        color: COLORS.black,
        letterSpacing: 0.8,
        marginRight: SIZES.padding2
    },

});
