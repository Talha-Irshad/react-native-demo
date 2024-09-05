import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { SIZES } from '@constants'

const ImageView = ({ url, height, radius, width, image, style , resizeMode }) => {
    const view_style = {
        height: height || SIZES.padding * 2,
        width: width || SIZES.padding * 2,
        borderRadius: radius || SIZES.padding * 2,
        overflow:"hidden"
    }
    const image_style = {
        height: "100%",
        width: "100%",
        borderRadius: radius || SIZES.padding * 2
    }
    return (
        <View style={[view_style, style]} >
            <Image 
            resizeMode={resizeMode || 'contain'}
            style={image_style} source={url ? { uri: url } : image} />
        </View>
    )
}

export default ImageView

const styles = StyleSheet.create({})