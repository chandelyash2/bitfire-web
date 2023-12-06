import React from "react";

export const AccountStatement = () => {
  return (
    <div className="mt-4">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th></th>
            <th>P&L</th>
            <th>Credit Limit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20/10/2023</td>
            <td>-</td>
            <td className="text-secondary">
              Australia v Pakistan-Match Odds-Australia
            </td>
            <td>21.1</td>
            <td>-</td>
            <td>2,121</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
