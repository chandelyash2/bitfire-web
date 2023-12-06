import { BalanceBanner } from "@/components/common/BalanceBanner";
import Container from "@/components/common/Container";
import { Layout } from "@/components/common/Layout";
import { Loader } from "@/components/common/Loader";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import {
  User,
  useGetUserQuery,
  useGetUsersQuery,
} from "@/graphql/generated/schema";
import Link from "next/link";

import { useRouter } from "next/router";
import React from "react";
import { CSVLink } from "react-csv";
import { IoMdArrowDropright, IoMdEye, IoMdLock } from "react-icons/io";

export const Downline = () => {
  const router = useRouter();
  const adminId = router.query;
  const { data: userData, loading: userLoading } = useGetUserQuery({
    variables: {
      getUserId: adminId?.id as string,
    },
  });
  const { data, loading } = useGetUsersQuery({
    variables: {
      input: {
        id: adminId?.id as string,
      },
    },
  });
  const usersData: any = data?.getUsers?.user;

  return (
    <Layout>
      <Container>
        <BalanceBanner />
        <div className="mt-8 flex justify-between w-full items-center flex-col gap-4 lg:flex-row border-b p-2">
          <h2 className="text-xl font-bold">Agent Listing</h2>
          <div className="flex gap-4 w-[300px]">
            {usersData && usersData?.length > 0 && (
              <CSVLink data={usersData} filename="agent.csv" className="w-full">
                <PrimaryButton label="Download CSV" />
              </CSVLink>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="flex items-center mt-4">
            <Link href="/agencyManagement/listing" className="text-secondary">
              Downline Listing
            </Link>
            <IoMdArrowDropright />
            <span>{userData?.getUser?.user?.userName}</span>
          </span>
          <div className="overflow-auto">
            {usersData && usersData.length > 0 ? (
              <table>
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
                  {usersData?.map((user: User) => (
                    <tr key={user?._id}>
                      <td className="text-secondary cursor-pointer">
                        {user?.userName}
                      </td>
                      <td className="text-lg text-secondary">--</td>
                      <td>{user?.status ? "Active" : "Inactive"}</td>
                      <td className="text-lg text-green-500">
                        <span className="flex justify-center cursor-pointer">
                          <IoMdLock />
                        </span>
                      </td>
                      <td className="text-lg text-green-500">
                        <span className="flex justify-center cursor-pointer">
                          <IoMdLock />
                        </span>
                      </td>
                      <td className=" text-lg text-secondary">
                        <Link href={`/reports/downline-report/${user._id}`}>
                          <IoMdEye />
                        </Link>
                      </td>
                      <td className="text-green-400">0.00</td>
                      <td className="text-green-400">0.00</td>
                      <td className="text-green-400">0.00</td>
                      <td>{user?.availableCredit}</td>
                      <td>{user?.creditLimit}</td>
                      <td>{user?.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h2 className="absolute top-[50%] left-[18%] md:text-2xl md:left-[25%] lg:text-3xl font-bold lg:top-[40%] lg:left-[42%] ">
                No Members List to Show
              </h2>
            )}
          </div>
          {loading && <Loader />}
        </div>
      </Container>
    </Layout>
  );
};
