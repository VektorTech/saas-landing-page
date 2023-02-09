"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import OpenZeppelinLogo from "@/images/related_companies/openzeppelin-logo-vector.svg";
import OracleLogo from "@/images/related_companies/Oracle_logo.svg";
import MorpheusLogo from "@/images/related_companies/morpheus-svgrepo-com.svg";
import SamsungLogo from "@/images/related_companies/samsung-svgrepo-com.svg";
import MondayLogo from "@/images/related_companies/monday-svgrepo-com.svg";
import SegmentLogo from "@/images/related_companies/segment-svgrepo-com.svg";
import ProtonetLogo from "@/images/related_companies/protonet-svgrepo-com.svg";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function Related() {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = Number(!!entry?.isIntersecting);
  const scrollTop = useScrollPosition();
  const innerHeightRef = useRef(0);

  useEffect(() => {
    innerHeightRef.current = innerHeight;
  }, []);

  return (
    <section className="px-3 max-w-[98rem] mx-auto md:px-10 text-center mt-14 md:mt-[4.75rem]">
      <h2 className="text-sm sm:text-lg md:text-2xl !font-[700]">
        Over 32k+ software businesses growing with Crypto Fin.
      </h2>
      <div ref={ref} className="mt-5 md:mt-9 h-8 overflow-hidden">
        <div
          style={{
            transform: `translateX(${
              isVisible *
              ((ref.current?.offsetTop || 0) -
                (scrollTop + innerHeightRef.current))
            }px)`,
          }}
          className="gap-x-[7%] flex justify-between items-center h-full"
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
        </div>
      </div>
    </section>
  );
}
