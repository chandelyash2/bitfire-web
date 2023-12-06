import { BalanceBanner } from "@/components/common/BalanceBanner";
import Container from "@/components/common/Container";
import { Layout } from "@/components/common/Layout";
import React from "react";

export const PLByAgent = () => {
  return (
    <Layout>
      <Container>
        <div className="mt-4 flex flex-col gap-4">
          <BalanceBanner />
          <div className="border-b-2 p-2">
            <h2 className="text-xl">P&L Report by Agent</h2>
          </div>
          <div className="flex overflow-auto">
            <div className="flex-[.5]">
              <h2>Grand Total</h2>
            </div>
            <div className="flex-[1.5] border-l p-2 ">
              <h2 className="text-center font-semibold">Member</h2>
              <table>
                <thead>
                  <tr>
                    <th>Total Bets</th>
                    <th>Net Win</th>
                    <th>Comm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>759,525.80</td>
                    <td className="text-red-500">-1,830.20</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex-[.4] border-l p-2">
              <h2 className="text-center font-semibold">Agent</h2>
              <table>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-green-500">12130.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex-[.4]  border-l p-2 ">
              <h2 className="text-center font-semibold">MA</h2>
              <table>
                <thead>
                  <tr>
                    <th>Win</th>
                    <th>Comm</th>
                    <th>P&L</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-green-500">0.00</td>
                    <td className="text-green-500">0.00</td>
                    <td className="text-green-500">0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" flex-[.2] border-l p-2">
              <h2 className="text-center font-semibold">Upline</h2>
              <h2 className="text-red-500 mt-20">-9,497.00</h2>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
