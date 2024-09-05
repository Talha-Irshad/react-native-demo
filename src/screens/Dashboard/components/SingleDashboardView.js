import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@constants'
import { Icons, ImageView, Text } from '@components'
import { TextWeights } from '@config'

const SingleDashboardView = ({ onPress, description, marginLeft, marginTop, imageHeight, image, title, icon, text }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={styles.main_view} >
            {
                (icon || text) &&
                <View style={styles.top_view} >
                    {
                        <>
                            {
                                icon ?
                                    <Icons name={icon} />
                                    :
                                    <Text
                                        color={COLORS.text_orange_color}
                                        weight={TextWeights.bold}
                                        size={SIZES.h22}
                                        text={text === 'none' ? "" : text} />

                            }
                        </>
                    }
                </View>
            }
            <View style={styles.mid_view} >

                {
                    image ?
                        <ImageView
                            resizeMode='contain'
                            image={image}
                            height={imageHeight}
                            width={"100%"}
                            style={{
                                marginTop,
                                marginLeft,
                                borderTopLeftRadius:SIZES.padding,
                                borderTopRightRadius:SIZES.padding,

                            }}
                            radius={0.0001}
                        // height={"100%"}
                        // width={"100%"}
                        />
                        :
                        <Text
                            align={"center"}
                            size={SIZES.h15}
                            weight={TextWeights.semibold}
                            text={title}
                            mt={SIZES.padding2}
                        />

                }
            </View>
            <View style={styles.bottom_view} >
                {
                    image &&
                    <Text
                        align={"center"}
                        size={SIZES.h15}
                        weight={TextWeights.semibold}
                        text={title}
                    />
                }
                <Text
                    align={"center"}
                    text={description}
                    weight={TextWeights.medium}
                    size={SIZES.h10}
                    mt={SIZES.padding2 / 2}
                    color={COLORS.text_light_blue_color}
                    mb={image && SIZES.padding}
                />
            </View>
        </TouchableOpacity>
    )
}

export default SingleDashboardView

const styles = StyleSheet.create({
    main_view: {
        width: "48%",
        borderRadius: SIZES.padding,
        marginTop: SIZES.padding,
        borderWidth: 1,
        borderColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: "space-between",
        minHeight: SIZES.padding * 10
    },
    top_view: {
        height: SIZES.padding * 3.5,
        width: SIZES.padding * 3,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
    },
    mid_view: {
        // justifyContent: "center",
        width: "100%",
        // alignItems:'center'
    },
    bottom_view: {
        height: SIZES.padding * 3,
        justifyContent: "center",
        alignItems: "center",
        marginTop: SIZES.padding
    }


})