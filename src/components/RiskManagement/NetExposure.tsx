import React, { useState } from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { BalanceBanner } from "../common/BalanceBanner";

export const NetExposure = () => {
  const [active, setActive] = useState("My PT");
  return (
    <Layout>
      <Container>
        <div className="mt-4 flex flex-col gap-4">
          <BalanceBanner />
          <h2 className="text-xl">Net Exposure</h2>
          <div className="flex gap-4 border-b p-2">
            <span className="flex gap-2">
              <input
                type="radio"
                checked={active === "My PT"}
                onChange={() => setActive("My PT")}
              />
              <h3>My PT</h3>
            </span>
            <span className="flex gap-2">
              <input
                type="radio"
                checked={active === "Total Book"}
                onChange={() => setActive("Total Book")}
              />
              <h3>Total Book</h3>
            </span>
          </div>
          <div className="bg-primary p-2">
            <h2>Football | Italian Serie A:Empoli v Atalanta</h2>
            <h2>
              Total Net Exposure: <span className="text-green-500">0.00</span>
            </h2>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
