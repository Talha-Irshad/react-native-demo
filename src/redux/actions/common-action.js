import apiServices from "../../api_services/request-handler"
import { setCommonLoading } from "../slices/common-slice"

export const uploadImage = (data, onDone) => {
    return async (dispatch) => {
        try {
            dispatch(setCommonLoading(true))
            const response = await apiServices.uploadImage(data)
            if (!response?.data?.error || response?.data?.path) {

                onDone && onDone(response?.data?.path)
                dispatch(setCommonLoading(false))
            } else {
                dispatch(setCommonLoading(false))
                 //showToast(response?.data?.message, 'error')
            }
        } catch (error) {
             //showToast(error?.data?.error || error?.data?.message, 'error')
            dispatch(setCommonLoading(false))
        }
    }
}