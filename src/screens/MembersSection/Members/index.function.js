import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteMember, getMembers } from "../../../redux/actions/member-action"
import { setPreviousScreen } from "../../../redux/slices/common-slice"
import { navigate } from "../../../navigation/service"

export default () => {
    const dispatch = useDispatch()
    const { members, edit_member_loading } = useSelector(state => state.member)

    const [showModal, setShowModal] = useState(false)
    const [selectedMember, setSelectedMember] = useState(null)

    useFocusEffect(useCallback(() => {
        dispatch(getMembers())
    }, []))

    const onPressDeleteMember = () => {
        dispatch(deleteMember(selectedMember?.user?._id, members))
    }

    const onEditMember = (data) => {
        dispatch(setPreviousScreen("Members"))
        navigate("AddMember", { data })
    }

    return {
        members,
        dispatch,
        showModal,
        setShowModal,
        selectedMember,
        setSelectedMember,
        edit_member_loading,
        onPressDeleteMember,
        onEditMember
    }
}