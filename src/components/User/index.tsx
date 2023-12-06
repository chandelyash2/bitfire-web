import { useState } from "react";
import Container from "../common/Container";
import { Layout } from "../common/Layout";
import { PrimaryButton } from "../common/PrimaryButton";
import { AddUser } from "./AddUser";
import Image from "next/image";
import { User, useGetUsersQuery } from "@/graphql/generated/schema";
import { Loader } from "../common/Loader";
import { DeleteUser } from "./DeleteUser";
import { UserType } from "../types";
import { CSVLink } from "react-csv";
import { BalanceBanner } from "../common/BalanceBanner";
import Link from "next/link";
import { IoMdUnlock, IoMdLock, IoMdEye } from "react-icons/io";
import { MdOutlineMoveDown } from "react-icons/md";
import { EditAgent } from "../Agent/EditAgent";

export const UserListing = () => {
  const [addModal, setAddModal] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>({
    _id: "",
    password: "",
    userName: "",
  });
  const [label, setLabel] = useState("");

  const { loading, data, refetch } = useGetUsersQuery({
    variables: {
      input: {
        limit: 10,
        offset: 0,
      },
    },
  });
  const users: any = data?.getUsers?.user;
  const handleAddUser = () => {
    setLabel("Add User");
    setAddModal(true);
  };

  return (
    <Layout>
      <Container>
        <BalanceBanner />
        <div className="mt-8 flex justify-between w-full items-center">
          <h2 className="text-xl font-bold">Member Listing</h2>
          <div className="flex gap-4 w-[300px]">
            {users && users?.length > 0 && (
              <CSVLink data={users} filename="agent.csv" className="w-full">
                <PrimaryButton label="Download CSV" />
              </CSVLink>
            )}
            <PrimaryButton label="Add User" handleClick={handleAddUser} />
          </div>
        </div>
        {users && users?.length > 0 ? (
          <table className="mt-6">
            <thead>
              <tr className="text-sm">
                <th>UserName</th>
                <th>Downline</th>
                <th>Status</th>
                <th>Betting Status</th>
                <th>Transfer Status</th>
                <th>Details</th>
                <th>Net Exposure</th>
                <th>Take</th>
                <th>Give</th>
                <th>Available Credit</th>
                <th>Credit Limit</th>
                <th>Created</th>
              </tr>
            </thead>

            <tbody>
              {users &&
                users.map((user: User) => (
                  <tr key={user?._id}>
                    <td
                      className="text-secondary cursor-pointer"
                      onClick={() => {
                        setSelectedUser(user);
                        setEditUser(true);
                      }}
                    >
                      {user?.userName}
                    </td>
                    <td className="flex justify-center text-lg text-secondary">
                      --
                    </td>
                    <td>{user?.status}</td>
                    <td className="text-lg text-green-500">
                      <span className="flex justify-center cursor-pointer">
                        {user.bettingStatus ? <IoMdUnlock /> : <IoMdLock />}
                      </span>
                    </td>
                    <td className="text-lg text-green-500">
                      <span className="flex justify-center cursor-pointer">
                        {user.transferStatus ? <IoMdUnlock /> : <IoMdLock />}
                      </span>
                    </td>
                    <td className="flex justify-center text-lg text-secondary">
                      <IoMdEye />
                    </td>
                    <td className="text-green-400">0.00</td>
                    <td className="text-green-400">0.00</td>
                    <td className="text-green-400">0.00</td>
                    <td>{user.availableCredit}</td>
                    <td>{user.creditLimit}</td>
                    <td>{user.createdAt}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h2 className="absolute top-[50%] left-[18%] md:text-2xl md:left-[25%] lg:text-3xl font-bold lg:top-[40%] lg:left-[42%] z-1 ">
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
        {editUser && (
          <EditAgent userData={selectedUser} setEditUser={setEditUser} />
        )}
      </Container>
    </Layout>
  );
};
