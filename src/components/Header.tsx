import Link from "next/link";
import { SVGAttributes } from "react";
import Button from "./shared/Button";

export default function Header() {
  return (
    <header className="fixed w-full py-6 bg-primary z-10">
      <div className="container flex justify-between items-center">
        <Link className="block uppercase text-white font-bold text-xl" href="/">
          Crypto Fin
        </Link>
        <nav>
          <ul className="flex justify-center gap-8 text-white text-sm">
            <li>
              <Link href="#">
                Product <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
              </Link>
            </li>
            <li>
              <Link href="#">
                Template{" "}
                <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
              </Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link className="text-white text-sm mr-12" href="/sign-in">
            Sign In
          </Link>
          <Button href="#" bgColor="orange">
            Start Free
          </Button>
        </div>
      </div>
    </header>
  );
}

const ChevronDown = (props: SVGAttributes<SVGSVGElement>) => (
  <svg width="0" height="0" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <polygon
      strokeWidth="2"
      stroke="currentColor"
      points="12 20.1 0.1 8.2 2.9 5.3 12 14.4 21.1 5.3 23.9 8.2 12 20.1"
    />
  </svg>
);
