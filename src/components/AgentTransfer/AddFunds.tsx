import { Input } from "../common/Input";
import { Modal } from "../common/Modal";
import { PrimaryButton } from "../common/PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addFundsSchema } from "../Agent/userSchema";
import { CMSModal } from "@/context";
import { useContext } from "react";
import {
  AddFundsDocument,
  GetAdminsDocument,
  useAddFundsMutation,
} from "@/graphql/generated/schema";
import toast from "react-hot-toast";
import { Loader } from "../common/Loader";
import { useRouter } from "next/router";
interface AddFundsProp {
  setAddFunds: (value: boolean) => void;
  adminId: string;
}
export const AddFunds = ({ setAddFunds, adminId }: AddFundsProp) => {
  const { userInfo } = useContext(CMSModal);
  const router = useRouter();
  const [addFunds, { loading: addFundsLoading }] = useAddFundsMutation({
    refetchQueries: [GetAdminsDocument],
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addFundsSchema(userInfo.creditLimit)),
  });
  const submitHandler = async (data: { amount: number }) => {
    const result = await addFunds({
      variables: {
        adminId: adminId,
        amount: data.amount,
      },
    });
    const response = result.data?.addFunds;
    if (response?.admin) {
      toast.success("Funds Added Successfully");
      setAddFunds(false);
      router.push("/agent");
    }
    if (response?.error) {
      toast.error(response.error.message);
      setAddFunds(false);
    }
  };
  return (
    <Modal close={() => setAddFunds(false)}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          type="number"
          label="Transfer Amount"
          name="amount"
          error={errors.amount?.message}
          register={register}
        />
        <PrimaryButton label="Add Funds" />
      </form>
      {addFundsLoading && <Loader />}
    </Modal>
  );
};
