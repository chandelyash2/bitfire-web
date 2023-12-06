import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export const BetList = () => {
  const [activeNav, setActiveNav] = useState("Current");
  const [betActive, setBetActive] = useState("Matched");
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <h2
          className={twMerge(
            "cursor-pointer hover:text-green-500",
            activeNav === "Current" && "border-b-2 border-green-500"
          )}
          onClick={() => setActiveNav("Current")}
        >
          Current
        </h2>
        <h2
          className={twMerge(
            "cursor-pointer hover:text-green-500",
            activeNav === "Past" && "border-b-2 border-green-500"
          )}
          onClick={() => setActiveNav("Past")}
        >
          Past
        </h2>
      </div>
      <div className="flex gap-4">
        <span className="flex gap-2">
          <input
            type="radio"
            checked={betActive === "Matched"}
            onChange={() => setBetActive("Matched")}
          />
          <h2>Matched</h2>
        </span>
        <span className="flex gap-2">
          <input
            type="radio"
            checked={betActive === "Unmatched"}
            onChange={() => setBetActive("Unmatched")}
          />
          <h2>Unmatched</h2>
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Placed</th>
            <th>Description</th>
            <th>IP Address</th>
            <th>Type</th>
            <th>Odss</th>
            <th>Stake</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
