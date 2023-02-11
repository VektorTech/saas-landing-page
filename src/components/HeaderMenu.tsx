import { SVGAttributes } from "react";
import Image from "next/image";
import Link from "next/link";

import Times from "@/images/times-x.min.svg";
import Button from "./Button";

const HeaderMenu = ({ onClose }: { onClose: () => void }) => (
  <nav aria-label="primary mobile navigation" className="block animate-fade-in md:hidden w-full pb-20 fixed top-0 z-20 bg-primary">
    <button
      onClick={onClose}
      className="text-white text-xl float-right mt-5 mr-4"
    >
      <Image src={Times} width={20} height={20} alt="" />
    </button>
    <ul className="mt-20 flex flex-col gap-y-8 text-white text-xl text-center justify-center items-center">
      <li>
        <Link href="#">
          Product <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
        </Link>
      </li>
      <li>
        <Link href="#">
          Template <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
        </Link>
      </li>
      <li>
        <Link href="#">Blog</Link>
      </li>
      <li>
        <Link href="#">Pricing</Link>
      </li>
      <li>
        <Link href="#">Sign In</Link>
      </li>
      <li>
        <Button href="#" bgColor="orange" rounded="rounded-lg">
          Start Free
        </Button>
      </li>
    </ul>
  </nav>
);

const ChevronDown = (props: SVGAttributes<SVGSVGElement>) => (
  <svg width="0" height="0" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <polygon
      strokeWidth="2"
      stroke="currentColor"
      points="12 20.1 0.1 8.2 2.9 5.3 12 14.4 21.1 5.3 23.9 8.2 12 20.1"
    />
  </svg>
);

export default HeaderMenu;
