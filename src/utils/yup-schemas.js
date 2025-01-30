import { object, string, array, ref, date } from "yup";

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

export const BranchSchema = object({
  name: string().required("Branch Name is required"),
  manager: string().required("Manager is required"),
  phone: string().required("Phone is required"),
  address: object({
    street: string().required("Street is required"),
    city: string().required("City is required"),
    emirate: string().required("Emirate is required"),
  }),
  operatingHours: array().of(
    object({
      day: string().required(),
      openingTime: string().required("Opening time is required"),
      closingTime: string().required("Closing time is required"),
    })
  ),
});

export const EmployeeSchema = object().shape({
  email: string().email("Invalid email format").required("Email is required"),
  fullName: string().required("Full Name is required"),
  phone: string()
    .matches(/^\d{10,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  role: string().required("Role is required"),
  branch: string().required("Branch is required"),
  employmentType: string()
    .oneOf(["full_time", "part_time"], "Invalid employment type")
    .required("Employment Type is required"),
  hireDate: date().nullable().required("Hire date is required"),
  jobTitle: string().required("Job title is required"),
  temporaryPassword: string()
    .min(6, "Password must be at least 6 characters")
    .required("Temporary password is required"),
  confirmPassword: string()
    .oneOf([ref("temporaryPassword")], "Passwords must match")
    .required("Confirm password is required"),
});
