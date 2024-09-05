import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
    },
    add_member_btn: {
        height: SIZES.padding * 3,
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.padding2 / 2,
        backgroundColor: COLORS.searchbar_background_color,
        borderRadius: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding,
        bottom: SIZES.padding,
        zIndex: 10,
        alignSelf: "center"
    }
})