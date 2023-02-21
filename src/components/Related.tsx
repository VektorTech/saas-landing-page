"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import OpenZeppelinLogo from "@/images/related_companies/openzeppelin-logo-vector.min.svg";
import OracleLogo from "@/images/related_companies/Oracle_logo.min.svg";
import MorpheusLogo from "@/images/related_companies/morpheus-svgrepo-com.min.svg";
import SamsungLogo from "@/images/related_companies/samsung-svgrepo-com.min.svg";
import MondayLogo from "@/images/related_companies/monday-svgrepo-com.min.svg";
import SegmentLogo from "@/images/related_companies/segment-svgrepo-com.min.svg";
import ProtonetLogo from "@/images/related_companies/protonet-svgrepo-com.min.svg";

import useScrollPosition from "@/hooks/useScrollPosition";

export default function Related() {
  const ref = useRef<HTMLDivElement | null>(null);
  const innerHeightRef = useRef(0);
  const scrollTop = useScrollPosition();
  const isVisible = Number(
    (ref.current?.offsetTop ?? Infinity) < scrollTop + innerHeightRef.current &&
      (ref.current?.offsetTop ?? 0) > scrollTop
  );

  useEffect(() => {
    const resizeHandler = () => (innerHeightRef.current = innerHeight);
    resizeHandler();
    addEventListener("resize", resizeHandler);
    return () => removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <section className="px-3 max-w-[98rem] mx-auto md:px-10 text-center mt-14 md:mt-[4.75rem]">
      <h2 className="text-sm sm:text-lg md:text-2xl !font-semibold">
        Over 32k+ software businesses growing with Crypto Fin.
      </h2>
      <div ref={ref} className="mt-5 md:mt-9 h-8 overflow-hidden relative">
        <div
          style={{
            transform: `translate3d(${
              isVisible *
              ((ref.current?.offsetTop || 0) -
                (scrollTop + innerHeightRef.current))
            }px, 0, 0)`,
          }}
          className="gap-x-[7%] flex justify-between items-center h-full will-change-transform transform-gpu"
        >
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={OpenZeppelinLogo}
            alt="openzeppelin"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={OracleLogo}
            alt="oracle"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={MorpheusLogo}
            alt="morpheus"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={SamsungLogo}
            alt="samsung"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={MondayLogo}
            alt="monday"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={SegmentLogo}
            alt="segment"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={ProtonetLogo}
            alt="protonet"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={OpenZeppelinLogo}
            alt="openzeppelin"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={OracleLogo}
            alt="oracle"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={MorpheusLogo}
            alt="morpheus"
          />
          <Image
            className="w-[90px] md:w-[125px] xl:w-[136px]"
            src={SamsungLogo}
            alt="samsung"
          />
        </div>
        <div className="h-full w-full top-0 absolute bg-[linear-gradient(to_left,var(--bg-color)_0%,transparent_20%,transparent_80%,var(--bg-color)_100%)]"></div>
      </div>
    </section>
  );
}
