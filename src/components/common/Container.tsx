import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full px-6 lg:px-10 py-8">{children}</div>;
};

export default Container;
