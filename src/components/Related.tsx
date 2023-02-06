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
    <section className="px-20 text-center mt-[4.75rem]">
      <h2 className="text-2xl">
        Over 32k+ software businesses growing with Crypto Fin.
      </h2>
      <div className="mt-9 h-8 gap-x-5 flex justify-between items-center overflow-hidden">
        <Image src={OpenZeppelinLogo} width="136" alt="openzeppelin" />
        <Image src={OracleLogo} width="136" alt="oracle" />
        <Image src={MorpheusLogo} width="136" alt="morpheus" />
        <Image src={SamsungLogo} width="136" alt="samsung" />
        <Image src={MondayLogo} width="136" alt="monday" />
        <Image src={SegmentLogo} width="136" alt="segment" />
        <Image src={ProtonetLogo} width="136" alt="protonet" />
      </div>
    </section>
  );
}
