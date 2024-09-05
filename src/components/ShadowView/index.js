import { TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@constants'

const ShadowView = ({ style, elevation, width, shadowColor, radius, background, padding, children, onPress }) => {

    const styles = {
        shadowColor: shadowColor || COLORS.shadow_color,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: elevation || 7,
        backgroundColor: background || COLORS.white,
        borderRadius: radius || SIZES.padding2,
        padding: padding || SIZES.padding,
        width: width,
        alignSelf: width && "center"
    }

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            disabled={!onPress}
            onPress={onPress}
            style={[styles, style]} >
            {children}
        </TouchableOpacity>
    )
}

export default ShadowView