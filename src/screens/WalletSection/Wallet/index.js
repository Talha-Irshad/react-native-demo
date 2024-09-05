import { FlatList, RefreshControl, ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Container, DropDown, Header, Icons, InputField, SizedBox, Text } from '@components'
import { styles } from './index.styles'
import { TextWeights } from '@config'
import { COLORS, SIZES } from '@constants'
import { white_forward_arrow_icon } from '@assets/icons'
import { SingleMemberView } from './components'
import { setPreviousScreen } from '@redux/slices/common-slice'
import { navigate } from '@navigation/service'
import WalletFunctional from "./index.function"
import { LoaderModal, SearchBar } from '../../../components'
import { searchArray } from '../../../utils/functions'

const Wallet = () => {


    const {
        dispatch,
        members,
        searchText,
        setSearchText,
        user,
        amount,
        onPressTransfer,
        setAmount,
        transaction_loading,
        selectedMember,
        setSelectedMember,
        onRefresh,
        refreshing
    } = WalletFunctional()

    return (
        <Container>
            <Header title={"Your Wallet"} />
            <View style={styles.main_view} >
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    showsVerticalScrollIndicator={false} >


                    <Text
                        weight={TextWeights.medium}
                        size={SIZES.h16}
                        text={"Your Wallet"} />

                    <View style={styles.topup_view} >
                        <Text
                            text={`R${user?.wallet?.amount || 0}`}
                            size={SIZES.h22}
                            weight={TextWeights.bold}
                        />
                        <Text
                            color={COLORS.text_light_blue_color}
                            text={"Available Balance"}
                            weight={TextWeights.thin}
                        />
                    </View>

                    <Text
                        weight={TextWeights.bold}
                        size={SIZES.h18}
                        text={"Add Funds"}
                        mt={SIZES.padding}
                    />
                    <Text
                        weight={TextWeights.regular}
                        size={SIZES.h12}
                        color={COLORS.text_light_blue_color}
                        text={"Top up your wallet with ease"}
                        mt={SIZES.padding2 * 0.3}
                    />

                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                            dispatch(setPreviousScreen("Your Wallet"))
                            navigate("TopupWallet", { data: null })
                        }}
                        style={styles.topup_now_btn} >
                        <Text
                            weight={TextWeights.medium}
                            size={SIZES.h10}
                            text={"Top-Up Now"}
                        />
                        <Icons name={white_forward_arrow_icon} />
                    </TouchableOpacity>

                    <SizedBox />
                    <SizedBox />
                    <SizedBox />
                    <View style={styles.seperator} />

                    <Text
                        weight={TextWeights.medium}
                        size={SIZES.h20}
                        text={"Transfer Funds"}
                        mt={SIZES.padding2}
                    />
                    <SizedBox />
                    <SizedBox />

                    <Text text={"Transfer to"} />

                    <SizedBox height={SIZES.padding2} />
                    <DropDown
                        isMember
                        array={members}
                        placeholder={"Select Member"}
                        value={selectedMember?.user?.user_name}
                        onPressValue={val => setSelectedMember(val)}
                    />
                    <SizedBox />
                    <SizedBox height={SIZES.padding2} />

                    <Text text={"Transfer Amount"} />

                    <View style={styles.row} >
                        <InputField
                            value={amount}
                            keyboardType={"number-pad"}
                            onChangeText={text => setAmount(text)}
                            placeholder={"R400.00"}
                            style={styles.transfer_input}
                        />

                        <Button
                            onPress={onPressTransfer}
                            buttonText={"Transfer"}
                            style={styles.transfer_btn}
                        />
                    </View>


                    <SizedBox />
                    <SizedBox />
                    <SizedBox />
                    <View style={styles.seperator} />


                    <Text
                        weight={TextWeights.medium}
                        size={SIZES.h20}
                        text={"Members Wallet Info"}
                        mt={SIZES.padding2}
                    />

                    <SizedBox />


                    <SearchBar
                        value={searchText}
                        onChangeText={text => setSearchText(text)}
                        placeholder={"Search Users"}
                    />

                    <SizedBox />
                    <FlatList
                        data={searchText ? searchArray(members, searchText) : members}
                        ListFooterComponent={<SizedBox />}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item?._id}
                        renderItem={({ item, index }) => (
                            <SingleMemberView
                                balance={item?.user?.wallet?.amount || 0}
                                name={item?.user?.user_name}
                                memberId={item?.member_id}
                                relation={item?.relationship}
                                onPress={() => {
                                    dispatch(setPreviousScreen("Members\nWallet info"))
                                    navigate("WalletTransactions", { data: item })
                                }}
                            />
                        )}
                    />



                    <SizedBox />

                </ScrollView>
            </View>
            <LoaderModal visible={transaction_loading} />
        </Container>
    )
}

export default Wallet