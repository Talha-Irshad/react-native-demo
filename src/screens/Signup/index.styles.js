import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants/index";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        paddingTop: SIZES.padding,
        paddingHorizontal: SIZES.padding
    },
    login_btn: {
        width: "50%",
        alignSelf: "center"
    },
    btn: {
        height: SIZES.padding * 3,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.padding2 * 0.8,
        alignSelf: "center"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: SIZES.padding,
        marginVertical: SIZES.padding * 1.5
    },
    line: {
        height: SIZES.padding2 * 0.2,
        width: "45%",
        backgroundColor: COLORS.primary
    },
    bottom_view: {
        borderWidth: 1,
        borderColor: COLORS.orange_border_color,
        height: SIZES.padding * 2.5,
        width: SIZES.padding * 2.5,
        borderRadius: SIZES.padding * 2,
        justifyContent: "center",
        alignItems: "center",
    },
    bottom_inner_view: {
        height: SIZES.padding * 2,
        width: SIZES.padding * 2,
        borderRadius: SIZES.padding,
        backgroundColor: COLORS.background_grey
    }


})