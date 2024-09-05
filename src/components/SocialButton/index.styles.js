import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";

export const styles = StyleSheet.create({
    main_view: {
        backgroundColor: COLORS.white,
        height: SIZES.padding * 3,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderRadius: SIZES.padding2,
        paddingHorizontal: SIZES.padding
    },
    icon_view: {
        height: SIZES.padding * 2.5,
        width: SIZES.padding * 2,
        justifyContent:"center"
    }
});
