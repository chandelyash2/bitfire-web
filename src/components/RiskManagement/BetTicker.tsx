import React from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { BalanceBanner } from "../common/BalanceBanner";

export const BetTicker = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4 mt-4">
          <BalanceBanner />
          <h2 className="text-xl border-b p-2">Bet Ticker</h2>
          <div className="overflow-auto">
            <table>
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Event</th>
                  <th>Market</th>
                  <th>Selection</th>
                  <th>Odds req.</th>
                  <th>Avg mathced</th>
                  <th>Matched</th>
                  <th>Unmatched</th>
                  <th>Profit/Liability</th>
                  <th>Last updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>xda991</td>
                  <td>David Fork...</td>
                  <td>Match Odds</td>
                  <td>Alejandro Davidovich Fokina</td>
                  <td>2.96</td>
                  <td>3.08</td>
                  <td>100</td>
                  <td>0</td>
                  <td>201</td>
                  <td>11:30</td>
                </tr>
              </tbody>{" "}
            </table>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
