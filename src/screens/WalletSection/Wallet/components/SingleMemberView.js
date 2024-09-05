import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '@constants'
import { Icons, ImageView, Text } from '@components'
import { primary_forward_icon } from '@assets/icons'

const SingleMemberView = ({ relation, name, balance, onPress, memberId }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            disabled={!onPress}
            style={styles.main_view} >
            <ImageView
                image={images.avatar}
                height={SIZES.padding * 3}
                width={SIZES.padding * 3}

            />
            <View style={styles.text_view} >
                <Text
                    size={SIZES.h16}
                    text={relation}
                />
                <Text
                    size={SIZES.h11}
                    color={COLORS.text_light_blue_color}
                    text={name}
                />
                {
                    balance ?
                        <Text
                            size={SIZES.h12}
                            color={COLORS.primary}
                            text={`Balance ${balance}`}

                        />
                        :
                        <Text
                            size={SIZES.h11}
                            color={COLORS.text_light_blue_color}
                            text={`Member ID: ${memberId}`}

                        />

                }
            </View>

            <Icons name={primary_forward_icon} />
        </TouchableOpacity>
    )
}

export default SingleMemberView

const styles = StyleSheet.create({
    main_view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: SIZES.padding
    },
    text_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        alignItems: "flex-start"
    }
})