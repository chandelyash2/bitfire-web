import Image from "next/image";
import { Input } from "../common/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonType, PrimaryButton } from "../common/PrimaryButton";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { Loader } from "../common/Loader";
import { useState } from "react";
import { useAuthLoginMutation } from "@/graphql/generated/schema";
interface FormValues {
  userName: string;
  password: string;
}

const FormSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
export const Login = () => {
  const [viewPswd, setViewPswd] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
  const [login, { loading: userLoading }] = useAuthLoginMutation();
  const router = useRouter();
  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const result = await login({
      variables: {
        input: {
          userName: data.userName,
          password: data.password,
        },
      },
    });
    const response = result.data?.authLogin;
    console.log(response,"respinse");
    
    if (response?.user) {
      response.token && sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("activeNav", "Account");
      router.push("/");
    }
    if (response?.error) {
      toast.error(response?.error?.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10 lg:flex-row">
      <div className="flex-[.8] flex flex-col items-center w-full ">
        <div className="flex flex-col gap-10 text-left items-center">
          <Image src="/bitlogo.png" width="100" height="100" alt="logo" />
          <h1 className="text-3xl font-bold lg:text-5xl">Welcome Back!</h1>
          <h3 className="text-xl font-semibold">Watch. Improve. Achieve.</h3>
        </div>
      </div>
      <div className="flex-[1] flex flex-col items-center">
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-xl font-bold lg:text-3xl">
            Log in to your account
          </h2>
          <span>Welcome back! Please enter your details</span>
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(submitHandler)}
          >
            <Input
              label="Username"
              name="userName"
              type="text"
              register={register}
              error={errors.userName?.message}
            />
            <div className="relative">
              <Input
                label="Password"
                name="password"
                type={viewPswd ? "text" : "password"}
                error={errors.password?.message}
                register={register}
              />
              <Image
                src={!viewPswd ? "/hide.png" : "/view.png"}
                width={16}
                height={15}
                alt="refresh"
                className="absolute top-[50%] right-5 cursor-pointer"
                onClick={() => setViewPswd((prev) => !prev)}
              />
            </div>
            <PrimaryButton label="Submit" type={ButtonType.submit} />
          </form>
          {userLoading && <Loader />}
          <Toaster />
        </div>
      </div>
    </div>
  );
};
