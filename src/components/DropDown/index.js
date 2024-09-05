import React, { useState } from 'react'
import RowView from '../RowView'
import { Icons, Text } from '../index'
import { styles } from './index.styles'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { dropdown_icon } from '@assets/icons'
import { COLORS, SIZES } from '../../constants'
import { TextWeights } from '../../config'

const DropDown = ({ style, isMember, textStyle, placeholder, value, array, value_key, onPressValue, icon, lefticon, textColor }) => {

    const [open, setOpen] = useState(false)

    return (
        <View  >
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setOpen(!open)}
                style={[open ? styles.open_main_view : styles.main_view, style]}
            >
                <RowView>
                    {
                        lefticon &&
                        <View style={styles.icon_view} >
                            <Icons name={lefticon} />
                        </View>
                    }
                    <Text
                        style={[{ flex: 1, letterSpacing: 0.8 }, textStyle]}
                        color={textColor ? textColor : value ? COLORS.black : COLORS.placeholder_color}
                        text={value || placeholder}
                        fontSize={SIZES.h13}
                        fontFamily={TextWeights.medium}
                    />
                    <Icons name={icon || dropdown_icon} />
                </RowView>
            </TouchableOpacity>
            {
                open &&
                <View style={{
                    maxHeight: SIZES.padding * 15,
                }} >
                    <ScrollView
                        keyboardShouldPersistTaps={"handled"}
                    >
                        {
                            array?.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.text_view}
                                    activeOpacity={0.6}
                                    onPress={() => {
                                        setOpen(false)
                                        onPressValue(item)
                                    }}
                                >
                                    <Text
                                        color={COLORS.black}
                                        ml={SIZES.padding2}
                                        weight={TextWeights.regular}
                                        style={{ letterSpacing: 0.8 }}
                                        text={isMember ? item?.user?.user_name : item?.[value_key]} />
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
            }


        </View>
    )
}

export default DropDown