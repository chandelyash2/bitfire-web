import React from "react";

export const TransferStatement = () => {
  return (
    <div className="mt-4">
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-3">
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="grid grid-cols-3 text-center items-center">
            <td>18/10/2023 13:00</td>
            <td>Transfer In</td>
            <td>1,21</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
