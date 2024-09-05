import * as yup from "yup";

export const signup_schema = {
    username: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
}



export const signup_validation_schema = yup.object().shape({
    username: yup
        .string()
        .required("UserName is Required")
        .min(3, "UserName must be of minimum 3 characters")
        .max(30, "UserName can't be greater than 30 characters"),
    surname: yup
        .string()
        .required("Surname is Required")
        .min(3, "Surname must be of minimum 3 characters")
        .max(30, "Surname can't be greater than 30 characters"),
    phone: yup
        .string()
        .required("Phone is Required")
        .min(11, "PhoneNumber must be of 11 characters")
        .max(11, "PhoneNumber must be of 11 characters"),
    gender: yup
        .string()
        .required("Gender is Required"),
    email: yup
        .string()
        .email("Please Enter Valid Email Address")
        .required("Email is Required"),
    password: yup
        .string()
        .required("Password is Required")
        .min(8, 'Must be at least 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\~\`\-\"\'\?\/\\\(\)\+\=\{\[\}\]\<\>\.\,\;\|\:\}])(?=.{8,})/, "Must have 8 characters, including capital letter, numbers and symbols!!"),
});


