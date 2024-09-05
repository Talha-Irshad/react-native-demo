import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        backgroundColor: COLORS.modal_background_color,
        paddingHorizontal: SIZES.padding * 3,
        justifyContent: "center"
    },
    sub_view: {
        backgroundColor: COLORS.searchbar_background_color,
        borderRadius: SIZES.padding2,
    },
    btn_row: {
        flexDirection: "row",
        alignItems: "center",
        
    },
    btn: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        height: SIZES.padding * 2,
    },
})