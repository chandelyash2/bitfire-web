import React, { useState } from "react";

export const ActivityTable = () => {
  const [active, setActive] = useState("Agent");
  return (
    <div className="mt-4">
      <div className="flex gap-4">
        <span className="flex gap-2">
          <input
            type="radio"
            checked={active === "Agent"}
            onChange={() => setActive("Agent")}
          />
          <h2>Agent</h2>
        </span>
        <span className="flex gap-2">
          <input
            type="radio"
            checked={active === "All Members"}
            onChange={() => setActive("All Members")}
          />
          <h2>All Members</h2>
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Today</th>
            <th>3days</th>
            <th>7days</th>
            <th>30days</th>
            <th>Lifetime</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Win</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
          </tr>
          <tr>
            <td>Comm</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
          </tr>
          <tr>
            <td>P&L</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
            <td className="text-green-500">0.00</td>
          </tr>
          <tr>
            <td>Turnover</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
