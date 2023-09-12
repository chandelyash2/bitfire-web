import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const agentSchema = yup.object().shape({
  name: yup.string().required(" Name is required"),
  userName: yup.string().required("UserName is required"),
  password: yup.string().required("Password is required"),
  phone: yup.string().matches(/^[6-9]\d{9}$/, "Phone number is not valid"),
  creditLimit: yup
    .number()
    .typeError("Amount must be a number")
    .required("Credit Limit is required")
    .min(0, "Credit Limit should be greater than 0")
    .max(50000, "Credit Limit should be less than 50000"),
});
export const forgetPasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old Password is required"),
  newPassword: yup.string().required("New Password is required"),
  repeatPassword: yup
    .string()
    .required("Repeat Password is required")
    .oneOf([yup.ref("newPassword")], "Your passwords do not match."),
});
