import { useDispatch, useSelector } from "react-redux"
import { addMember, editMember } from "../../../redux/actions/member-action"

export default ({ data }) => {
    const dispatch = useDispatch()

    const { member_loading } = useSelector(state => state.member)

    const onAddMember = async (values) => {
        if (data) {
            const apiData = {
                relationship: values?.alias,
                user: {
                    user_name: values?.name,
                    surname: values?.surname,
                    phone_number: values?.phone,
                    gender: values?.gender,
                }
            }
            dispatch(editMember(data?.user?._id, apiData))
        } else {
            const apiData = {
                user_name: values?.name,
                surname: values?.surname,
                relationship: values?.alias,
                email: values?.email?.trim()?.toLowerCase(),
                password: values?.password,
                phone_number: values?.phone,
                gender: values?.gender,
            }
            dispatch(addMember(apiData))
        }
    }

    return {
        member_loading,
        onAddMember,
        dispatch,
    }
}