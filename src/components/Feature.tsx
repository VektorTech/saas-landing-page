import Image from "next/image";
import Button from "./shared/Button";

import VideoPoster from "@/images/video-poster.png";
import { SVGAttributes } from "react";

export default function Feature() {
  return (
    <section className="bg-primary text-white mt-28 pt-36 pb-28" id="feature-1">
      <div className="container">
        <header className="flex justify-between items-center gap-20">
          <h2 className="text-[2.75rem] leading-[3.125rem] font-extrabold">
            Yet preference connection unpleasant
            <wbr /> yet melancholy but end appearance
          </h2>
          <Button href="#" bgColor="orange">
            Get Started Now
          </Button>
        </header>

        <div className="mt-10 flex gap-x-5 justify-between py-8">
          <div className="max-w-[27.1875rem]">
            <article className="flex items-start gap-x-7">
              <div className="w-24 h-24 shrink-0 relative before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-primary-dark before:opacity-20 before:rounded-full flex justify-center items-center text-5xl">
                <span className="relative z-[1] text-[#E8F2FF]">1</span>
              </div>
              <div className="pt-2">
                <h3 className="text-3xl text-[#E8F2FF]">
                  First Working Process
                </h3>
                <p className="text-blue-250 text-lg mt-2 leading-8">
                  Blessing it ladyship on sensible judgment settling outweigh.
                </p>
              </div>
            </article>
            <article className="flex items-start gap-x-7 mt-9">
              <div className="w-24 h-24 shrink-0 relative before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-primary-dark before:opacity-20 before:rounded-full flex justify-center items-center text-5xl">
                <span className="relative z-[1] text-[#E8F2FF]">2</span>
              </div>
              <div className="pt-2">
                <h3 className="text-3xl text-[#E8F2FF]">Dedicated Team</h3>
                <p className="text-blue-250 text-lg mt-2 leading-8">
                  Warmly little before cousin sussex entire men set.
                </p>
              </div>
            </article>
            <article className="flex items-start gap-x-7 mt-9">
              <div className="w-24 h-24 shrink-0 relative before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-primary-dark before:opacity-20 before:rounded-full flex justify-center items-center text-5xl">
                <span className="relative z-[1] text-[#E8F2FF]">3</span>
              </div>
              <div className="pt-2">
                <h3 className="text-3xl text-[#E8F2FF]">24/7 Hours Support</h3>
                <p className="text-blue-250 text-lg mt-2 leading-8">
                  And excellence partiality estimating terminated day
                  everything.
                </p>
              </div>
            </article>
          </div>
          <div className="relative">
            <Image
              className=""
              src={VideoPoster}
              width={VideoPoster.width}
              height={VideoPoster.height}
              alt=""
            />
            <button className="flex absolute bg-white text-accent rounded-full w-24 h-24 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <RightArrow
                className="m-auto pl-[5px]"
                width="45px"
                height="45px"
              />
            </button>

            <div className="w-[148px] h-[148px] text-[#C4C4C4] opacity-30 absolute -top-[2.4rem] -left-[2.6rem]">
              <svg viewBox="0 0 100 100">
                {[...Array(49)].map((_, i) => (
                  <rect
                    fill="currentColor"
                    key={i}
                    x={(i % 7) * (100 / 7 + 3 / 2)}
                    y={Math.floor(i / 7) * (100 / 7 + 3 / 2)}
                    width="3"
                    height="3"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RightArrow = (props: SVGAttributes<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
  </svg>
);
