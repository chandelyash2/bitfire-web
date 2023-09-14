import { CMSModal } from "@/context";
import React, { useContext } from "react";

export const BalanceBanner = () => {
  const { userInfo } = useContext(CMSModal);
  return (
    <div className="flex gap-6 items-center bg-primary p-4 text-center">
      <h2>
        Balance Down:<span className="text-green-400"> 0</span>
      </h2>
      <h2>
        Balance Up:<span className="text-red-400"> 0</span>
      </h2>
      <h2>
        Available Credit:
        <span className="">
          {userInfo?.availableCredit.toLocaleString("en-US")}.00
        </span>
      </h2>
    </div>
  );
};
