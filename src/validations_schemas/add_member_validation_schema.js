import * as yup from "yup";

export const add_member_schema = {
    name: "",
    surname: "",
    alias: "",
    phone: "",
    gender: "",
    email: "",
    password: "",
}



export const add_member_validation_schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is Required")
        .min(3, "Name must be of minimum 3 characters")
        .max(30, "Name can't be greater than 30 characters"),
    surname: yup
        .string()
        .required("SurName is Required")
        .min(3, "SurName must be of minimum 3 characters")
        .max(30, "SurName can't be greater than 30 characters"),
    alias: yup
        .string()
        .required("Alias is Required")
        .min(3, "Alias must be of minimum 3 characters")
        .max(30, "Alias can't be greater than 30 characters"),
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


