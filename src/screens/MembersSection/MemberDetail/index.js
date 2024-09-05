import { View } from 'react-native'
import React from 'react'
import { Container, Header } from '@components'
import { styles } from './index.styles'
import { SingleDetailRow } from './component'
import { useDispatch } from 'react-redux'
import { setPreviousScreen } from '@redux/slices/common-slice'
import { navigate } from '@navigation/service'

const MemberDetail = () => {
    const dispatch = useDispatch()

    const onPressDetail = (route) => {
        dispatch(setPreviousScreen("Members"))
        navigate(route)
    }

    return (
        <Container>
            <Header title={"Dad"}
                sub_title={"Peter Anniston"}
            />
            <View style={styles.main_view} >

                <SingleDetailRow
                    title={"Contact Information"}
                />
                <SingleDetailRow
                    title={"Family Contacts"}
                />
                <SingleDetailRow
                    title={"Plugin Settings"}
                    onPress={() => onPressDetail("MemberPluginSetting")}

                />
                <SingleDetailRow
                    title={"AI Settings"}
                    onPress={() => onPressDetail("MemberAISetting")}
                />
            </View>
        </Container>
    )
}

export default MemberDetail