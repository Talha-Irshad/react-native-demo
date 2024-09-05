import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
import { RFValue } from 'react-native-responsive-fontsize';

export const isIOS = Platform.OS === 'ios';

export const COLORS = {
  primary: '#D37826',
  orange_border_color: '#FFB26760',
  text_orange_color: "#CF803C",
  text_red_color: "#f00707",
  text_light_blue_color: "#9CA3AF",
  text_grey_color: "#C2C2C2",
  placeholder_color: "#666666",
  dropdown_background_color: "#E5E7EB",
  searchbar_background_color: "#414141",
  blue_border_color: "#4B5563",
  background_black: "#313131",
  background_grey: "#555353",
  background_grey2: "#444444",
  background_grey3: "#747474",
  background_color: "#282728",
  modal_background_color: "#00000020",
  white: "#fff",
  black: "#000",
  transparent: "transparent",
};


export const SIZES = {
  // global sizes
  padding: 20,
  padding2: 12,

  // font sizes
  h8: RFValue(8),
  h9: RFValue(9),
  h10: RFValue(10),
  h11: RFValue(11),
  h12: RFValue(12),
  h13: RFValue(13),
  h15: RFValue(15),
  h16: RFValue(16),
  h18: RFValue(18),
  h20: RFValue(20),
  h22: RFValue(22),

  // app dimensions
  width,
  height,
};


const appTheme = { COLORS, SIZES };

export default appTheme;
