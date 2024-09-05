import { Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import { TextWeights } from '../../config'

const ErrorText = ({ error, align, mt, ml }) => {
    const styles = {
        color: COLORS.text_red_color,
        fontSize: SIZES.h10,
        fontFamily: TextWeights.regular,
        textAlign: align || "left",
        marginTop: mt || SIZES.padding2 / 2,
        marginLeft: ml || 0
    }
    return (
        <>
            {
                error &&
                <Text style={styles} > {error || ""}</Text>
            }
        </>
    )
}

export default ErrorText
