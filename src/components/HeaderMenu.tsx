"use client";

import { SVGAttributes, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Times from "@/images/times-x.min.svg";
import Button from "./Button";

const HeaderMenu = ({ onClose }: { onClose: () => void }) => {
  const [subMenu, setSubMenu] = useState({
    product: false,
    template: false,
  });

  return (
    <nav
      aria-label="primary mobile navigation"
      className="block animate-fade-in md:hidden w-full pb-20 fixed top-0 z-20 bg-primary"
    >
      <button
        onClick={onClose}
        className="text-white text-xl float-right mt-5 mr-4"
      >
        <Image src={Times} width={20} height={20} alt="" />
      </button>
      <ul className="mt-20 flex flex-col gap-y-8 text-white text-xl text-center justify-center items-center">
        <li
          className="h-full flex flex-col justify-center"
          onClick={() => setSubMenu({ ...subMenu, product: !subMenu.product })}
        >
          <span>
            Product <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
          </span>
          <div
            className={`bg-white ${
              subMenu.product ? "h-[13.125rem]" : "h-0"
            } transition-[height_0.3s] overflow-hidden`}
          >
            <ul className="flex flex-col">
              {[...Array(5)].map((_, i) => (
                <li
                  className="text-gray-800 hover:bg-gray-100 transition-colors whitespace-nowrap w-[15.5rem] text-base"
                  key={i}
                >
                  <Link className="py-2 px-4 block" href="#">
                    Product Item {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li
          className="h-full flex flex-col justify-center"
          onClick={() =>
            setSubMenu({ ...subMenu, template: !subMenu.template })
          }
        >
          <span>
            Template <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
          </span>
          <div
            className={`bg-white ${
              subMenu.template ? "h-[7.875rem]" : "h-0"
            } transition-[height_0.3s] overflow-hidden`}
          >
            <ul className="flex flex-col">
              {[...Array(3)].map((_, i) => (
                <li
                  className="text-gray-800 hover:bg-gray-100 transition-colors whitespace-nowrap w-[15.5rem] text-base"
                  key={i}
                >
                  <Link className="py-2 px-4 block" href="#">
                    Template Item {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
};

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
