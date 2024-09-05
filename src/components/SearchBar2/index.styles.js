import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";
import { TextWeights } from "@config";

export const styles = StyleSheet.create({
    main_view: {
        height: SIZES.padding * 2.3,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.padding,
        borderWidth: 1,
        gap: SIZES.padding2,
        borderColor: COLORS.blue_border_color,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1,
        fontSize: SIZES.h10,
        fontFamily: TextWeights.medium,
        color: COLORS.white
    },
});
