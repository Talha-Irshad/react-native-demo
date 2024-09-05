import * as yup from "yup";

export const update_password_schema = {
    password: "",
    confirm_password: ""
}

export const update_password_validation_schema = yup.object().shape({
    password: yup.string()
        // .required("Password is required")
        .min(8, 'Must be at least 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\~\`\_\-\"\'\?\/\\\(\)\+\=\{\[\}\]\<\>\.\,\;\|\:\}])(?=.{8,})/, "Must have 8 characters, including capital letter, numbers and symbols!!"),
    confirm_password: yup.string()
        // .required("Confirm Password is required")
        .oneOf([yup.ref("password")], "Both password must match")
        .min(8, `Must be at least 8 characters`),
});
