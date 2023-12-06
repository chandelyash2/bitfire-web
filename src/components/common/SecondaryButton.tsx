import Link from "next/link";

export interface ButtonProp {
  label: string;
  link?: string;
  type?: ButtonType;
  handleClick?: () => void;
}

export enum ButtonType {
  button = "button",
  submit = "submit",
}

export const SecondaryButton = ({ label, type, handleClick }: ButtonProp) => {
  return (
    <button
      className={`flex rounded-lg p-2 bg-secondary items-center justify-center font-semibold lg:text-base w-full hover:bg-primary`}
      type={type}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
