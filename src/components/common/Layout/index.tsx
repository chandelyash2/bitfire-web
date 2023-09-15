import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { useRouter } from "next/router";
import { Loader } from "../Loader";
import { CMSModal } from "@/context";
import { Footer } from "./Footer";
import { useMeQuery } from "@/graphql/generated/schema";

interface LayoutProps {
  children: React.ReactNode;
}
const img = "/home.jpg";

export const Layout = ({ children }: LayoutProps) => {
  const { loading, data } = useMeQuery({
    fetchPolicy: "no-cache",
  });
  const { setUserInfo } = useContext(CMSModal);
  const response = data?.me;
  const router = useRouter();
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (!response) {
    router.push("/login");
  }
  if (response?.admin) {
    setUserInfo(response.admin);
  }
  return (
    <div
      className="absolute top-0 bg-no-repeat w-screen h-screen bg-cover z-1 flex flex-col justify-between"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Header />
      <div className="lg:flex justify-center">
        <div className="lg:flex-[.5]">{response?.admin && <Sidebar />}</div>
        <div className="lg:flex-[2] lg:mt-32">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
