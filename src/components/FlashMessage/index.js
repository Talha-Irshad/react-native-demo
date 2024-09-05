import { showMessage } from "react-native-flash-message";
import { COLORS, isIOS, SIZES } from "../../constants/theme";
import { TextWeights } from "../../config";


const FlashMessageFun = (props) => {
    return (
        showMessage({
            message: "",
            type: "info",
            duration: 3000,
            style: { paddingTop: isIOS ? 0 : 2 },
            titleStyle: { fontSize: SIZES.h12, color: COLORS.white, fontFamily: TextWeights.bold },
            hideStatusBar: false,
            ...props
        })
    )
}

export default FlashMessageFun