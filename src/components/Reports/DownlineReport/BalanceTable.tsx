import { User } from "@/graphql/generated/schema";

interface BalanceTableProps {
  userData: User | null;
}
export const BalanceTable = ({ userData }: BalanceTableProps) => {
  console.log(userData,"userData");
  
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex w-full lg:w-[50%]">
        <span className="flex-1">Net Exposure</span>
        <span className="flex-2 text-green-400">0.00</span>
      </div>
      <div className="flex lg:w-[50%]">
        <span className="flex-1">Balance Down</span>
        <span className="flex-2 text-green-400">0.00</span>
      </div>
      <div className="flex lg:w-[50%]">
        <span className="flex-1">Balance Up</span>
        <span className="flex-2 text-red-400">-0.00</span>
      </div>
      <div className="flex lg:w-[50%]">
        <span className="flex-1">Credit Limit</span>
        <span className="flex-2">{userData?.creditLimit}</span>
      </div>
      <div className="flex lg:w-[50%]">
        <span className="flex-1">Available Credit</span>
        <span className="flex-2">{userData?.availableCredit}</span>
      </div>
      <div className="flex lg:w-[50%]">
        <span className="flex-1">Total Credit given to members</span>
        <span className="flex-2">
      {userData?.creditGivenToUser}
        </span>
      </div>
    </div>
  );
};
