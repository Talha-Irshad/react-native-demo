import { TouchableOpacity, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { styles } from './index.styles'
import { Button, Container, ImageView, InputField, RowView, SizedBox, SocialButton, Text, } from '@components'
import { navigate } from '@navigation/service'
import LoginFunctional from "./index.function"
import { Formik } from 'formik'
import { login_schema, login_validation_schema } from '../../validations_schemas/login_validation_schema'
import { apple_icon, email_icon, google_icon, password_icon } from '@assets/icons'
import { COLORS, isIOS, SIZES } from '@constants/theme'
import { images } from '@constants'
import { TextWeights } from '@config'
import { ErrorText, LoaderModal } from '../../components'

const Login = () => {
    let password_ref;
    const {
        onSignin,
        auth_loading,
        onPressGoogleLogin,
        onPressAppleLogin
    } = LoginFunctional()

    return (
        <Container>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={isIOS && 'padding'} >
                <Formik
                    validationSchema={login_validation_schema}
                    initialValues={login_schema}
                    onSubmit={(values) => onSignin(values)}
                >
                    {({ handleSubmit, setFieldValue, values, errors }) => (
                        <>
                            <View style={styles.main_view} >
                                <ScrollView
                                    keyboardShouldPersistTaps={"handled"}
                                    showsVerticalScrollIndicator={false} >

                                    <SizedBox />
                                    <SizedBox />
                                    <SizedBox />


                                    <ImageView
                                        style={{ alignSelf: "center" }}
                                        image={images.logo}
                                        height={SIZES.padding * 3}
                                        width={SIZES.padding * 5}
                                        radius={0.01}
                                    />

                                    <Text
                                        text={"Sign in"}
                                        align={"center"}
                                        size={SIZES.h22}
                                        mt={SIZES.padding}
                                    />

                                    <SizedBox />
                                    <SizedBox />


                                    <InputField
                                        value={values.email}
                                        onChangeText={text => setFieldValue('email', text)}
                                        placeholder={"Email"}
                                        returnKeyType={"next"}
                                        onSubmitEditing={() => password_ref?.focus()}
                                        icon={email_icon}
                                    />
                                    <ErrorText error={errors?.email} />

                                    <SizedBox height={SIZES.padding2} />


                                    <InputField
                                        restProps={{
                                            ref: (ref) => (password_ref = ref),
                                        }}
                                        placeholder={"Password"}
                                        value={values.password}
                                        onChangeText={text => setFieldValue('password', text)}
                                        returnKeyType={"done"}
                                        onSubmitEditing={handleSubmit}
                                        icon={password_icon}
                                    />
                                    <ErrorText error={errors?.password} />

                                    <Text
                                        onPress={() => navigate("ForgotPassword")}
                                        align={"right"}
                                        text={
                                            <>
                                                <Text align={"right"} text={"Forgot Password?"} />
                                                <Text
                                                    color={COLORS.primary}
                                                    text={" Reset"} />
                                            </>
                                        }
                                        mt={SIZES.padding2}
                                    />


                                    <SizedBox />
                                    <SizedBox />


                                    <Button
                                        onPress={handleSubmit}
                                        style={styles.login_btn}
                                        buttonText={"Sign-in"} />

                                    <SizedBox />

                                    <RowView
                                        justifyContent={"space-between"}
                                    >
                                        <View style={styles.line} />
                                        <Text
                                            size={SIZES.h22}
                                            text="or"
                                            color={COLORS.primary}
                                            mt={-SIZES.padding2 * 0.3}
                                        />
                                        <View style={styles.line} />
                                    </RowView>

                                    <SizedBox />
                                    <SizedBox />

                                    {
                                        isIOS &&
                                        <>
                                            <SocialButton
                                                onPress={onPressAppleLogin}
                                                title={"Continue With Apple"}
                                                icon={apple_icon}
                                            />
                                            <SizedBox />
                                        </>
                                    }

                                    <SocialButton
                                      onPress={onPressGoogleLogin}
                                        title={"Continue With Google"}
                                        icon={google_icon}
                                    />

                                    <SizedBox />
                                    <SizedBox />

                                    <RowView
                                        onPress={() => navigate("Signup")}
                                        style={{ alignSelf: "flex-end" }} >
                                        <View style={styles.text_view} >
                                            <Text
                                                text={"Don’t have an account ?"}
                                            />
                                            <Text
                                                align={'right'}
                                                text={"Sign-up"}
                                                weight={TextWeights.bold}
                                                size={SIZES.h16}
                                            />
                                        </View>

                                        <View style={styles.bottom_view} >
                                            <View style={styles.bottom_inner_view} />
                                        </View>
                                    </RowView>

                                    <View style={{ height: SIZES.padding2 }} />
                                </ScrollView>
                            </View>
                        </>
                    )}
                </Formik>
            </KeyboardAvoidingView>
            <LoaderModal visible={auth_loading} />

        </Container>
    )
}

export default Login
