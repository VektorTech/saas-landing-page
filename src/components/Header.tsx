"use client";

import { SVGAttributes, useState, Suspense, lazy } from "react";
import Link from "next/link";

import useScrollPosition from "@/hooks/useScrollPosition";
import Button from "./Button";
const HeaderMenu = lazy(() => import("./HeaderMenu"));

export default function Header() {
  const PADDING_Y = 24;
  const [isOpen, setIsOpen] = useState(false);
  const scrollTop = useScrollPosition();
  const isSticky = scrollTop > PADDING_Y;
  const top = Math.max(0, PADDING_Y - scrollTop);

  return (
    <>
      <header
        style={{ top: `calc(${top}px * var(--small))` }}
        className={`fixed [--small:0] md:[--small:1] w-full h-[3.25rem] ${
          isSticky && "bg-primary transition-colors"
        } z-20 whitespace-nowrap ${
          isSticky ? "shadow-[0_8px_20px_rgb(50_12_192_/_30%)]" : ""
        }`}
      >
        <div className="container flex justify-between items-center h-full">
          <Link
            className="block uppercase text-white !font-black text-base sm:text-xl"
            href="/"
          >
            Crypto Fin
          </Link>
          <nav aria-label="primary navigation" className="hidden md:block h-full">
            <ul className="flex justify-center items-center gap-x-6 lg:gap-x-8 text-white text-sm h-full">
              <li className="group h-full flex flex-col justify-center">
                <Link href="#">
                  Product{" "}
                  <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
                </Link>
                <div className="bg-white hidden group-hover:block absolute top-[3.25rem] shadow-[0_8px_20px_rgb(50_12_192_/_20%)]">
                  <ul className="flex flex-col">
                    {[...Array(5)].map((_, i) => (
                      <li
                        className="text-gray-800 hover:bg-gray-100 transition-colors whitespace-nowrap w-[15.5rem]"
                        key={i}
                      >
                        <Link className="py-2 px-4 block" href="#">Product Item {i + 1}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="group h-full flex flex-col justify-center">
                <Link href="#">
                  Template{" "}
                  <ChevronDown className="w-2 h-2 inline ml-2 mb-[2px]" />
                </Link>
                <div className="bg-white hidden group-hover:block absolute top-[3.25rem] shadow-[0_8px_20px_rgb(50_12_192_/_20%)]">
                  <ul className="flex flex-col">
                    {[...Array(3)].map((_, i) => (
                      <li
                        className="text-gray-800 hover:bg-gray-100 transition-colors whitespace-nowrap w-[15.5rem]"
                        key={i}
                      >
                        <Link className="py-2 px-4 block" href="#">Template Item {i + 1}</Link>
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
            </ul>
          </nav>
          <div className="hidden md:block">
            <Link className="text-white text-sm mr-6 lg:mr-12" href="/">
              Sign In
            </Link>
            <Button
              href="#"
              bgColor="orange"
              rounded={isSticky ? "rounded-0" : "rounded-lg"}
              className="h-[3.25rem]"
            >
              Start Free
            </Button>
          </div>
          <button
            aria-label="open navigation menu"
            onClick={() => setIsOpen(true)}
            className="md:hidden"
          >
            <HamburgerMenu />
          </button>
        </div>
      </header>

      {isOpen && (
        <Suspense>
          <HeaderMenu onClose={() => setIsOpen(false)} />
        </Suspense>
      )}
    </>
  );
}

const HamburgerMenu = (props: SVGAttributes<SVGSVGElement>) => (
  <svg width="38px" height="38px" viewBox="0 0 24 24" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Menu">
        <rect fillRule="nonzero" x="0" y="0" width="24" height="24"></rect>
        <line
          x1="5"
          y1="7"
          x2="19"
          y2="7"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        ></line>
        <line
          x1="5"
          y1="17"
          x2="19"
          y2="17"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        ></line>
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        ></line>
      </g>
    </g>
  </svg>
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
