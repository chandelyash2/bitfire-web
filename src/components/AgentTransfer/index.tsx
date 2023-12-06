import { BalanceBanner } from "../common/BalanceBanner";
import Container from "../common/Container";
import { Layout } from "../common/Layout";
import { useState } from "react";
import { Loader } from "../common/Loader";
import toast from "react-hot-toast";
import { SecondaryButton } from "../common/SecondaryButton";
import { AddFunds } from "./AddFunds";
import { useGetUsersQuery } from "@/graphql/generated/schema";

export const AgentTransfer = () => {
  const [userName, setUserName] = useState("");
  const [addFunds, setAddFunds] = useState(false);
  const { loading, data } = useGetUsersQuery({
    variables: {
      input: {
        limit: 10,
        offset: 0,
      },
    },
  });
  const UserData = data?.getUsers?.user;
  console.log(UserData, "asas");

  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4">
          <BalanceBanner />
          <div
            className="flex p-4 flex-col gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #b72576, #a6247b, #94257f, #802782, #6a2983, #552b7d, #3f2a76, #2a296d, #16255b, #061f49, #011936, #011024)",
            }}
          >
            <div className="flex flex-col gap-2 border-b p-2">
              <h1 className="text-2xl w-full">Transfer Credit</h1>
              <div className="flex gap-2 items-center">
                <span>Search by Login Name</span>
                <span className="border-2 rounded p-[2px]">
                  <input
                    placeholder="UserName"
                    className="outline-none bg-transparent"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </span>
                <div className="w-32">
                  {/* <SecondaryButton
                    label="Search"
                    handleClick={async () => {
                      const res = await getuser({
                        variables: {
                          userName: userName,
                        },
                      });
                      const error = res.data?.getuser?.error;
                      if (error) {
                        toast.error(error.message);
                      }
                    }}
                  /> */}
                </div>
              </div>
              {loading && <Loader />}
            </div>
            <div>
              {UserData && (
                <table className="mt-6 flex flex-col gap-4 whitespace-nowrap w-full">
                  <thead>
                    <tr className="grid grid-cols-9 gap-2  border-b">
                      <td>UserName</td>
                      <td>Status</td>
                      <td>Net Exposure</td>
                      <td>Take</td>
                      <td>Give</td>
                      <td>Available Credit</td>
                      <td>Credit Limit</td>
                    </tr>
                  </thead>
                  <tbody>
                    {UserData.map((user) => (
                      <tr
                        className="grid grid-cols-9 gap-2 text-center items-center"
                        key={user?._id}
                      >
                        <td>{user?.userName}</td>
                        <td>{user?.status ? "Active" : "Inactive"}</td>
                        <td className="text-green-400">0.00</td>
                        <td className="text-green-400">0.00</td>
                        <td className="text-green-400">0.00</td>
                        <td>{user?.availableCredit}</td>
                        <td>{user?.creditLimit}</td>
                        <td className="text-secondary cursor-pointer">
                          Transfer
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          {/* {addFunds && (
            // <AddFunds setAddFunds={setAddFunds} userId={user?._id || ""} />
          )} */}
        </div>
      </Container>
    </Layout>
  );
};
