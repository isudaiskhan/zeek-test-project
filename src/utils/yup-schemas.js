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

export const PromotionOfferSchema = object().shape({
  name: string().required("Name is required"),
  description: string().required("Description is required"),
  expiryDate: date().required("Expiry date is required"),

  branches: array()
    .of(string().required("Invalid branch ID")) // Validate each item in the array
    .min(1, "At least one branch is required"), // Require at least one selected branch
  repeatsOn: array()
    .of(string().required("Invalid repeat day"))
    .min(1, "At least one repeat day is required"),
  image: string().required("Image is required"),
  // maxLimitUse: string().required("Max limit use is required"),
});

export const PromotionRewardSchema = object().shape({
  name: string().required("Name is required"),
  description: string().required("Description is required"),
  expiryDate: date().required("Expiry date is required"),

  branches: array()
    .of(string().required("Invalid branch ID")) // Validate each item in the array
    .min(1, "At least one branch is required"), // Require at least one selected branch
  // repeatsOn: array()
  //   .of(string().required("Invalid repeat day"))
  //   .min(1, "At least one repeat day is required"),
  image: string().required("Image is required"),
  // maxLimitUse: string().required("Max limit use is required"),
  coinCost: string().required("Coin cost is required"),
  segments: array()
    .of(string().required("Invalid segment ID")) // Validate each item in the array
    .min(1, "At least one segment is required"), // Require at least one selected segment
});

export const NotificationSchema = object().shape({
  title: string().required("Required"),
  segment: string().required("Required"),
  message: string().required("Required"),
});

export const SegmentSchema = object().shape({
  title: string().required("Required"),
});
