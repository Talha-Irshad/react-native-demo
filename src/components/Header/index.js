import { TouchableOpacity, View, Image } from "react-native";
import { Icons, Text } from "../index";
import { styles } from "./index.style";
import { back_icon, notification_icon, support_icon } from "@assets/icons";
import { goBack, navigate } from "@navigation/service";
import { SIZES } from "@constants/theme";
import { images } from "@constants";
import { useSelector } from "react-redux";
import { TextWeights } from "@config";

const Header = ({
  title,
  textStyle,
  style,
  leftIcon,
  back = true,
  onPressBack,
  rightIcon = notification_icon,
  onPressRightIcon = () => navigate("Notifications"),
  iconStyle,
  icon = support_icon,
  sub_title
}) => {
  const { previous_screen } = useSelector(state => state.common)

  return (
    <View style={[styles.main_view, style]}  >
      {
        back ?
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.back_icon_view, iconStyle]} onPress={onPressBack ? () => onPressBack() : () => goBack()} >
            <Icons name={leftIcon || back_icon} />
            <Text
              weight={TextWeights.light}
              size={SIZES.h10}
              ml={SIZES.padding2 / 2}

              text={previous_screen || ""} />
          </TouchableOpacity>
          :
          <View style={styles.right_icon_view} />
      }
      {
        <View style={[styles.image_view, { marginLeft: previous_screen && back ? -SIZES.padding * 1.5 : 0 }]} >
          <Icons name={icon} />
          <Text align={"center"} style={[styles.title, textStyle]} text={title} />
          {
            sub_title &&
            <Text
              size={SIZES.h10}
              weight={TextWeights.light}
              text={sub_title} />

          }
        </View>

      }
      {
        rightIcon ?
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.right_icon_view, iconStyle]} onPress={onPressRightIcon} >
            <Icons name={rightIcon} />
          </TouchableOpacity>
          :
          <View style={{ width: SIZES.padding * 2.5 }} />
      }
    </View>
  );
};
export default Header;
