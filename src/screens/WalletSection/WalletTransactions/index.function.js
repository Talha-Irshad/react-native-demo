import { useFocusEffect } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { getTransactions } from "../../../redux/actions/transaction-action"
import { useCallback, useState } from "react"

export default ({ data }) => {
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const { transactions } = useSelector(state => state.transaction)

    const [searchText, setSearchText] = useState(null)

    useFocusEffect(
        useCallback(() => {
            dispatch(getTransactions(data?.user?._id))
        }, []))


    const getTotalWallet = () => {
        if (transactions?.length > 0) {
            return transactions?.reduce((a, b) => a + b?.amount, 0)
        }
        return 0
    }


    return {
        transactions,
        dispatch,
        user,
        searchText,
        setSearchText,
        getTotalWallet
    }

}