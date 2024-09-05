import * as yup from "yup";

export const login_schema = {
    email: "",
    password: "",
}



export const login_validation_schema = yup.object().shape({
    email: yup
        .string()
        .email("Please Enter Valid Email Address")
        .required("Email is Required")
    ,
    password: yup
        .string()
        .required("Password is Required"),
});


