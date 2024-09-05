import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icons, Text } from '@components'
import { primary_forward_icon } from '@assets/icons'
import { COLORS, SIZES } from '@constants'

const SingleDetailRow = ({ onPress, title }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={styles.main_view}
        >
            <Text
                size={SIZES.h16}
                align={"left"}
                text={title} />
            <Icons name={primary_forward_icon} />
        </TouchableOpacity>
    )
}

export default SingleDetailRow

const styles = StyleSheet.create({
    main_view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: SIZES.padding * 3,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.orange_border_color,
        marginTop: SIZES.padding,
        paddingBottom: SIZES.padding,
        paddingHorizontal: SIZES.padding
    }
})