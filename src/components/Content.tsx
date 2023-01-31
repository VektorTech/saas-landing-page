import Image from "next/image";
import Button from "./shared/Button";

import StockImg1 from "@/images/woman.png";

export default function Content() {
  return (
    <section className="pt-14 container">
      <article className="h-[35.5rem] grid grid-cols-2 gap-x-16">
        <div className="px-8 relative">
          <div className="[clip-path:polygon(100%_13%,100%_93%,93%_100%,0_100%,0_13%)] -z-10 absolute w-[92%] h-full bg-[#EBECE8]"></div>
          <Image
            className="mx-auto"
            src={StockImg1}
            width={StockImg1.width}
            height={StockImg1.height}
            alt="woman"
          />
        </div>
        <div className="flex flex-col justify-end pb-10">
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

      <article className="h-[30rem] grid grid-cols-2 gap-x-8 mt-20">
        <div className="relative col-start-2 row-end-2">
          <div className="[clip-path:polygon(0_0,100%_25%,100%_100%,0_75%)] -z-10 absolute w-[50%] h-[55%] bg-[#EBECE8] mt-32"></div>
        </div>
        <div className="col-start-1 flex flex-col justify-end pb-7">
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
