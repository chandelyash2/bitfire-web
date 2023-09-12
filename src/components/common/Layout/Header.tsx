import React, { useContext, useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { CMSModal } from "@/context";
import Cookies from "universal-cookie";
export const Header = () => {
  const { userInfo } = useContext(CMSModal);
  console.log(userInfo, "header");
  const listing = [
    {
      name: "Agent Management",
      link: "/agent",
      visible: userInfo?.role === "Superadmin",
    },

    {
      name: "User",
      link: "/users",
      visible: userInfo?.role === "Admin" || "Superadmin",
    },
    {
      name: "Account",
      link: "/account",
      visible: userInfo?.role === "Admin" || "Superadmin",
    },

    {
      name: "Logout",
      link: "/login",
      visible: true,
    },
  ];
  const [menuActive, setMenuActive] = useState(false);
  const cookie = new Cookies();

  return (
    <header>
      <Container>
        <div className="flex justify-between lg:hidden items-center">
          <Image src="/bitlogo.png" alt="logo" width="100" height="100" />
          <Image
            src="/hamburger.png"
            alt="logo"
            width="30"
            height="30"
            className="cursor-pointer md:w-[40px] md:h-[40px]"
            onClick={() => setMenuActive(true)}
          />
        </div>
        {menuActive && (
          <div className="absolute bg-header w-full h-full top-0 left-0 z-[999]">
            <Container>
              <div className="flex justify-between items-center">
                <Image src="/bitlogo.png" alt="logo" width="100" height="100" />
                <Image
                  src="/close.png"
                  alt="logo"
                  width="30"
                  height="30"
                  className="cursor-pointer md:w-[40px] md:h-[40px]"
                  onClick={() => setMenuActive(false)}
                />
              </div>
              <ul className="mt-10 flex flex-col gap-4 items-left text-xl">
                {listing.map(
                  (item, i) =>
                    item.visible && (
                      <li
                        key={item.link}
                        onClick={() => {
                          if (item.name === "Logout") {
                            cookie.remove("token");
                          }
                          setMenuActive(false);
                        }}
                      >
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    )
                )}
              </ul>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
};
