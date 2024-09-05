import { useDispatch, useSelector } from "react-redux"
import { setPreviousScreen } from "@redux/slices/common-slice"
import { goBack } from "@navigation/service"
import { useEffect, useState } from "react"
import { BackHandler } from "react-native"
import { flashErrorMessage } from "../../../utils/functions"
import { topupWallet, transferFunds } from "../../../redux/actions/transaction-action"
import { getUserDetail } from "../../../redux/actions/auth-action"

export default ({ data }) => {
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const { transaction_loading, topup_loading } = useSelector(state => state.transaction)

    const [amount, setAmount] = useState(0)

    const onPressBack = () => {
        dispatch(setPreviousScreen("Dashboard"))
        goBack()
    }

    useEffect(() => {
        const backAction = () => {
            onPressBack()
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );
        return () => backHandler.remove();
    }, []);

    const onPressAdd = () => {

        if (amount > 0) {
            if (data) {
                if (user?.wallet?.amount > 0 || Number(amount) < user?.wallet?.amount) {
                    const apiData = {
                        targetUserId: data?.user?._id,
                        amount
                    }
                    dispatch(transferFunds(apiData, data?.user?.user_name, user?._id, () => {
                        setAmount(null)
                        goBack()
                    }))

                } else {
                    flashErrorMessage("You don't have enough amount to send ")
                }
            } else {
                const apiData = {
                    amount
                }
                dispatch(topupWallet(apiData, () => {
                    setAmount(null)
                    dispatch(getUserDetail(user?._id))
                }))
            }

        } else {
            flashErrorMessage("Please enter amount")
        }

    }

    return {
        onPressBack,
        user,
        dispatch,
        onPressAdd,
        amount,
        setAmount,
        transaction_loading,
        topup_loading
    }
}