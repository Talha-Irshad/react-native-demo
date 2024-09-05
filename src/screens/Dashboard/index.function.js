import { useDispatch, useSelector } from "react-redux"

export default () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    return {
        dispatch,
        user
    }
}