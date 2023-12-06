import React from "react";
import { Modal } from "../common/Modal";
import {
  useDeleteAdminMutation,
  useDeleteUserMutation,
} from "@/graphql/generated/schema";
import toast from "react-hot-toast";
import { PrimaryButton } from "../common/PrimaryButton";
import Container from "../common/Container";
import { Loader } from "../common/Loader";
import { AdminType, UserType } from "../types";

interface DeleteProps {
  label: string;
  selectedUser: UserType | AdminType | null;
  setDeleteUser: (value: boolean) => void;
  refetch: () => void;
}
export const DeleteUser = ({
  label,
  selectedUser,
  setDeleteUser,
  refetch,
}: DeleteProps) => {
  const [deleteUser, { loading: deleteuserLaoding }] = useDeleteUserMutation();

  const handleDelete = async () => {
    const result =
      selectedUser &&
      (await deleteUser({
        variables: {
          deleteUserId: selectedUser?._id,
        },
      }));
    const response = result?.data?.deleteUser;
    if (response?.error) {
      toast.error(response.error.message);
    }
    if (response?.user) {
      toast.success("User Deleted Successfully");
      setDeleteUser(false);
      refetch();
    }
  };
  return (
    <Modal close={() => setDeleteUser(false)}>
      <Container>
        <div className="flex flex-col gap-10 text-center">
          <h2 className="text-xl lg:text-3xl">
            Please Confirm to delete the {label}
          </h2>
          <div className="flex gap-4 justify-center">
            <PrimaryButton label="Confirm" handleClick={handleDelete} />
            <PrimaryButton
              label="Close"
              handleClick={() => setDeleteUser(false)}
            />
          </div>
        </div>
      </Container>
      {deleteuserLaoding && <Loader />}
    </Modal>
  );
};
