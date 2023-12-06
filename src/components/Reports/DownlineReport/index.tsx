import { BalanceBanner } from "@/components/common/BalanceBanner";
import Container from "@/components/common/Container";
import { Layout } from "@/components/common/Layout";
import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { ActivityTable } from "./ActivityTable";
import { BalanceTable } from "./BalanceTable";
import { useRouter } from "next/router";
import { useGetUserQuery } from "@/graphql/generated/schema";
import Link from "next/link";
import { BetList } from "./BetList";
import { AccountStatement } from "./AccountStatement";
import { TransferStatement } from "./TransferStatement";

export const DownlineReport = () => {
  const [activeNav, setActiveNav] = useState(1);
  const router = useRouter();
  const adminId = router.query;
  const { data: userData, loading: userLoading } = useGetUserQuery({
    variables: {
      getUserId: adminId?.id as string,
    },
  });
  const UserData = userData?.getUser?.user;
  const navList = [
    {
      name: "Activity",
      index: 1,
      visible: UserData?.role === "ADMIN" || "USER",
    },
    {
      name: "Balance",
      index: 2,
      visible: UserData?.role === "ADMIN",
    },
    {
      name: "Bet List",
      index: 3,
      visible: UserData?.role === "ADMIN" || "USER",
    },
    {
      name: "Account Statement",
      index: 4,
      visible: UserData?.role === "ADMIN" || "USER",
    },
    {
      name: "Transfer Statement",
      index: 5,
      visible: UserData?.role === "ADMIN" || "USER",
    },
    {
      name: "Net Exposure",
      index: 6,
      visible: UserData?.role === "ADMIN" || "USER",
    },
  ];
  return (
    <Layout>
      <Container>
        <BalanceBanner />
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center">
            <Link href="/agencyManagement/listing" className="text-secondary">
              Downline Listing
            </Link>
            <IoMdArrowDropright />
            <span>{userData?.getUser?.user?.userName}</span>
          </div>
          <div className="bg-primary p-4 overflow-auto">
            <div className="flex gap-6">
              {navList.map((item) => (
                <h2
                  key={item.index}
                  className={twMerge(
                    "cursor-pointer hover:text-green-500",
                    item.index === activeNav && "border-b-2 border-green-500",
                    item.visible ? "flex" : "hidden"
                  )}
                  onClick={() => setActiveNav(item.index)}
                >
                  {item.name}
                </h2>
              ))}
            </div>
            {activeNav === 1 && <ActivityTable />}
            {activeNav === 2 && (
              <BalanceTable userData={userData?.getUser?.user || null} />
            )}
            {activeNav === 3 && <BetList />}
            {activeNav === 4 && <AccountStatement />}
            {activeNav === 5 && <TransferStatement />}
          </div>
        </div>
      </Container>
    </Layout>
  );
};
