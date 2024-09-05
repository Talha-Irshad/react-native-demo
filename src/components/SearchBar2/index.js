import { TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './index.styles'
import { Icons } from '../index'
import { search_icon } from '@assets/icons'
import { COLORS } from '@constants'

const SearhcBar2 = ({
    style,
    placeholder,
    onChangeText,
    value,
    onSubmitEditing,
    inputStyle
}) => {
    return (
        <View style={[styles.main_view, style]} >
            <Icons name={search_icon} />
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={[styles.input, inputStyle]}
                placeholderTextColor={COLORS.white}
                value={value}
                onSubmitEditing={onSubmitEditing}
                underlineColorAndroid="transparent"
            />
        </View>
    )
}

export default SearhcBar2