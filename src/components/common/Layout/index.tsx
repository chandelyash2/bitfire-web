import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { useRouter } from "next/router";
import { Loader } from "../Loader";
import { CMSModal } from "@/context";
import { Footer } from "./Footer";
import { useMeSuperAdminQuery } from "@/graphql/generated/schema";

interface LayoutProps {
  children: React.ReactNode;
}
const img = "/home.jpg";

export const Layout = ({ children }: LayoutProps) => {
  const { loading, data } = useMeSuperAdminQuery();
  const { setUserInfo } = useContext(CMSModal);
  const response = data?.meSuperAdmin;
  const router = useRouter();
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  console.log(response, "ress");
  if (!response) {
    router.push("/login");
  }
  if (response?.superAdmin) {
    setUserInfo(response.superAdmin);
  }
  return (
    <div
      className="absolute top-0 bg-no-repeat w-screen bg-cover z-1 flex flex-col lg:flex-row"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="lg:flex-[.5]">
        {response?.superAdmin && <Sidebar />}
        <Header />
      </div>
      <div className="lg:flex-[2] lg:mt-40">{children}</div>
      <Footer />
    </div>
  );
};
