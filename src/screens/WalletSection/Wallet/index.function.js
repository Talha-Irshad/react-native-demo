import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMembers } from "../../../redux/actions/member-action"
import { useFocusEffect } from "@react-navigation/native"
import { transferFunds } from "../../../redux/actions/transaction-action"
import { flashErrorMessage } from "../../../utils/functions"
import { getUserDetail } from "../../../redux/actions/auth-action"

export default () => {
    const dispatch = useDispatch()

    const { members } = useSelector(state => state.member)
    const { user } = useSelector(state => state.auth)
    const { transaction_loading } = useSelector(state => state.transaction)

    const [searchText, setSearchText] = useState(null)
    const [amount, setAmount] = useState(0)
    const [selectedMember, setSelectedMember] = useState(null)
    const [refreshing, setRefreshing] = useState(false)


    useFocusEffect(useCallback(() => {
        dispatch(getMembers())
        dispatch(getUserDetail(user?._id))
    }, []))

    const onRefresh = async () => {
        setRefreshing(true)
        await dispatch(getMembers())
        await  dispatch(getUserDetail(user?._id))
        setRefreshing(false)
    }


    const onPressTransfer = () => {

        if (amount < 1) {
            flashErrorMessage("Please enter amount")

        } else if (!selectedMember) {
            flashErrorMessage("Please select member")
        } else {
            if (user?.wallet?.amount > 0 || Number(amount) < user?.wallet?.amount) {
                const apiData = {
                    targetUserId: selectedMember?.user?._id,
                    amount
                }
                dispatch(transferFunds(apiData, selectedMember?.user?.user_name, user?._id, () => {
                    setAmount(null)
                    setSelectedMember(null)
                }))

            } else {
                flashErrorMessage("You don't have enough amount to send ")
            }
        }

    }


    return {
        dispatch,
        members,
        searchText,
        setSearchText,
        user,
        transaction_loading,
        onPressTransfer,
        amount,
        setAmount,
        selectedMember,
        setSelectedMember,
        onRefresh,
        refreshing
    }

}