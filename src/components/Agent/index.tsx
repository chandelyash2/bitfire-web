import { useState } from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { PrimaryButton } from "../common/PrimaryButton";
import { AdminRole, User, useGetAdminsQuery } from "@/graphql/generated/schema";
import { AdminType, UserType } from "../types";
import Image from "next/image";
import { Loader } from "../common/Loader";
import { AddUser } from "../User/AddUser";
import { DeleteUser } from "../User/DeleteUser";
import { BalanceBanner } from "../common/BalanceBanner";
import { CSVLink } from "react-csv";

const Agent = () => {
  const [addModal, setAddModal] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [label, setLabel] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserType | null | AdminType>(
    {
      name: "",
      _id: "",
      userName: "",
      creditLimit: 0,
      status: false,
    }
  );
  const { loading, data, refetch } = useGetAdminsQuery({
    variables: {
      input: {
        filter: AdminRole.Admin,
        limit: 10,
        offset: 0,
      },
    },
  });
  const users:any = data?.getAdmins?.admin;
  const handleAddUser = () => {
    setLabel("Add Agent");
    setAddModal(true);
  };

  return (
    <Layout>
      <Container>
        <BalanceBanner />
        <div className="mt-8 flex justify-between w-full items-center flex-col gap-4 lg:flex-row border-b p-2">
          <h2 className="text-xl font-bold">Agent Listing</h2>
          <div className="flex gap-4 w-[300px]">
            <CSVLink data={users} filename="agent.csv" className="w-full">
              <PrimaryButton label="Download CSV" />
            </CSVLink>

            <PrimaryButton label="Add Agent" handleClick={handleAddUser} />
          </div>
        </div>
        {users && users?.length > 0 ? (
          <table className="mt-6 flex flex-col gap-4 w-full overflow-y">
            <thead className="text-center ">
              <tr className="flex justify-between lg:grid grid-cols-7 gap-2 border-b">
                <td>Name</td>
                <td>UserName</td>
                <td>Status</td>
                <td>Net Exposure</td>
                <td>Take</td>
                <td>Credit Limit</td>
              </tr>
            </thead>

            <tbody className="flex flex-col gap-4 text-center">
              {users &&
                users.map((user:User) => (
                  <tr
                    className="flex justify-between lg:grid grid-cols-7 gap-2 text-center"
                    key={user?._id}
                  >
                    <td>{user?.name}</td>
                    <td>{user?.userName}</td>
                    <td>{user?.status ? "Active" : "Inactive"}</td>
                    <td className="text-green-400">0.00</td>
                    <td className="text-green-400">0.00</td>
                    <td>{user?.creditLimit}</td>

                    <td>
                      <div className="flex">
                        <Image
                          src="/edit.png"
                          width={20}
                          height={20}
                          alt="'edit"
                          className="cursor-pointer"
                        />
                        /
                        <Image
                          src="/delete.png"
                          width={25}
                          height={25}
                          alt="'delete"
                          className="cursor-pointer"
                          onClick={() => {
                            setDeleteUser(true);
                            setSelectedUser(user);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h2 className="absolute top-[50%] left-[18%] md:text-2xl md:left-[25%] lg:text-3xl font-bold lg:top-[40%] lg:left-[42%] ">
            No List to Show, please add users
          </h2>
        )}
        {loading && <Loader />}
        {addModal && (
          <AddUser label={label} setAddUser={setAddModal} refetch={refetch} />
        )}
        {deleteUser && (
          <DeleteUser
            label="Agent"
            setDeleteUser={setDeleteUser}
            selectedUser={selectedUser}
            refetch={refetch}
          />
        )}
      </Container>
    </Layout>
  );
};

export default Agent;
