import { User, useUpdateUserMutation } from "@/graphql/generated/schema";
import { Modal } from "../common/Modal";
import { PrimaryButton } from "../common/PrimaryButton";

interface TransferStatusProp {
  setStatus: (value: boolean) => void;
  label: string;
  value: boolean;
  userData: User | null;
}
export const TransferStatus = ({
  setStatus,
  label,
  userData,
  value,
}: TransferStatusProp) => {
  const [updateUser] = useUpdateUserMutation();
  return (
    <Modal close={() => setStatus(false)}>
      <div className="flex flex-col gap-4">
        <h2>
          Are you sure you want to {value ? "lock" : "unlock"} {label} status!!
        </h2>
        <div className="flex gap-4">
          <PrimaryButton
            label="Confirm"
            handleClick={() =>
              updateUser({
                variables: {
                  input: {
                    transferStatus: true,
                  },
                },
              })
            }
          />
          <PrimaryButton label="Close" />
        </div>
      </div>
    </Modal>
  );
};
