import React, { useContext, useState } from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { BalanceBanner } from "../common/BalanceBanner";
import { useGetAdminAccountQuery } from "@/graphql/generated/schema";
import { Loader } from "../common/Loader";

export const Account = () => {
  const { data, loading } = useGetAdminAccountQuery();
  const adminData = data?.getAdminAccount?.admin;
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
            <h1 className="text-2xl border-b p-2 w-full">
              Balance Information
            </h1>
            <div className="flex lg:w-[50%]">
              <span className="flex-1">Net Exposure</span>
              <span className="flex-2 text-green-400">0.00</span>
            </div>
            <div className="flex lg:w-[50%]">
              <span className="flex-1">Balance Down</span>
              <span className="flex-2 text-green-400">0.00</span>
            </div>
            <div className="flex lg:w-[50%]">
              <span className="flex-1">Balance Up</span>
              <span className="flex-2 text-red-400">-0.00</span>
            </div>
            <div className="flex lg:w-[50%]">
              <span className="flex-1">Credit Limit</span>
              <span className="flex-2">
                {adminData?.creditLimit?.toLocaleString("en-US")}
              </span>
            </div>
            <div className="flex lg:w-[50%]">
              <span className="flex-1">Available Credit</span>
              <span className="flex-2">
                {adminData?.availableCredit?.toLocaleString("en-US")}
              </span>
            </div>
            <div className="flex lg:w-[50%]">
              <span className="flex-1">Total credit given to Agents</span>
              <span className="flex-2">
                {adminData?.creditGivenToAgent?.toLocaleString("en-US")}
              </span>
            </div>
            <div className="flex lg:w-[50%]">
              <span className="flex-1">Total credit distributed by Agents</span>
              <span className="flex-2">0.00</span>
            </div>
          </div>
          {loading && <Loader />}
        </div>
      </Container>
    </Layout>
  );
};
