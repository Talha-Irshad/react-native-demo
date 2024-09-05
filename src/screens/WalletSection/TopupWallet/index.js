import { View } from 'react-native'
import React from 'react'
import { Button, Container, Header, SizedBox, Text } from '@components'
import { styles } from './index.styles'
import { TextWeights } from '@config'
import { SIZES } from '@constants'
import TopupWalletFunctional from "./index.function"
import { InputField, LoaderModal } from '../../../components'

const TopupWallet = ({ route }) => {
    const { data } = route.params
    const { onPressBack,
        dispatch,
        onPressAdd,
        user,
        amount,
        setAmount,
        transaction_loading,
        topup_loading
    } = TopupWalletFunctional({ data })


    return (
        <Container>
            <Header
                title={data ? "Tranfser Amount" : "Top Up Wallet"}
                onPressBack={onPressBack}
            />
            <View style={styles.main_view} >
                <Text
                    text={
                        <>
                            <Text
                                weight={TextWeights.bold}
                                size={SIZES.h16}
                                text={"Wallet Balance : "} />
                            <Text
                                weight={TextWeights.medium}
                                size={SIZES.h16}
                                text={`R${user?.wallet?.amount || 0}`} />
                        </>
                    }
                />
                <SizedBox />
                <SizedBox />
                <SizedBox />

                <Text
                    weight={TextWeights.medium}
                    size={SIZES.h12}
                    text={data ? "Transfer amount" : "Top up amount."} />

                <View style={styles.row} >
                    <InputField
                        keyboardType={'number-pad'}
                        placeholder={"R400.00"}
                        value={amount}
                        onChangeText={text => setAmount(text)}
                        style={styles.transfer_input}
                    />

                    <Button
                        onPress={onPressAdd}
                        buttonText={data ? 'Transfer' : "Add"}
                        style={styles.transfer_btn}
                    />
                </View>
            </View>

            <LoaderModal visible={transaction_loading || topup_loading} />

        </Container>
    )
}

export default TopupWallet