import Link from "next/link";
import React from "react";

export default function Button({
  href,
  children,
  bgColor,
  classNames = "",
  onClick,
}: ButtonProps) {
  return (
    <Link
      className={[
        "inline-flex justify-center text-base px-10 transition-colors",
        "text-white hover:text-gray-100",
        bgColor == "orange"
          ? "bg-accent hover:bg-accent-dark"
          : "bg-purple-350 hover:bg-purple-450",
        "rounded-[0.625rem] items-center h-15 capitalize",
        classNames,
      ].join(" ")}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

interface ButtonProps {
  href: string;
  children: string;
  bgColor?: "orange";
  classNames?: string;
  onClick?: () => void;
}
