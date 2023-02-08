import Image from "next/image";

import OpenZeppelinLogo from "@/images/related_companies/openzeppelin-logo-vector.svg";
import OracleLogo from "@/images/related_companies/Oracle_logo.svg";
import MorpheusLogo from "@/images/related_companies/morpheus-svgrepo-com.svg";
import SamsungLogo from "@/images/related_companies/samsung-svgrepo-com.svg";
import MondayLogo from "@/images/related_companies/monday-svgrepo-com.svg";
import SegmentLogo from "@/images/related_companies/segment-svgrepo-com.svg";
import ProtonetLogo from "@/images/related_companies/protonet-svgrepo-com.svg";

export default function Related() {
  return (
    <section className="px-3 md:px-20 text-center mt-14 md:mt-[4.75rem]">
      <h2 className="text-sm sm:text-lg md:text-2xl font-[600]">
        Over 32k+ software businesses growing with Crypto Fin.
      </h2>
      <div className="mt-5 md:mt-9 h-8 gap-x-10 flex justify-between items-center overflow-hidden">
        <Image className="w-[90px] md:w-[125px] xl:w-[136px]" src={OpenZeppelinLogo} alt="openzeppelin" />
        <Image className="w-[90px] md:w-[125px] xl:w-[136px]" src={OracleLogo} alt="oracle" />
        <Image className="w-[90px] md:w-[125px] xl:w-[136px]" src={MorpheusLogo} alt="morpheus" />
        <Image className="w-[90px] md:w-[125px] xl:w-[136px]" src={SamsungLogo} alt="samsung" />
        <Image className="w-[90px] md:w-[125px] xl:w-[136px]" src={MondayLogo} alt="monday" />
        <Image className="w-[90px] md:w-[125px] xl:w-[136px]" src={SegmentLogo} alt="segment" />
        <Image className="w-[90px] md:w-[125px] xl:w-[136px]" src={ProtonetLogo} alt="protonet" />
      </div>
    </section>
  );
}
