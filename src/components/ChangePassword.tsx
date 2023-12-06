import React from "react";
import { Modal } from "./common/Modal";
import { Input } from "./common/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from "./Agent/userSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "./common/PrimaryButton";
import toast from "react-hot-toast";
import { Loader } from "./common/Loader";
import { useChangePasswordMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { deleteCookie } from "@/utils/cookies";
interface ChangePasswordProp {
  setChangePassword?: (value: boolean) => void;
}
interface FormValues {
  newPassword: string;
}
export const ChangePassword = ({ setChangePassword }: ChangePasswordProp) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgetPasswordSchema),
  });
  const [changePswd, { loading }] = useChangePasswordMutation();
  const submiHandler: SubmitHandler<FormValues> = async (data) => {
    const response = await changePswd({
      variables: {
        input: {
          newPassword: data.newPassword,
        },
      },
    });
    const output = response.data?.changePassword;
    if (output?.error) {
      toast.error(output.error.message);
    }
    if (output?.user) {
      toast.success("Password Changed Successfully");
      setChangePassword && setChangePassword(false);
      router.push("/login");
      deleteCookie("token");
    }
  };
  return (
    <Modal close={() => setChangePassword && setChangePassword(false)}>
      <h1 className="font-bold text-xl">Change Password</h1>

      <form className="mt-5 w-full" onSubmit={handleSubmit(submiHandler)}>
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
        <PrimaryButton label="Change" />
        {loading && <Loader />}
      </form>
    </Modal>
  );
};
