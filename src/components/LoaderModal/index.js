import { View, ActivityIndicator, Modal } from "react-native";
import React from "react";
import { styles } from "./index.style";
import { COLORS } from "@constants";

const LoaderModal = ({ visible, color }) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.main_view}>
        <ActivityIndicator size={"large"} color={color || COLORS.orange_border_color} />
      </View>
    </Modal>
  );
};

export default LoaderModal;
