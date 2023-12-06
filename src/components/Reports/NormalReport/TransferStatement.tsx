import { BalanceBanner } from "@/components/common/BalanceBanner";
import Container from "@/components/common/Container";
import { Layout } from "@/components/common/Layout";
import React from "react";

export const TransferStatement = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4 mt-4">
          <BalanceBanner />
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Payer/Payee</th>
                <th>Amount</th>
              </tr>
            </thead>
          </table>
        </div>
      </Container>
    </Layout>
  );
};
