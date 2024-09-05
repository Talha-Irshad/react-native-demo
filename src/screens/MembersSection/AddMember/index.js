import React from 'react'
import { Button, Container, Header, InputField, SizedBox, Text, DropDown, ErrorText } from '@components'
import { KeyboardAvoidingView, ScrollView, View } from 'react-native'
import { styles } from './index.styles'
import { SIZES } from '@constants'
import { COLORS, isIOS } from '@constants/theme'
import { Formik } from 'formik'
import { add_member_schema, add_member_validation_schema } from '../../../validations_schemas/add_member_validation_schema'
import AddMemberFunctional from "./index.function"
import { genders } from '../../../config'
import { white_dropdown_icon } from '../../../assets/icons'
import { LoaderModal } from '../../../components'

const AddMember = ({ route }) => {
    const { data } = route.params
    let surname_ref;
    let alias_ref;
    let phone_ref;
    let email_ref;
    let password_ref;

    const {
        onAddMember,
        member_loading,
    } = AddMemberFunctional({ data })


    return (
        <Container>
            <Header title={`${data ? "Edit" : "Add new"} member`} />

            <KeyboardAvoidingView style={{ flex: 1 }} behavior={isIOS ? "padding" : "height"} >
                <View style={styles.main_view}  >

                    <ScrollView showsVerticalScrollIndicator={false} >


                        <Text text={"Member Info"} />

                        <Formik
                            validationSchema={add_member_validation_schema}
                            initialValues={{
                                name: data?.user?.user_name || "",
                                surname: data?.user?.surname || "",
                                alias: data?.relationship || "",
                                phone: data?.user?.phone_number || "",
                                gender: data?.user?.gender || "",
                                email: data?.user?.email || "",
                                password: data ? "Test@123" : "",
                            }}
                            validateOnBlur={false}
                            validateOnChange={false}
                            onSubmit={(values) => onAddMember(values)}
                        >
                            {({ handleSubmit, setFieldValue, values, errors }) => (
                                <>
                                    <View style={styles.sub_view} >

                                        <Text
                                            size={SIZES.h12}
                                            mt={SIZES.padding}
                                            text={"Name"}
                                        />

                                        <InputField
                                            style={styles.input}
                                            inputStyle={{ color: COLORS.white }}
                                            placeholderTextColor={COLORS.text_grey_color}
                                            placeholder={"Peter"}
                                            value={values?.name}
                                            onChangeText={text => setFieldValue("name", text)}
                                            onSubmitEditing={() => surname_ref.focus()}


                                        />
                                        <ErrorText error={errors?.name} />

                                        <Text
                                            size={SIZES.h12}
                                            mt={SIZES.padding}
                                            text={"Surname"}
                                        />

                                        <InputField
                                            restProps={{
                                                ref: (ref) => (surname_ref = ref),
                                            }}
                                            style={styles.input}
                                            inputStyle={{ color: COLORS.white }}
                                            placeholderTextColor={COLORS.text_grey_color}
                                            placeholder={"Anniston"}
                                            value={values?.surname}
                                            onChangeText={text => setFieldValue("surname", text)}
                                            onSubmitEditing={() => alias_ref.focus()}
                                        />
                                        <ErrorText error={errors?.surname} />

                                        <Text
                                            size={SIZES.h12}
                                            mt={SIZES.padding}
                                            text={"Alias name"}
                                        />

                                        <InputField
                                            restProps={{
                                                ref: (ref) => (alias_ref = ref),
                                            }}
                                            style={styles.input}
                                            inputStyle={{ color: COLORS.white }}
                                            placeholderTextColor={COLORS.text_grey_color}
                                            placeholder={"Dad"}
                                            value={values?.alias}
                                            onChangeText={text => setFieldValue("alias", text)}
                                            onSubmitEditing={() => phone_ref.focus()}
                                        />
                                        <ErrorText error={errors?.alias} />

                                        <Text
                                            size={SIZES.h12}
                                            mt={SIZES.padding}
                                            text={"Telephone number"}
                                        />

                                        <InputField
                                            restProps={{
                                                ref: (ref) => (phone_ref = ref),
                                            }}
                                            style={styles.input}
                                            inputStyle={{ color: COLORS.white }}
                                            placeholderTextColor={COLORS.text_grey_color}
                                            placeholder={"0027797995110"}
                                            keyboardType={"phone-pad"}
                                            value={values?.phone}
                                            maxLength={11}
                                            onChangeText={text => setFieldValue("phone", text)}
                                            onSubmitEditing={() => email_ref.focus()}
                                        />
                                        <ErrorText error={errors?.phone} />


                                        <Text
                                            size={SIZES.h12}
                                            mt={SIZES.padding}
                                            text={"E-mail"}
                                        />
                                        <InputField
                                            restProps={{
                                                ref: (ref) => (email_ref = ref),
                                            }}
                                            style={styles.input}
                                            inputStyle={{ color: COLORS.white }}
                                            placeholderTextColor={COLORS.text_grey_color}
                                            placeholder={"peter@gmail.com"}
                                            keyboardType={"email-address"}
                                            value={values?.email}
                                            isEdit={data ? false : true}
                                            onChangeText={text => setFieldValue("email", text)}
                                            onSubmitEditing={() => password_ref.focus()}
                                        />
                                        <ErrorText error={errors?.email} />

                                        <Text
                                            size={SIZES.h12}
                                            mt={SIZES.padding}
                                            text={"Password"}
                                        />
                                        <InputField
                                            restProps={{
                                                ref: (ref) => (password_ref = ref),
                                            }}
                                            style={styles.input}
                                            inputStyle={{ color: COLORS.white }}
                                            placeholderTextColor={COLORS.text_grey_color}
                                            placeholder={"**********"}
                                            isEdit={data ? false : true}
                                            value={data ? "********" : values?.password}
                                            onChangeText={text => setFieldValue("password", text)}
                                        />
                                        <ErrorText error={errors?.password} />


                                        <Text
                                            size={SIZES.h12}
                                            mt={SIZES.padding}
                                            text={"Gender"}
                                        />
                                        <DropDown
                                            value={values?.gender}
                                            value_key={'title'}
                                            placeholder={"Gender"}
                                            array={genders}
                                            style={styles.input}
                                            icon={white_dropdown_icon}
                                            textColor={values?.gender ? COLORS.white : COLORS.text_grey_color}
                                            onPressValue={val => setFieldValue("gender", val?.title)}
                                        />
                                        <ErrorText error={errors?.gender} />


                                        <Text
                                            size={SIZES.h12}
                                            mt={SIZES.padding}
                                            text={"Member ID"}
                                        />

                                        <Text
                                            text={"M882771"}
                                            color={COLORS.text_grey_color}
                                            mt={SIZES.padding}
                                        />

                                    </View>
                                    <Button
                                        style={styles.btn}
                                        buttonText={data ? "Edit" : "Add"}
                                        onPress={() => {
                                            handleSubmit()
                                            // goBack()
                                            // dispatch(setPreviousScreen("Dashboard"))
                                        }}
                                    />
                                </>
                            )}
                        </Formik>






                        <SizedBox />
                        <SizedBox />
                    </ScrollView>
                    <LoaderModal visible={member_loading} />
                </View>
            </KeyboardAvoidingView>


        </Container>
    )
}

export default AddMember