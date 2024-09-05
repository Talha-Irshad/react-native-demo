import { View } from 'react-native'
import React from 'react'
import { Container, Header, Text } from '@components'
import { styles } from './index.styles'

const MyGuardians = () => {
    return (
        <Container>
            <Header
                title={"My Guardians"}
                previousScreen={null}
            />
            <View style={styles.main_view} >
                <Text text={"MyGuardians"} />
            </View>
        </Container>
    )
}

export default MyGuardians