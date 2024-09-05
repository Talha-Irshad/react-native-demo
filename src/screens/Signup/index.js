import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { styles } from './index.styles'
import { Button, Container, ImageView, RowView, SizedBox, SocialButton, Text, } from '@components'
import { goBack } from '@navigation/service'
import SignupFunctional from "./index.function"
import { Formik } from 'formik'
import { apple_icon, email_icon, google_icon, password_icon, username_icon } from '@assets/icons'
import { COLORS, isIOS, SIZES } from '@constants/theme'
import { images } from '@constants'
import { TextWeights } from '@config'
import { DropDown, ErrorText, InputField, LoaderModal } from '../../components'
import { signup_schema, signup_validation_schema } from '../../validations_schemas/signup_validation_schema'
import { genders } from '../../config'

const Signup = () => {
    let surname_ref;
    let email_ref;
    let phone_ref;
    let password_ref;
    const {
        onSignup,
        auth_loading
    } = SignupFunctional()

    return (
        <Container>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={isIOS && 'padding'} >
                <Formik
                    validationSchema={signup_validation_schema}
                    initialValues={signup_schema}
                    onSubmit={(values) => onSignup(values)}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validateOnMount={false}
                >
                    {({ handleSubmit, setFieldValue, values, errors, touched }) => (
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
                                        text={"Create Account"}
                                        align={"center"}
                                        size={SIZES.h22}
                                        mt={SIZES.padding}
                                    />

                                    <SizedBox />
                                    <SizedBox />

                                    <InputField
                                        value={values.username}
                                        onChangeText={text => setFieldValue('username', text)}
                                        placeholder={"User Name"}
                                        returnKeyType={"next"}
                                        onSubmitEditing={() => surname_ref?.focus()}
                                        icon={username_icon}
                                    />
                                    <ErrorText error={errors?.username} />

                                    <SizedBox height={SIZES.padding2} />
                                    <InputField
                                        restProps={{
                                            ref: (ref) => (surname_ref = ref),
                                        }}
                                        value={values.username}
                                        onChangeText={text => setFieldValue('surname', text)}
                                        placeholder={"Surname"}
                                        returnKeyType={"next"}
                                        onSubmitEditing={() => email_ref?.focus()}
                                        icon={username_icon}
                                    />
                                    <ErrorText error={errors?.username} />

                                    <SizedBox height={SIZES.padding2} />
                                    <InputField
                                        restProps={{
                                            ref: (ref) => (email_ref = ref),
                                        }}
                                        keyboardType={"email-address"}
                                        value={values.email}
                                        onChangeText={text => setFieldValue('email', text)}
                                        placeholder={"Email"}
                                        returnKeyType={"next"}
                                        onSubmitEditing={() => phone_ref?.focus()}
                                        icon={email_icon}
                                    />
                                    <ErrorText error={errors?.email} />


                                    <SizedBox height={SIZES.padding2} />
                                    <InputField
                                        restProps={{
                                            ref: (ref) => (phone_ref = ref),
                                        }}
                                        value={values.phone}
                                        onChangeText={text => setFieldValue('phone', text)}
                                        placeholder={"Phone Number"}
                                        returnKeyType={"next"}
                                        keyboardType={"phone-pad"}
                                        onSubmitEditing={() => password_ref?.focus()}
                                        icon={email_icon}
                                        maxLength={11}
                                    />
                                    <ErrorText error={errors?.phone} />

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
                                        isPassword
                                    />
                                    <ErrorText error={errors?.password} />

                                    <SizedBox height={SIZES.padding2} />

                                    <DropDown
                                        value={values.gender}
                                        value_key={'title'}
                                        placeholder={"Gender"}
                                        array={genders}
                                        onPressValue={val => setFieldValue("gender", val?.title)}
                                    />
                                    <ErrorText error={errors?.gender} />

                                    <SizedBox />
                                    <SizedBox />

                                    <Button
                                        onPress={handleSubmit}
                                        style={styles.login_btn}
                                        buttonText={"Sign-up"} />

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
                                                title={"Continue With Apple"}
                                                icon={apple_icon}
                                            />
                                            <SizedBox />
                                        </>
                                    }

                                    <SocialButton
                                        title={"Continue With Google"}
                                        icon={google_icon}
                                    />

                                    <SizedBox />
                                    <SizedBox />

                                    <RowView
                                        onPress={goBack}
                                        style={{ alignSelf: "flex-end" }} >
                                        <View style={styles.text_view} >
                                            <Text
                                                text={"Don’t have an account ?"}
                                            />
                                            <Text
                                                align={'right'}
                                                text={"Sign-in"}
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

export default Signup
