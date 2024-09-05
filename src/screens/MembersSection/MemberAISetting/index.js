import React from 'react'
import { Button, Container, Header, InputField, SizedBox, Text } from '@components'
import { KeyboardAvoidingView, ScrollView, View } from 'react-native'
import { styles } from './index.styles'
import { SIZES } from '@constants'
import { COLORS, isIOS } from '@constants/theme'
import { goBack } from '@navigation/service'
import { useDispatch } from 'react-redux'
import { setPreviousScreen } from '@redux/slices/common-slice'

const MemberAISetting = () => {
    const dispatch = useDispatch()


    return (
        <Container>
            <Header title={"AI Settings"} />

            <KeyboardAvoidingView style={{ flex: 1 }} behavior={isIOS ? "padding" : "height"} >
                <View style={styles.main_view}  >

                    <ScrollView showsVerticalScrollIndicator={false} >


                        <Text text={"AI Settings"} />

                        <View style={styles.sub_view} >

                            <Text
                                size={SIZES.h12}
                                mt={SIZES.padding}
                                text={"Language "}
                            />

                            <InputField
                                style={styles.input}
                                inputStyle={{ color: COLORS.white }}
                                placeholderTextColor={COLORS.text_grey_color}
                                placeholder={"English"}
                            />

                            <Text
                                size={SIZES.h12}
                                mt={SIZES.padding}
                                text={"Voice Type"}
                            />

                            <InputField
                                style={styles.input}
                                inputStyle={{ color: COLORS.white }}
                                placeholderTextColor={COLORS.text_grey_color}
                                placeholder={"Male"}
                            />

                            <Text
                                size={SIZES.h12}
                                mt={SIZES.padding}
                                text={"Voices"}
                            />

                            <InputField
                                style={styles.input}
                                inputStyle={{ color: COLORS.white }}
                                placeholderTextColor={COLORS.text_grey_color}
                                placeholder={"Adman"}
                            />

                            <SizedBox />


                        </View>

                        <Button
                            style={styles.btn}
                            buttonText={"Update"}
                            onPress={() => {
                                goBack()
                                dispatch(setPreviousScreen("Dashboard"))

                            }}
                        />

                        <SizedBox />
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>


        </Container>
    )
}

export default MemberAISetting