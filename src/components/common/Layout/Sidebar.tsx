import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Container from "../Container";
import { User } from "@/graphql/generated/schema";
import Cookies from "universal-cookie";
import { CMSModal } from "@/context";
import { useContext, useState } from "react";
import { PrimaryButton } from "../PrimaryButton";
import { ChangePassword } from "@/components/ChangePassword";

const Sidebar = () => {
  const { userInfo } = useContext(CMSModal);
  const [changePassword, setChangePassword] = useState(false);

  const listing = [
    {
      name: "Agent Management",
      link: "/agent",
      visible: userInfo?.role === "superadmin",
    },

    {
      name: "User",
      link: "/users",
      visible: userInfo?.role === "admin",
    },
    {
      name: "Account",
      link: "/",
      visible: userInfo?.role === "admin" || "superadmin",
    },

    {
      name: "Logout",
      link: "/login",
      visible: true,
    },
  ];
  const cookie = new Cookies();
  const router = useRouter();

  return (
    <div className="hidden lg:flex flex-col h-screen w-full">
      <Container>
        <div className="flex">
          <Image src="/bitlogo.png" alt="logo" width="80" height="80" />
          <div className="flex absolute top-8 right-20 text-center gap-8">
            <div>
              <h2>
                Logged in as
                <span className="font-bold"> {userInfo?.userName}</span>
              </h2>
              <h2 className="text-secondary font-bold">{userInfo?.role}</h2>
            </div>
            <div>
              <PrimaryButton
                label="Change Password"
                handleClick={() => setChangePassword(true)}
              />
            </div>
          </div>
        </div>
        <ul className="mt-10 flex flex-col gap-4 items-center text-xl">
          {listing.map(
            (item) =>
              item.visible && (
                <li
                  key={item.link}
                  className={twMerge(
                    router.asPath === item.link
                      ? "border-b w-full text-green-400"
                      : "w-full",
                    "hover:border-b border-secondary"
                  )}
                  onClick={() => {
                    if (item.name === "Logout") {
                      cookie.remove("token");
                    }
                  }}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              )
          )}
        </ul>
        {changePassword && (
          <ChangePassword setChangePassword={setChangePassword} />
        )}
      </Container>
    </div>
  );
};

export default Sidebar;
