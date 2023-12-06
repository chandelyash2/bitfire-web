import React, { useState } from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { twMerge } from "tailwind-merge";
import { BalanceBanner } from "../common/BalanceBanner";

export const Statement = () => {
  const [statementNav, setStatementNav] = useState("P&L Statement");
  return (
    <Layout>
      <Container>
        <div className="mt-4 flex flex-col gap-4">
          <BalanceBanner />
          <div className="flex gap-4">
            <h2
              className={twMerge(
                "cursor-pointer hover:text-green-500",
                statementNav === "P&L Statement" &&
                  "border-b-2 border-green-500"
              )}
              onClick={() => setStatementNav("P&L Statement")}
            >
              P&L Statement
            </h2>
            <h2
              className={twMerge(
                "cursor-pointer hover:text-green-500",
                statementNav === "Credit Statement" &&
                  "border-b-2 border-green-500"
              )}
              onClick={() => setStatementNav("Credit Statement")}
            >
              Credit Statement
            </h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th></th>
                <th>P&L</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23/10/2023 15:25</td>
                <td>Betting P&L</td>
                <td className="text-secondary">
                  Atletico MG v Cruzeiro MG - Match Odds
                </td>
                <td className="text-green-500">0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Layout>
  );
};
