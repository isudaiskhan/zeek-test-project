import { object, string } from "yup";

export const LoginSchema = object().shape({
  email: string().email("Invalid Email").required("Required"),
  password: string().required("Required"),
});

export const SignupSchema = object().shape({
  email: string().email("Invalid Email").required("Required"),
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  password: string()
    .required("Required")
    .min(6, "Password must be at least 6 characters"),
});
