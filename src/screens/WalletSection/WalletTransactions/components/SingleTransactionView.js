import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@constants'
import { Icons } from '@components'
import { TextWeights } from '@config'
import { action_icon } from '@assets/icons'
import { Text } from '../../../../components'

const SingleTransactionView = ({ date, description, amount, onPress, }) => {
    return (
        <View style={styles.main_view} >
            <View style={styles.date_view} >
                <Text
                    text={date}
                    size={SIZES.h9}
                    color={COLORS.text_light_blue_color}
                    weight={TextWeights.regular}
                />
            </View>
            <View style={styles.description_view} >
                <Text
                    text={description}
                    size={SIZES.h9}
                    color={COLORS.text_light_blue_color}
                    weight={TextWeights.regular}
                />
            </View>
            <View style={styles.amount_view} >
                <Text
                    text={amount}
                    size={SIZES.h9}
                    color={COLORS.text_light_blue_color}
                    weight={TextWeights.regular}
                />
            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={onPress}
                style={styles.action_view} >
                <Icons name={action_icon} />
            </TouchableOpacity>
        </View>
    )
}

export default SingleTransactionView

const styles = StyleSheet.create({
    main_view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.blue_border_color,
        height: SIZES.padding * 2.5,
        paddingHorizontal: SIZES.padding2
    },
    date_view: {
        paddingHorizontal: SIZES.padding2 / 4,
        height: "100%",
        justifyContent: "center",
        width: "22%",
    },
    description_view: {
        paddingHorizontal: SIZES.padding2 / 4,
        height: "100%",
        justifyContent: "center",
        width: "44%"
    },
    amount_view: {
        paddingHorizontal: SIZES.padding2 / 4,
        height: "100%",
        justifyContent: "center",
        width: "20%"
    },
    action_view: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
})