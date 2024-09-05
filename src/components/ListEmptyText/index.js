import { StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '../index'
import { COLORS, SIZES } from '../../constants'

const ListEmptyText = ({ text }) => {
    return (
        <Text
            text={text}
            mt={SIZES.padding}
            color={COLORS.white}
            align={'center'}
        />
    )
}

export default ListEmptyText

const styles = StyleSheet.create({})