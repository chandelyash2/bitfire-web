import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Container from "../Container";
import { CMSModal } from "@/context";
import { useContext, useState } from "react";
import { PrimaryButton } from "../PrimaryButton";
import { ChangePassword } from "@/components/ChangePassword";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdLogOut } from "react-icons/io";
import { deleteCookie } from "@/utils/cookies";
const Sidebar = () => {
  const { userInfo } = useContext(CMSModal);

  const [changePassword, setChangePassword] = useState(false);
  const [activeNav, setActiveNav] = useState(
    sessionStorage.getItem("activeNav")
  );
  const listing = [
    {
      name: "Agency Management",
      visible: userInfo?.role === "ADMIN" || "SUPERADMIN",
      subLinks: [
        {
          name:
            userInfo?.role === "SUPERADMIN"
              ? "Agent Listing"
              : "Member Listing",
          link: "/agencyManagement/listing",
        },
        {
          name: "Position Taking Listing",
          link: "/agencyManagement/position",
        },
        {
          name: "Transfer",
          link: "/agencyManagement/transfer",
        },
      ],
    },

    {
      name: "Report",
      visible: userInfo?.role === "ADMIN" || "SUPERADMIN",
      subLinks: [
        {
          name: "P&L Report by Agent",
          link: "/reports/p&l-by-agent",
        },
        {
          name: "P&L Report by Market",
          link: "/reports/p&l-by-market",
        },
        {
          name: "Bet List",
          link: "/reports/bet-list",
        },
        {
          name: "Transfer Statement",
          link: "/reports/transferStatement",
        },
      ],
    },
    {
      name: "Risk Management",
      visible: userInfo?.role === "ADMIN" || "SUPERADMIN",
      subLinks: [
        { name: "Net Exposure", link: "/riskManagement/netExposure" },
        {
          name: "Bet Ticker",
          link: "/riskManagement/betTicker",
        },
      ],
    },
    {
      name: "Account",
      visible: userInfo?.role === "ADMIN" || "SUPERADMIN",
      subLinks: [
        {
          name: "Balance",
          link: "/account/balance",
        },
        {
          name: "Statement",
          link: "/account/statement",
        },
      ],
    },
    {
      name: "Commission",
      link: "/commission",
      visible: userInfo?.role === "SUPERADMIN",
    },
  ];
  const router = useRouter();

  return (
    <div className="hidden lg:flex flex-col h-screen w-full">
      <Container>
        <div className="flex">
          <Link href="/account/balance">
            <Image src="/bitlogo.png" alt="logo" width="80" height="80" />
          </Link>
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
            <Link
              href="/login"
              onClick={() => deleteCookie("token")}
              className="flex items-center font-semibold"
            >
              <IoMdLogOut />
              <h2> Logout</h2>
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 text-lg">
          {listing.map((item) => (
            <div key={item.name}>
              <div
                className={twMerge(
                  " items-center cursor-pointer",
                  item.visible ? "flex" : "hidden"
                )}
                onClick={() => {
                  sessionStorage.setItem("activeNav", item.name);
                  setActiveNav(item.name);
                  item.link && router.push(item.link);
                }}
              >
                <h2 className="flex-1">{item.name}</h2>
                {item.subLinks && (
                  <span>
                    {activeNav === item.name ? (
                      <IoMdArrowDropup />
                    ) : (
                      <IoMdArrowDropdown />
                    )}
                  </span>
                )}
              </div>
              {item.subLinks && activeNav === item.name && (
                <div className="flex flex-col gap-2 bg-header p-3 text-base">
                  {item.subLinks.map((sub) => (
                    <Link
                      href={sub.link}
                      key={sub.link}
                      className={twMerge(
                        router.asPath === sub.link &&
                          "border-b border-green-500"
                      )}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {changePassword && (
          <ChangePassword setChangePassword={setChangePassword} />
        )}
      </Container>
    </div>
  );
};

export default Sidebar;
