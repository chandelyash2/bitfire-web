import { useContext, useState } from "react";
import { Input } from "../common/Input";
import { Modal } from "../common/Modal";
import { PrimaryButton, ButtonType } from "../common/PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../Agent/userSchema";

import { toast } from "react-hot-toast";
import { Loader } from "../common/Loader";
import { randomPassword, userName } from "@/utils/uniqueGenerator";
import {
  MeDocument,
  useRegisterUserMutation,
} from "@/graphql/generated/schema";
import { CMSModal } from "@/context";
import { RSelect } from "../common/RSelect";
import { statusOption } from "../Agent/EditAgent";

interface AddUserProps {
  label: string;
  setAddUser: (value: boolean) => void;
  refetch: () => void;
}
interface FormValues {
  userName: string;
  password: string;
  phone?: string;
  creditLimit: number;
}
export const AddUser = ({ label, setAddUser, refetch }: AddUserProps) => {
  const { userInfo } = useContext(CMSModal);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(userSchema(userInfo.creditLimit)),
    defaultValues: {
      password: randomPassword(),
    },
  });

  const [addUser, { loading: addUserLoading }] = useRegisterUserMutation({
    refetchQueries: [MeDocument],
  });
  const submitHandler: SubmitHandler<FormValues> = async (value) => {
    const result = await addUser({
      variables: {
        input: {
          password: value.password,
          userName: value.userName,
          creditLimit: value.creditLimit,
        },
      },
    });
    const response = result.data?.registerUser;
    if (response?.user) {
      toast.success("User Added");
      refetch();
      setAddUser(false);
    }
    if (response?.error) {
      toast.error(response.error.message);
    }
  };
  return (
    <div>
      <Modal close={() => setAddUser(false)}>
        <h1 className="font-bold text-xl">{label} </h1>
        <div className="flex justify-center">
          <form
            className="mt-5 w-full lg:w-[80%]"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="grid grid-cols-2 gap-4 ">
              <Input
                label="User Name"
                name="userName"
                type="text"
                error={errors.userName?.message}
                register={register}
              />
              <Input
                label="Phone"
                name="phone"
                type="text"
                error={errors.phone?.message}
                register={register}
              />

              <Input
                label="Password"
                name="password"
                type="text"
                error={errors.password?.message}
                register={register}
                disabled={true}
              />

              <Input
                label="Credit Limit"
                name="creditLimit"
                type="number"
                error={errors.creditLimit?.message}
                register={register}
              />
            </div>
            <div>
              <RSelect
                label="Status"
                option={statusOption}
                setValue={(data) => setValue("status", data)}
                error={errors.status?.message}
                setError={(data) => setError("status", data)}
              />
            </div>
            <div className="w-full">
              <PrimaryButton label={label} type={ButtonType.submit} />
            </div>
          </form>
          {addUserLoading && <Loader />}
        </div>
      </Modal>
    </div>
  );
};
