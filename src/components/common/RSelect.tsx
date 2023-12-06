import { AccountStatus } from "@/graphql/generated/schema";

interface RSelectProp {
  label: string;
  option: string[];
  setValue: (value: any) => void;
  error?: string;
  setError: (value: any) => void;
  value?: string;
}
export const RSelect = ({
  label,
  option,
  setValue,
  error,
  setError,
  value
}: RSelectProp) => {
  return (
    <div className="flex flex-col gap-2">
      <h2>{label}</h2>
      <select
        className="p-2 border outline-none rounded bg-transparent"
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
      >
        {!value && (
          <option disabled selected>
            Select Your Option
          </option>
        )}
        {option.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <p className="p-1 text-red-500 font-semibold">{error && error}</p>
    </div>
  );
};
