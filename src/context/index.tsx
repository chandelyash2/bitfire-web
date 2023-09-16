import { Admin, User } from "@/graphql/generated/schema";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CMSModal = createContext<any>(null);

export const CMSContext = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<Admin>();
  console.log(userInfo, "userInfo");
  return (
    <CMSModal.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </CMSModal.Provider>
  );
};
