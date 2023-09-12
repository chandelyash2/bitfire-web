import { useState } from "react";
import Container from "../common/Container";
import { Layout } from "../common/Layout";
import { PrimaryButton } from "../common/PrimaryButton";
import { AddUser } from "./AddUser";
import Image from "next/image";
import { UserRole, useGetUsersQuery } from "@/graphql/generated/schema";
import { Loader } from "../common/Loader";
import { DeleteUser } from "./DeleteUser";
import { UserType } from "../types";

export const UserListing = () => {
  const [addModal, setAddModal] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>({
    name: "",
    _id: "",
    password: "",
    userName: "",
  });
  const [label, setLabel] = useState("");

  const { loading, data, refetch } = useGetUsersQuery({
    variables: {
      input: {
        filter: UserRole.User,
        limit: 10,
        offset: 0,
      },
    },
  });
  const users = data?.getUsers?.user;
  const handleAddUser = () => {
    setLabel("Add User");
    setAddModal(true);
  };

  return (
    <Layout>
      <Container>
        <div className="flex justify-between w-full items-center">
          <h2 className="text-xl font-bold">User Listing</h2>
          <div>
            <PrimaryButton label="Add User" handleClick={handleAddUser} />
          </div>
        </div>
        {users && users?.length > 0 ? (
          <table className="mt-6 flex flex-col gap-4 w-full ">
            <thead className="text-center ">
              <tr className="flex justify-between lg:grid grid-cols-4 gap-2 border-b">
                <td>Name</td>
                <td>UserName</td>
                <td>Phone</td>
              </tr>
            </thead>

            <tbody className="flex flex-col gap-4 text-center">
              {users &&
                users.map((user) => (
                  <tr
                    className="flex justify-between lg:grid grid-cols-4 gap-2 text-center"
                    key={user?._id}
                  >
                    <td>{user?.name}</td>
                    <td>{user?.userName}</td>
                    <td>{user?.phone}</td>
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
          <AddUser
            label="Add User"
            setAddUser={setAddModal}
            refetch={refetch}
          />
        )}
        {deleteUser && (
          <DeleteUser
            setDeleteUser={setDeleteUser}
            selectedUser={selectedUser}
            refetch={refetch}
            label="User"
          />
        )}
      </Container>
    </Layout>
  );
};
