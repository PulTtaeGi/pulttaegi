import React from "react";
import "../tailwind.css";

type PrimaryButtonProps = {
  placeholder: string;
  type: string;
  ref: React.RefObject<HTMLInputElement>;
};

export default function PrimaryInput({
  placeholder,
  type,
  ref,
}: PrimaryButtonProps) {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className="w-full pl-8 p-3 text-xl text-green-4 font-bold tracking-tighter bg-gray-100 placeholder-primary rounded-xl outline-0"
    />
  );
}
