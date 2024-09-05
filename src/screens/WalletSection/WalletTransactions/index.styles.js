import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.padding
    },
    top_btn: {
        width: "40%",
    },
    table_header: {
        height: SIZES.padding * 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: COLORS.background_grey2,
        paddingHorizontal: SIZES.padding2,
        marginTop: SIZES.padding
    },
    date_view: {
        width: "22%",
    },
    description_view: {
        width: "44%"
    },
    amount_view: {
        width: "28%"
    }
})