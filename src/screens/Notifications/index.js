import { View } from 'react-native'
import React from 'react'
import { Container, Text } from '@components'
import { styles } from './index.styles'

const Notifications = () => {
    return (
        <Container>
            <View  style={styles.main_view} >
                <Text  text={"Notifications"} />
            </View>
        </Container>
    )
}

export default Notifications
