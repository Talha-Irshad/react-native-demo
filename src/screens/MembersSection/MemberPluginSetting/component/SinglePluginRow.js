import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '@components'
import { COLORS, SIZES } from '@constants'
import { primary_forward_icon } from '@assets/icons'
import { Icons } from '../../../../components'

const SinglePluginRow = ({ title, icon, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.main_view}
            activeOpacity={0.6}
            onPress={onPress}
        >
            <View style={styles.icon_view} >
                <Icons name={icon} iconHeight={30} />
            </View>

            <Text style={styles.title} text={title} />

            <Icons name={primary_forward_icon} />
        </TouchableOpacity>
    )
}

export default SinglePluginRow

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
        paddingHorizontal: SIZES.padding,
        gap: SIZES.padding2
    },
    icon_view: {
        height: SIZES.padding * 2.5,
        width: SIZES.padding * 2.5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.padding2 / 2,
        backgroundColor:COLORS.background_black
    },
    title: {
        flex: 1
    }
})