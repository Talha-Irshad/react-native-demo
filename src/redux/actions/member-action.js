import apiServices from '../../api_services/request-handler';
import { flashErrorMessage } from '../../utils/functions';
import { setEditMemberLoading, setMemberLoading, setMembers } from '../slices/member-slice';
import { goBack } from '../../navigation/service';
import { setPreviousScreen } from '../slices/common-slice';

export const getMembers = () => {
    return async dispatch => {
        try {
            const response = await apiServices.getMembers();
            if (response?.data?.success) {
                dispatch(setMembers(response?.data?.data))
            } else {
                flashErrorMessage(response?.data?.message)
            }
        } catch (error) {
            flashErrorMessage(error?.data?.message)
        }
    };
};
export const addMember = data => {
    return async dispatch => {
        try {
            dispatch(setMemberLoading(true));
            const response = await apiServices.addMember(data);
            dispatch(setMemberLoading(false));
            if (response?.data?.status === 'success') {
                dispatch(getMembers())
                dispatch(setPreviousScreen("Dashboard"))
                goBack()
            } else {
                flashErrorMessage(response?.data?.message)
            }
        } catch (error) {
            flashErrorMessage(error?.data?.message)
            dispatch(setMemberLoading(false));
        }
    };
};
export const editMember = (id, data) => {
    return async dispatch => {
        try {
            dispatch(setMemberLoading(true));
            const response = await apiServices.editMember(id, data);
            dispatch(setMemberLoading(false));
            if (response?.data?.status === 'success') {
                dispatch(getMembers())
                dispatch(setPreviousScreen("Dashboard"))
                goBack()
            } else {
                flashErrorMessage(response?.data?.message)
            }
        } catch (error) {
            flashErrorMessage(error?.data?.message)
            dispatch(setMemberLoading(false));
        }
    };
};
export const deleteMember = (id, membersarray) => {
    return async dispatch => {
        try {
            dispatch(setEditMemberLoading(true));
            const response = await apiServices.deleteMember(id);
            dispatch(setEditMemberLoading(false));
            if (response?.data?.status === 'success') {
                let array = [...membersarray]
                dispatch(setMembers(array?.filter(item => item?._id !== id)))
            } else {
                flashErrorMessage(response?.data?.message)
            }
        } catch (error) {
            flashErrorMessage(error?.data?.message)
            dispatch(setEditMemberLoading(false));
        }
    };
};
