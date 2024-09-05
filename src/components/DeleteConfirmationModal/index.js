import { Modal, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './index.styles'
import { SizedBox, Text } from '../index'
import { COLORS, SIZES } from '../../constants'
import { TextWeights } from '../../config'

const DeleteConfirmationModal = ({ visible, onPressClose, text, onPressYes }) => {
    return (
        <Modal transparent visible={visible} onRequestClose={onPressClose} >
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPressClose}
                style={styles.main_view}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { }}
                    style={styles.sub_view} >

                    <SizedBox />

                    <Text
                        ml={SIZES.padding}
                        mr={SIZES.padding}
                        size={SIZES.h14}
                        weight={TextWeights.bold}
                        align={"center"} text={text} />

                    <SizedBox height={SIZES.padding * 1.5} />

                    <View style={styles.btn_row} >

                        <TouchableOpacity
                            onPress={onPressClose}
                            style={styles.btn} >
                            <Text
                                color={COLORS.primary}
                                text={"No"} />
                        </TouchableOpacity>

                        <View style={styles.btn_seperator} />

                        <TouchableOpacity
                            onPress={onPressYes}
                            style={styles.btn} >
                            <Text
                                color={COLORS.primary}
                                text={"Yes"} />
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>

            </TouchableOpacity>
        </Modal>
    )
}

export default DeleteConfirmationModal