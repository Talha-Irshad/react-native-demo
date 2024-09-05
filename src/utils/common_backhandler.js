import { useEffect } from "react";
import { BackHandler } from "react-native";

export default ({ onPressBack }) => {
    useEffect(() => {
        const backAction = () => {
            onPressBack()
            return true;    
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );
        return () => backHandler.remove();
    }, []);


    const obj = { obj: "HJeleloooo" }
    return {
        obj
    }
}