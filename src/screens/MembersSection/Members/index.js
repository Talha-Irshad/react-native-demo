import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Container, Header, Icons, SearchBar, SizedBox, Text } from '@components'
import { styles } from './index.styles'
import { add_icon, delete_icon, edit_icon } from '@assets/icons'
import { navigate } from '@navigation/service'
import { setPreviousScreen } from '@redux/slices/common-slice'
import Swipeable from 'react-native-swipeable';
import { SingleMemberView } from '../../WalletSection/Wallet/components'
import MembersFunctional from "./index.function"
import { DeleteConfirmationModal, ListEmptyText, LoaderModal } from '../../../components'

const Members = () => {

    const {
        dispatch,
        members,
        edit_member_loading,
        onPressDeleteMember,
        selectedMember,
        setSelectedMember,
        setShowModal,
        showModal,
        onEditMember
    } = MembersFunctional()

    return (
        <Container>
            <Header title={"Members"} />
            <View style={styles.main_view} >
                <SearchBar
                    placeholder={"Search User"}
                />

                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<SizedBox />}
                    ListEmptyComponent={<ListEmptyText text={"No Member Found"} />}
                    data={members}
                    renderItem={({ item, index }) => (
                        <Swipeable
                            rightButtonWidth={120}
                            useNativeAnimations
                            style={styles.list_swipe_view}
                            rightButtons={[
                                <View style={styles.right_btns} >
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        style={styles.right_icon_view}
                                        onPress={() => {
                                            setSelectedMember(item)
                                            setShowModal(true)
                                        }}
                                    >
                                        <Icons name={delete_icon} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => onEditMember(item)}
                                        activeOpacity={0.6} style={styles.right_icon_view}  >
                                        <Icons name={edit_icon} />
                                    </TouchableOpacity>
                                </View>
                            ]}
                        >
                            <SingleMemberView
                                memberId={item?.member_id}
                                name={item?.user?.user_name}
                                relation={item?.relationship}
                                onPress={() => {
                                    dispatch(setPreviousScreen("Members"))
                                    navigate("MemberDetail")
                                }}
                            />
                        </Swipeable>
                    )}
                />

                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                        dispatch(setPreviousScreen("Members"))
                        navigate("AddMember" , {data:null})
                    }}
                    style={styles.add_member_btn} >
                    <Icons name={add_icon} />
                    <Text text={"Add a new member"} />
                </TouchableOpacity>
            </View>

            <DeleteConfirmationModal
                onPressClose={() => setShowModal(false)}
                onPressYes={() => {
                    setShowModal(false)
                    onPressDeleteMember()
                }}
                text={`Are you sure you would like to delete ${selectedMember?.user?.user_name}?`}
                visible={showModal}
            />

            <LoaderModal visible={edit_member_loading} />


        </Container>
    )
}

export default Members