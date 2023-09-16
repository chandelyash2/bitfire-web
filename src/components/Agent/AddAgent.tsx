import { useContext, useState } from "react";
import { Input } from "../common/Input";
import { Modal } from "../common/Modal";
import { PrimaryButton, ButtonType } from "../common/PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster, toast } from "react-hot-toast";
import { Loader } from "../common/Loader";
import { agentName, randomPassword } from "@/utils/uniqueGenerator";
import * as yup from "yup";
import {
  MeDocument,
  useRegisterAdminMutation,
} from "@/graphql/generated/schema";
import { CMSModal } from "@/context";
import { agentSchema } from "../User/userSchema";

interface AddUserProps {
  label: string;
  setAddUser: (value: boolean) => void;
  refetch: () => void;
}
interface FormValues {
  name: string;
  userName: string;
  password: string;
  creditLimit: number;
}
export const AddAgent = ({ label, setAddUser, refetch }: AddUserProps) => {
  const { userInfo } = useContext(CMSModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(agentSchema(userInfo.creditLimit)),
    defaultValues: {
      userName: agentName(),
      password: randomPassword(),
    },
  });

  const [addUser, { loading: addUserLoading }] = useRegisterAdminMutation({
    refetchQueries: [MeDocument],
  });
  const submitHandler: SubmitHandler<FormValues> = async (value) => {
    const result = await addUser({
      variables: {
        input: {
          name: value.name,
          password: value.password,
          creditLimit: value.creditLimit,
          userName: value.userName,
        },
      },
    });
    const response = result.data?.registerAdmin;
    if (response?.admin) {
      toast.success("Agent Added");
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
            className="mt-5 w-full lg:w-[50%]"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="grid grid-cols-1 gap-4 ">
              <Input
                label="Name"
                name="name"
                type="text"
                error={errors.name?.message}
                register={register}
              />
              <div className="relative">
                <Input
                  label="User Name"
                  name="userName"
                  type="text"
                  error={errors.userName?.message}
                  register={register}
                  disabled={true}
                />
                {/* <Image
                  src="/refresh.png"
                  width={15}
                  height={15}
                  alt="refresh"
                  className="absolute top-[50%] right-5 cursor-pointer"
                  onClick={() => {
                    setRandomAgent(agentName());
                  }}
                /> */}
              </div>

              {/* <Input
                label="Phone"
                name="phone"
                type="text"
                error={errors.phone?.message}
                register={register}
              /> */}
              <div className="relative">
                <Input
                  label="Password"
                  name="password"
                  type="text"
                  error={errors.password?.message}
                  register={register}
                  disabled={true}
                />
                {/* <Image
                  src="/refresh.png"
                  width={15}
                  height={15}
                  alt="refresh"
                  className="absolute top-[50%] right-5 cursor-pointer"
                  onClick={() => {
                    setRandompassword(randomPassword());
                  }}
                /> */}
              </div>

              <Input
                label="Credit Limit"
                name="creditLimit"
                type="number"
                error={errors.creditLimit?.message}
                register={register}
              />
            </div>
            <div className="w-full">
              <PrimaryButton label={label} type={ButtonType.submit} />
            </div>
          </form>

          <Toaster />
          {addUserLoading && <Loader />}
        </div>
      </Modal>
    </div>
  );
};
