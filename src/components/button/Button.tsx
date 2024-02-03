import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
  dataTestID: string;
};

export default function Button({
  text,
  onClick,
  disabled,
  dataTestID,
}: ButtonProps) {
  return (
    <button
      className="bg-green-500 hover:bg-green-600 transition-all text-white font-bold disabled:bg-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTestID}
    >
      {text}
    </button>
  );
}
