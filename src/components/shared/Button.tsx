import Link from "next/link";

export default function Button({
  href,
  children,
  bgColor,
  rounded = "rounded-lg ",
  className = "",
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
        "items-center h-15 capitalize",
        rounded,
        ...className.split(" ").map(style => `!${style}`),
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
  rounded?: string;
  className?: string;
  onClick?: () => void;
}
