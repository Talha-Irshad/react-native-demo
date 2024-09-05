import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@constants/theme";
import { TextWeights } from "@config";

export const styles = StyleSheet.create({
  main_view: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary
  },
  back_icon_view: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -SIZES.padding2
  },
  image_view: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    marginTop: SIZES.padding2 * 0.2,
    fontFamily: TextWeights.medium,
    fontSize: SIZES.h18
  },
  right_icon_view: {
    height: SIZES.padding * 2,
    width: SIZES.padding * 2,
    justifyContent: "center",
    alignItems: "flex-end",
  }

});
