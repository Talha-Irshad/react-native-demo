import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.padding
    },
    topup_view: {
        marginTop: SIZES.padding,
        borderWidth: 1,
        borderColor: COLORS.primary,
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: SIZES.padding,
        alignSelf: "center",
        width: "75%",
        borderRadius: SIZES.padding2 * 1.5
    },
    topup_now_btn: {
        backgroundColor: COLORS.primary,
        height: SIZES.padding * 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: SIZES.padding,
        alignItems: 'center',
        marginTop: SIZES.padding2,
        width: "34%",
        paddingHorizontal: SIZES.padding2
    },
    seperator: {
        height: 1,
        backgroundColor: COLORS.primary
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: SIZES.padding2
    },
    transfer_input: {
        width: "48%",
    },
    transfer_btn: {
        width: "48%",
        height:SIZES.padding * 3
    }
})