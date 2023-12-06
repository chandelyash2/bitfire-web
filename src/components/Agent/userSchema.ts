import { AccountStatus } from "@/graphql/generated/schema";
import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userSchema = (creditLimit: number) => {
  return yup.object().shape({
    userName: yup.string().required("UserName is required"),
    password: yup.string().required("Password is required"),
    phone: yup.string().matches(/^[6-9]\d{9}$/, "Phone number is not valid"),
    status: yup.mixed().required("Status is required"),
    creditLimit: yup
      .number()
      .typeError("Amount must be a number")
      .required("Credit Limit is required")
      .min(0, "Credit Limit should be greater than 0")
      .max(creditLimit, `Credit Limit should be less than ${creditLimit}`),
  });
};
export const agentSchema = (creditLimit: number) => {
  return yup.object().shape({
    userName: yup.string().required("UserName is required"),
    password: yup.string().required("Password is required"),
    status: yup.string<AccountStatus>().required("Status is required"),
    creditLimit: yup
      .number()
      .typeError("Amount must be a number")
      .required("Credit Limit is required")
      .min(0, "Credit Limit should be greater than 0")
      .max(creditLimit, `Credit Limit should be less than ${creditLimit}`),
  });
};
export const editUserSchema = (creditLimit: number) => {
  return yup.object().shape({
    password: yup.string(),
    status: yup.string<AccountStatus>(),
    creditLimit: yup
      .number()
      .typeError("Amount must be a number")
      .required("Credit Limit is required")
      .min(0, "Credit Limit should be greater than 0")
      .max(creditLimit, `Credit Limit should be less than ${creditLimit}`),
    maxCredit: yup.number(),
  });
};
export const forgetPasswordSchema = yup.object().shape({
  // oldPassword: yup.string().required("Old Password is required"),
  newPassword: yup
    .string()
    .required("New Password is required")
    .notOneOf(
      [yup.ref("oldPassword")],
      "Old and new passwords must be different"
    ),
  repeatPassword: yup
    .string()
    .required("Repeat Password is required")
    .oneOf([yup.ref("newPassword")], "Your passwords do not match."),
});

export const addFundsSchema = (creditLimit: number) => {
  return yup.object().shape({
    amount: yup
      .number()
      .typeError("Amount must be a number")
      .required("Amount is required")
      .min(0, "Amountshould be greater than 0")
      .max(creditLimit, `Amount should be less than ${creditLimit}`),
  });
};
