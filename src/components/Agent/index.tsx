import { useContext, useState } from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { PrimaryButton } from "../common/PrimaryButton";
import { Loader } from "../common/Loader";
import { BalanceBanner } from "../common/BalanceBanner";
import { CSVLink } from "react-csv";
import { AddAgent } from "./AddAgent";
import { DeleteAgent } from "./DeleteAgent";
import { IoMdEye, IoMdLock, IoMdUnlock } from "react-icons/io";
import { MdOutlineMoveDown } from "react-icons/md";
import { EditAgent } from "./EditAgent";
import Link from "next/link";
import { UserType } from "../types";
import {
  User,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "@/graphql/generated/schema";
import { CMSModal } from "@/context";
import { Modal } from "../common/Modal";
import { TransferStatus } from "./TransferStatus";

const Agent = () => {
  const { userInfo } = useContext(CMSModal);
  const [addModal, setAddModal] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [label, setLabel] = useState("");
  const [editUser, setEditUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>({
    _id: "",
    userName: "",
    creditLimit: 0,
  });
  const [bettingStatus, setBettingStatus] = useState(false);
  const [transferStatus, setTransferStatus] = useState(false);
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
    setLabel(userInfo?.role === "SUPERADMIN" ? "Add Agent" : "Add Member");
    setAddModal(true);
  };

  return (
    <Layout>
      <Container>
        <BalanceBanner />
        <div className="mt-8 flex justify-between w-full items-center flex-col gap-4 lg:flex-row border-b p-2">
          <h2 className="text-xl font-bold">Agent Listing</h2>
          <div className="flex gap-4 w-[300px]">
            {users?.length > 0 && (
              <CSVLink data={users} filename="agent.csv" className="w-full">
                <PrimaryButton label="Download CSV" />
              </CSVLink>
            )}
            <PrimaryButton label="Add Agent" handleClick={handleAddUser} />
          </div>
        </div>
        <div className="overflow-auto">
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
                        valign="middle"
                        onClick={() => {
                          setSelectedUser(user);
                          setEditUser(true);
                        }}
                      >
                        {user?.userName}
                      </td>
                      <td className="text-lg text-secondary">
                        {userInfo?.role === "SUPERADMIN" ? (
                          <span className="flex justify-center cursor-pointer">
                            <Link
                              href={`/agencyManagement/downline/${user._id}`}
                            >
                              <MdOutlineMoveDown />
                            </Link>
                          </span>
                        ) : (
                          "--"
                        )}
                      </td>
                      <td>{user?.status}</td>
                      <td className="text-lg text-green-500">
                        <span className="flex justify-center cursor-pointer">
                          {user.bettingStatus ? (
                            <span
                              onClick={() => {
                                setSelectedUser(user);
                                setBettingStatus(true);
                              }}
                            >
                              <IoMdUnlock />
                            </span>
                          ) : (
                            <span
                              onClick={() => {
                                setSelectedUser(user);
                                setBettingStatus(true);
                              }}
                            >
                              <IoMdLock />
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="text-lg text-green-500">
                        <span className="flex justify-center cursor-pointer">
                          {user.transferStatus ? (
                            <span
                              onClick={() => {
                                setSelectedUser(user);
                                setTransferStatus(true);
                              }}
                            >
                              <IoMdUnlock />
                            </span>
                          ) : (
                            <span
                              onClick={() => {
                                setSelectedUser(user);
                                setTransferStatus(true);
                              }}
                            >
                              <IoMdLock />
                            </span>
                          )}
                        </span>
                      </td>
                      <td
                        className="text-lg text-secondary"
                        onClick={() =>
                          sessionStorage.setItem("activeNav", "Report")
                        }
                      >
                        <Link href={`/reports/downline-report/${user._id}`}>
                          <IoMdEye />
                        </Link>
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
            <h2 className="absolute top-[50%] left-[18%] md:text-2xl md:left-[25%] lg:text-3xl font-bold lg:top-[40%] lg:left-[42%] ">
              No List to Show, please add users
            </h2>
          )}
        </div>
        {loading && <Loader />}
        {addModal && (
          <AddAgent label={label} setAddUser={setAddModal} refetch={refetch} />
        )}
        {deleteUser && (
          <DeleteAgent
            label="Agent"
            setDeleteUser={setDeleteUser}
            selectedUser={selectedUser}
            refetch={refetch}
          />
        )}
        {editUser && (
          <EditAgent userData={selectedUser} setEditUser={setEditUser} />
        )}
        {transferStatus && (
          <TransferStatus
            setStatus={setTransferStatus}
            label="Transfer"
            userData={selectedUser}
             value={false}          />
        )}
      </Container>
    </Layout>
  );
};

export default Agent;
