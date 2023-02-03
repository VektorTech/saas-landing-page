import Image from "next/image";
import Button from "./shared/Button";

import StockImg1 from "@/images/woman.png";
import CardGraphic from "@/images/card-graphic.svg";

import Graphic0 from "@/images/content/graphic0.svg";
import Graphic1 from "@/images/content/graphic1.svg";
import Graphic2 from "@/images/content/graphic2.svg";
import Graphic3 from "@/images/content/graphic3.svg";

export default function Content() {
  return (
    <section className="pt-14 container">
      <article className="grid grid-cols-2 gap-x-16">
        <div className="px-8 relative h-[35.5rem]">
          <div className="[clip-path:polygon(100%_13%,100%_93%,93%_100%,0_100%,0_13%)] -z-10 absolute w-[93%] h-full bg-[#EBECE8]"></div>
          <Image
            className="mx-auto"
            src={StockImg1}
            width={StockImg1.width}
            height={StockImg1.height}
            alt="woman"
          />
          <Image className="absolute -left-[16%] top-[55%]" alt="" src={Graphic0} />
          <Image className="absolute left-[7%] top-[78%]" alt="" src={Graphic1} />
          <Image className="absolute -right-[2%] top-[80%]" alt="" src={Graphic2} />
          <Image className="absolute -right-[23%] top-[57%]" alt="" src={Graphic3} />
        </div>
        <div className="flex flex-col justify-end pb-10 h-[35.5rem]">
          <h2 className="uppercase text-lg font-extrabold text-primary">
            Our Feature
          </h2>
          <h3 className="text-5xl mt-7">
            All of your portfolios are linked to your Crypto Fin account
          </h3>
          <p className="text-lg text-[#757095] mt-7">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
          <Button
            href="#"
            rounded="rounded-md"
            bgColor="primary"
            className="mt-7 self-start"
          >
            Get Started
          </Button>
        </div>
      </article>

      <article className="grid grid-cols-2 gap-x-8 mt-20">
        <div className="h-[30rem] relative col-start-2 row-end-2 overflow-hidden">
          <Image className="max-w-[118%]" src={CardGraphic} alt="" />
        </div>
        <div className="h-[30rem] col-start-1 flex flex-col justify-end pb-7">
          <h2 className="uppercase text-lg font-extrabold text-primary">
            Our Feature
          </h2>
          <h3 className="text-5xl mt-7">
            All payments can be managed from one account
          </h3>
          <p className="text-lg text-[#757095] mt-7">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
          <Button
            href="#"
            rounded="rounded-md"
            bgColor="primary"
            className="mt-7 self-start"
          >
            Get Started
          </Button>
        </div>
      </article>
    </section>
  );
}
