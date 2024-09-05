import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.padding
    },
    sub_view: {
        backgroundColor: COLORS.background_grey2,
        borderRadius: SIZES.padding,
        padding: SIZES.padding,
        marginTop: SIZES.padding
    },
    input: {
        marginTop: SIZES.padding2,
        backgroundColor: COLORS.background_grey3,
        height: SIZES.padding * 2.5,
        color: COLORS.white
    },
    btn: {
        marginTop: SIZES.padding * 2,
        width: "40%",
        alignSelf: "center"
    }

})