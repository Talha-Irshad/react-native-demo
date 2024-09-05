import * as yup from "yup";

export const forgot_password_schema = {
    email: "",
}

export const forgot_password_validation_schema = yup.object().shape({
    email: yup
        .string()
        .required("Email is Required").
        email("Please enter valid email")

});
