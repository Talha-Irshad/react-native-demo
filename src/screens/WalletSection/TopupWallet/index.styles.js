import { Dimensions, StyleSheet } from "react-native";
import { SIZES } from "@constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.padding
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding2,
        gap: SIZES.padding
    },
    transfer_input: {
        width: Dimensions.get("screen").width / 2.3,
    },
    transfer_btn: {
        width: "30%",
        height: SIZES.padding * 3
    }
})