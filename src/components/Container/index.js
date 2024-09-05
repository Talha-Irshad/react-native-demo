import { SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'
import { COLORS } from '@constants'
import { styles } from './index.style'

const Container = ({ children, background, barStyle }) => {
  return (
    <SafeAreaView style={[styles.safe_area, { backgroundColor: background || COLORS.background_color }]} >
      <StatusBar barStyle={barStyle || 'light-content'} backgroundColor={background || COLORS.background_color} />
        {children}
    </SafeAreaView>
  )
}

export default Container
