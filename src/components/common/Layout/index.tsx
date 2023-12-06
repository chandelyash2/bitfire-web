import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { useRouter } from "next/router";
import { Loader } from "../Loader";
import { CMSModal } from "@/context";
import { Footer } from "./Footer";
import { useMeQuery } from "@/graphql/generated/schema";
import { Toaster } from "react-hot-toast";
import { deleteCookie } from "@/utils/cookies";
import { ChangePassword } from "@/components/ChangePassword";

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
  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type == 1) {
        deleteCookie("token");
        router.push("/login");
      }
    }
  }, []);

  useEffect(() => {
    if (response?.user) {
      setUserInfo(response.user);
    }
  }, [response]);

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

  return (
    <div
      className="absolute top-0 bg-no-repeat w-screen h-screen bg-cover z-1 flex flex-col justify-between"
      style={{ backgroundImage: `url(${img})` }}
    >
      {!response?.user?.loginStep && response?.user?.role === "ADMIN" && (
        <ChangePassword />
      )}
      <Header />
      <div className="lg:flex justify-center">
        <div className="lg:flex-[.5]">
          <Sidebar />
        </div>
        <div className="lg:flex-[2] lg:mt-32">{children}</div>
        <Toaster />
      </div>
      <Footer />
    </div>
  );
};
