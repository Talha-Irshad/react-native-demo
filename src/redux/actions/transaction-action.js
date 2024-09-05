import apiServices from '../../api_services/request-handler';
import { flashErrorMessage, flashSuccessMessage } from '../../utils/functions';
import { setTopupLoading, setTransactionLoading, setTransactions } from '../slices/transaction-slice';
import { getUserDetail } from './auth-action';
import { getMembers } from './member-action';

export const getTransactions = id => {
    return async dispatch => {
        try {
            dispatch(setTransactionLoading(true));
            const response = await apiServices.getTransactions(id);
            dispatch(setTransactionLoading(false));
            if (response?.data?.status === 'success') {
                dispatch(setTransactions(response?.data?.data))
            } else {
                flashErrorMessage(response?.data?.message)
            }
        } catch (error) {
            flashErrorMessage(error?.data?.message)
            dispatch(setTransactionLoading(false));
        }
    };
};
export const transferFunds = (data, name, user_id, onDone) => {
    return async dispatch => {
        try {
            dispatch(setTransactionLoading(true));
            const response = await apiServices.transferFunds(data);
            dispatch(setTransactionLoading(false));
            if (response?.data?.status === 'success') {
                dispatch(getUserDetail(user_id))
                dispatch(getMembers())
                onDone()
                flashSuccessMessage(`R${data?.amount} has been successfullytransfered to ${name}`)
            } else {
                flashErrorMessage(response?.data?.message)
            }
        } catch (error) {
            flashErrorMessage(error?.data?.message)
            dispatch(setTransactionLoading(false));
        }
    };
};
export const topupWallet = (data, onDone) => {
    return async dispatch => {
        try {
            dispatch(setTopupLoading(true));
            const response = await apiServices.topupWallet(data);
            dispatch(setTopupLoading(false));
            if (response?.data?.status === 'success') {
                onDone()
                flashSuccessMessage(`R${data?.amount} has been addedd to your wallet`)
            } else {
                flashErrorMessage(response?.data?.message)
            }
        } catch (error) {
            flashErrorMessage(error?.data?.message)
            dispatch(setTopupLoading(false));
        }
    };
};
