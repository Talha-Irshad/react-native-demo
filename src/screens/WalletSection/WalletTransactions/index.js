import { FlatList, View } from 'react-native'
import React from 'react'
import { Button, Container, Header, RowView, SizedBox, Text } from '@components'
import { styles } from './index.styles'
import { COLORS, SIZES } from '@constants'
import { setPreviousScreen } from '@redux/slices/common-slice'
import { navigate } from '@navigation/service'
import { TextWeights } from '@config'
import { SingleTransactionView } from './components'
import WaleetTransactionsFunctional from "./index.function"
import { ListEmptyText, SearchBar2 } from '../../../components'
import { searchArray } from '../../../utils/functions'
import moment from 'moment'

const WalletTransactions = ({ route }) => {
    const { data } = route.params

    const {
        dispatch,
        transactions,
        user,
        searchText,
        setSearchText,
        getTotalWallet
    } = WaleetTransactionsFunctional({ data })

    return (
        <Container>
            <Header title={data?.user?.user_name} />
            <View style={styles.main_view} >

                <RowView justifyContent={"space-between"} >
                    <Text
                        color={COLORS.primary}
                        text={`Balance R${getTotalWallet()}`}
                    />
                    <Button
                        onPress={() => {
                            dispatch(setPreviousScreen(`${data?.user?.user_name}\nwallet`))
                            navigate("TopupWallet", { data })
                        }}
                        style={styles.top_btn}
                        buttonText={"Transfer"}
                    />
                </RowView>

                <Text
                    text={"Transaction History"}
                    mt={SIZES.padding}
                    size={SIZES.h18}
                    weight={TextWeights.bold}
                />

                <SizedBox />

                <SearchBar2
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                    placeholder={"Search"}
                />

                <View style={styles.table_header} >
                    <View style={styles.date_view} >
                        <Text
                            size={SIZES.h9}
                            weight={TextWeights.bold}
                            text={"Date"}
                            color={COLORS.text_light_blue_color}
                        />
                    </View>
                    <View style={styles.description_view} >

                        <Text
                            size={SIZES.h9}
                            weight={TextWeights.bold}
                            text={"Description"}
                            color={COLORS.text_light_blue_color}
                        />
                    </View>
                    <View style={styles.amount_view} >
                        <Text
                            size={SIZES.h9}
                            weight={TextWeights.bold}
                            text={"Amount"}
                            color={COLORS.text_light_blue_color}
                        />

                    </View>
                </View>

                <FlatList
                    data={searchText ? searchArray(transactions, searchText) : transactions}
                    ListFooterComponent={<SizedBox />}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<ListEmptyText text={"No Transaction Found"} />}
                    keyExtractor={item => item?._id}
                    renderItem={({ item, index }) => {
                        return (
                            <SingleTransactionView
                                amount={item?.amount}
                                date={moment(item?.created_at).format("DD-MM-YY")}
                                description={item?.description}
                                onPress={() => { }}
                            />
                        )
                    }}
                />


            </View>
        </Container>
    )
}

export default WalletTransactions