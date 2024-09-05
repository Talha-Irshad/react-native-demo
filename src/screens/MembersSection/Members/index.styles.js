import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.padding
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
    },
    right_btns: {
        width: SIZES.padding * 5,
        marginLeft: SIZES.padding2,
        flexDirection: "row",
        alignItems: "center",
        height: SIZES.padding * 5,
        justifyContent: "center"
    },
    right_icon_view: {
        height: 40,
        width: 50
    },
    list_swipe_view:{
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.orange_border_color,
        paddingBottom: SIZES.padding2
    }
})