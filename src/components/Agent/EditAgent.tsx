import React, { useContext, useState } from "react";
import { Modal } from "../common/Modal";
import {
  AccountStatus,
  GetUsersDocument,
  User,
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/graphql/generated/schema";
import { Input } from "../common/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editUserSchema } from "./userSchema";
import { randomPassword } from "@/utils/uniqueGenerator";
import { RSelect } from "../common/RSelect";
import { ButtonType, SecondaryButton } from "../common/SecondaryButton";
import { CMSModal } from "@/context";
import { Loader } from "../common/Loader";
import toast from "react-hot-toast";
interface EditAgentProps {
  setEditUser: (value: boolean) => void;
  userData: User | null;
}
interface FormValue {
  password: string;
  status: string;
  creditLimit: number;
  maxCredit: number;
}
export const statusOption = ["ACTIVE", "INACTIVE", "SUSPENDED", "CLOSED"];
export const EditAgent = ({ setEditUser, userData }: EditAgentProps) => {
  const { userInfo } = useContext(CMSModal);
  const [updateUser] = useUpdateUserMutation({
    refetchQueries: [GetUsersDocument],
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm({
    resolver: yupResolver(editUserSchema(userInfo.availableCredit)),
    defaultValues: {
      creditLimit: userData?.creditLimit || 0,
      maxCredit: userData?.creditLimit || 0,
    },
  });
  const submitHandler = async (value: FormValue) => {
    const res = await updateUser({
      variables: {
        input: {
          id: userData?._id,
          password: value.password ? value.password : userData?.password,
          status: value.status ? value?.status : userData?.status,
          creditLimit: value.creditLimit,
        },
      },
    });
    const output = res.data?.updateUser;
    if (output?.user) {
      setEditUser(false);
      toast.success("User Updated Successfully");
    }
    if (output?.error) {
      toast.error(output?.error?.message);
    }
  };

  return (
    <Modal close={() => setEditUser(false)}>
      {userData && (
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">Agent Information</h1>
          <h2>
            Login Name:<span className="font-bold">{userData.userName}</span>
          </h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="flex items-center gap-4">
              <span className="w-[70%]">
                <Input
                  label="Password"
                  type="text"
                  register={register}
                  name="password"
                  disabled={true}
                  error={errors.password?.message}
                />
              </span>
              <span className="mt-3">
                <SecondaryButton
                  label="Generate Password"
                  type={ButtonType.button}
                  handleClick={() => setValue("password", randomPassword())}
                />
              </span>
            </div>
            <div>
              <RSelect
                label="Status"
                option={statusOption}
                setValue={(data) => setValue("status", data)}
                error={errors.status?.message}
                setError={(data) => setError("status", data)}
                value={userData.status || ""}
              />
            </div>
            <div>
              <h2 className="font-bold text-lg">Credit</h2>
              <div className="flex justify-between">
                <Input
                  label="Credit Limit"
                  type="number"
                  register={register}
                  name="creditLimit"
                  error={errors.creditLimit?.message}
                />
                <Input
                  label="Max Credit"
                  type="number"
                  register={register}
                  name="maxCredit"
                  error={errors.maxCredit?.message}
                />
              </div>
            </div>
            <SecondaryButton label="Save" />
          </form>
        </div>
      )}
    </Modal>
  );
};
