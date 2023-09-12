import React from "react";
import { Modal } from "./common/Modal";
import { Input } from "./common/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from "./User/userSchema";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./common/PrimaryButton";
interface ChangePasswordProp {
  setChangePassword: (value: boolean) => void;
}
export const ChangePassword = ({ setChangePassword }: ChangePasswordProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgetPasswordSchema),
  });
  return (
    <Modal close={() => setChangePassword(false)}>
      <h1 className="font-bold text-xl">Change Password</h1>

      <form className="mt-5 w-full" onSubmit={handleSubmit((data)=>console.log(data,'forhet'))}>
        <Input
          label="Old Password"
          name="oldPassword"
          type="password"
          error={errors.oldPassword?.message}
          register={register}
        />
        <Input
          label="New Password"
          name="newPassword"
          type="password"
          error={errors.newPassword?.message}
          register={register}
        />
        <Input
          label="Repeat Password"
          name="repeatPassword"
          type="password"
          error={errors.repeatPassword?.message}
          register={register}
        />
        <PrimaryButton label="Change"/>
      </form>
    </Modal>
  );
};
