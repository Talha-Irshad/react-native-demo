import { FlatList, View } from 'react-native'
import React from 'react'
import { } from '@components'
import { styles } from './index.styles'
import { COLORS, images, SIZES } from '@constants'
import { SingleDashboardView } from './components'
import { setPreviousScreen } from '@redux/slices/common-slice'
import DashboardFunctional from "./index.function"
import { Container, Header, ImageView, SizedBox, Text } from '../../components'
import { dashboardArray, TextWeights } from '../../config'
import { logoutUser } from '../../redux/actions/auth-action'

const Dashboard = () => {

    const {
        dispatch,
        user
    } = DashboardFunctional()

    return (
        <Container>
            <Header
                back={false}
                title={"Dashboard"}
            />
            <View style={styles.main_view} >
                <View style={styles.top_view} >
                    <ImageView
                        image={images.avatar}
                        height={SIZES.padding * 2.5}
                        width={SIZES.padding * 2.5}
                    />
                    <View style={styles.text_view} >
                        <Text
                            weight={TextWeights.bold}
                            size={SIZES.h20}
                            num
                            text={`Hi ${user?.user_name || ""}`}
                            numberOfLines={1}
                        />
                        <Text
                            weight={TextWeights.light}
                            size={SIZES.h11}
                            text={"Welcome back"}

                        />
                        <Text
                            text={"User ID U87635"}
                            color={COLORS.primary}
                            weight={TextWeights.regular}
                            size={SIZES.h10}
                        />

                    </View>
                    <View style={styles.top_right_view} >
                        <Text
                            weight={TextWeights.light}
                            size={SIZES.h11}
                            text={"122 Minutes available "}
                        />
                        <Text
                            text={"Purchase Minutes"}
                            color={COLORS.primary}
                            weight={TextWeights.semibold}
                            size={SIZES.h16}
                        />
                    </View>
                </View>

                <FlatList
                    numColumns={2}
                    data={dashboardArray}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={styles.list}
                    keyExtractor={item => item?.id}
                    ListFooterComponent={<SizedBox />}
                    renderItem={({ item, index }) => (
                        <SingleDashboardView
                            description={item?.description}
                            image={item?.image}
                            title={item?.title}
                            icon={item?.icon}
                            text={item?.text}
                            imageHeight={item?.imageHeight}
                            marginTop={item?.marginTop}
                            marginLeft={item?.marginLeft}
                            onPress={() => {
                                if (item?.title === 'Logout') {
                                    dispatch(logoutUser())
                                } else {
                                    dispatch(setPreviousScreen('Dashboard'))
                                    item?.onPress()
                                }
                            }}
                        />
                    )}
                />
            </View>
        </Container>
    )
}

export default Dashboard