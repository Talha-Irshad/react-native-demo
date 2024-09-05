import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";

export const styles = StyleSheet.create({
    main_view: {
        height: SIZES.padding * 3,
        justifyContent: "center",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.padding2 * 0.8,
        padding: SIZES.padding2
    },
    open_main_view: {
        borderRadius: 0,
        borderTopLeftRadius: SIZES.padding2 * 0.8,
        borderTopRightRadius: SIZES.padding2 * 0.8,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border_color,
        height: SIZES.padding * 3,
        padding: SIZES.padding2,
        justifyContent: "center",
        backgroundColor: COLORS.white,
    },
    text_view: {
        height: SIZES.padding * 3,
        justifyContent: "center",
        alignItems: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border_color,
        backgroundColor: COLORS.white
    },
    icon_view: {
        height: SIZES.padding * 2,
        width: SIZES.padding * 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.padding2 * 0.5,
        backgroundColor: COLORS.inactive_dot_color
    }

})