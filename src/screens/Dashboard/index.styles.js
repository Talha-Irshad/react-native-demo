import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
    },
    top_view: {
        backgroundColor: COLORS.background_grey2,
        padding: SIZES.padding2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text_view: {
        flex: 1,
        alignItems: "flex-start",
        marginLeft: SIZES.padding2
    },
    top_right_view: {
        alignItems: "flex-end"
    },
    list: {
        paddingHorizontal: SIZES.padding,
        justifyContent: "space-between"
    }
})