import Link from "next/link";

export default function Button({
  href,
  children,
  bgColor = "purple",
  rounded = "rounded-lg ",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <Link
      className={[
        "inline-flex justify-center text-base px-10 transition-colors",
        "text-white hover:text-gray-100",
        "items-center h-15 py-2 capitalize whitespace-nowrap",
        bgColors[bgColor],
        rounded,
        ...className.split(" ").map((style) => `!${style}`),
      ].join(" ")}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

const bgColors: Record<Exclude<ButtonProps["bgColor"], undefined>, string> = {
  orange: "bg-accent hover:bg-accent-dark",
  primary: "bg-primary hover:bg-primary-dark",
  purple: "bg-purple-350 hover:bg-purple-450",
};

interface ButtonProps {
  href: string;
  children: string;
  bgColor?: "orange" | "primary" | "purple";
  rounded?: string;
  className?: string;
  onClick?: () => void;
}
