import Image from "next/image";
import Button from "./Button";

import StockImg1 from "@/images/woman.png";
import CardGraphic from "@/images/card-graphic.svg";

import Graphic0 from "@/images/content/graphic0.svg";
import Graphic1 from "@/images/content/graphic1.svg";
import Graphic2 from "@/images/content/graphic2.svg";
import Graphic3 from "@/images/content/graphic3.svg";

export default function Content() {
  return (
    <section className="pt-14 container">
      <article className="grid lg:grid-cols-2 gap-x-12 text-center md:text-left overflow-hidden">
        <div className="px-2 sm:px-8 relative">
          <div className="[clip-path:polygon(100%_13%,100%_93%,93%_100%,0_100%,0_13%)] h-full -z-10 absolute w-[93%] bg-[#EBECE8]"></div>
          <Image
            className="mx-auto mt-auto"
            src={StockImg1}
            width={StockImg1.width}
            height={StockImg1.height}
            alt="woman"
          />
          <Image
            className="absolute left-0 top-[55%] hover:animate-shake"
            alt=""
            src={Graphic0}
          />
          <Image
            className="absolute left-[23%] top-[78%] hover:animate-shake"
            alt=""
            src={Graphic1}
          />
          <Image
            className="absolute right-[13%] top-[87%] sm:top-[80%] hover:animate-shake"
            alt=""
            src={Graphic2}
          />
          <Image
            className="absolute right-0 lg:-right-[3%] top-[67%] sm:top-[57%] hover:animate-shake"
            alt=""
            src={Graphic3}
          />
        </div>
        <div className="flex flex-col pt-10 lg:pt-0 lg:justify-end pb-10 space-y-3 sm:space-y-7 lg:pl-5">
          <h2 className="uppercase text-sm sm:text-base md:text-lg !font-black text-primary">
            Our Feature
          </h2>
          <h3 className="text-3xl sm:text-5xl font-[700] ">
            All of your portfolios are linked to your Crypto Fin account
          </h3>
          <p className="text-sm sm:text-lg text-[#757095] ">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
          <Button
            href="#"
            rounded="rounded-md"
            bgColor="primary"
            className="md:self-start"
          >
            Get Started
          </Button>
        </div>
      </article>

      <article className="grid lg:grid-cols-2 gap-x-12 mt-5 md:mt-20 text-center md:text-left">
        <div className="relative lg:col-start-2 lg:row-end-2 overflow-hidden">
          <Image className="mx-auto" src={CardGraphic} alt="" />
        </div>
        <div className="col-start-1 flex flex-col pt-5 md:pt-10 pb-7 space-y-3 sm:space-y-7">
          <h2 className="uppercase text-sm sm:text-base md:text-lg !font-black text-primary">
            Our Feature
          </h2>
          <h3 className="text-3xl sm:text-5xl font-[700] ">
            All payments can be managed from one account
          </h3>
          <p className="text-sm sm:text-lg text-[#757095] ">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
          <Button
            href="#"
            rounded="rounded-md"
            bgColor="primary"
            className="md:self-start"
          >
            Get Started
          </Button>
        </div>
      </article>
    </section>
  );
}
