import Image from "next/image";
import Button from "./shared/Button";

import VideoPoster from "@/images/video-poster.png";
import { SVGAttributes } from "react";

export default function Feature() {
  return (
    <section className="bg-primary text-white mt-20 lg:mt-28 pt-20 pb-16 lg:pt-36 lg:pb-28" id="feature-1">
      <div className="container">
        <header className="flex justify-between items-center flex-col lg:flex-row text-center lg:text-left gap-10 lg:gap-20">
          <h2 className="text-2xl sm:text-3xl md:text-[calc(1.5rem_+_1.04vw)] leading-[2.6rem] md:leading-[3.125rem] tracking-tight font-extrabold">
            Yet preference connection unpleasant
            <br />
            yet melancholy but end appearance
          </h2>
          <Button href="#" bgColor="orange">
            Get Started Now
          </Button>
        </header>

        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-5 justify-between py-8">
          <div className="lg:max-w-[27.1875rem] mt-10 md:mt-20 lg:mt-0">
            <article className="flex items-start gap-x-3 md:gap-x-7">
              <div className="w-15 h-15 md:w-24 md:h-24 shrink-0 relative before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-primary-dark before:opacity-20 before:rounded-full flex justify-center items-center text-4xl md:text-5xl">
                <span className="relative z-[1] text-[#E8F2FF]">1</span>
              </div>
              <div className="pt-2">
                <h3 className="text-lg md:text-3xl font-bold text-[#E8F2FF]">
                  First Working Process
                </h3>
                <p className="text-blue-250 text-sm md:text-lg mt-2 leading-8">
                  Blessing it ladyship on sensible judgment settling outweigh.
                </p>
              </div>
            </article>
            <article className="flex items-start gap-x-3 md:gap-x-7 mt-9">
              <div className="w-15 h-15 md:w-24 md:h-24 shrink-0 relative before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-primary-dark before:opacity-20 before:rounded-full flex justify-center items-center text-4xl md:text-5xl">
                <span className="relative z-[1] text-[#E8F2FF]">2</span>
              </div>
              <div className="pt-2">
                <h3 className="text-lg md:text-3xl font-bold text-[#E8F2FF]">Dedicated Team</h3>
                <p className="text-blue-250 text-sm md:text-lg mt-2 leading-8">
                  Warmly little before cousin sussex entire men set.
                </p>
              </div>
            </article>
            <article className="flex items-start gap-x-3 md:gap-x-7 mt-9">
              <div className="w-15 h-15 md:w-24 md:h-24 shrink-0 relative before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-primary-dark before:opacity-20 before:rounded-full flex justify-center items-center text-4xl md:text-5xl">
                <span className="relative z-[1] text-[#E8F2FF]">3</span>
              </div>
              <div className="pt-2">
                <h3 className="text-lg md:text-3xl font-bold text-[#E8F2FF]">24/7 Hours Support</h3>
                <p className="text-blue-250 text-sm md:text-lg mt-2 leading-8">
                  And excellence partiality estimating terminated day
                  everything.
                </p>
              </div>
            </article>
          </div>
          <div className="relative">
            <Image
              className="relative z-10 w-full"
              src={VideoPoster}
              width={VideoPoster.width}
              height={VideoPoster.height}
              alt=""
            />
            <button className="z-10 flex absolute bg-white text-accent rounded-full w-14 h-14 md:w-24 md:h-24 top-0 mt-[29.44%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <RightArrow
                className="m-auto pl-[5px] w-[30px] h-[30px] md:w-[45px] md:h-[40px]"
                width="45px"
                height="45px"
              />
            </button>

            <div className="pl-[20%] pt-[20%] text-[#C4C4C4] opacity-30 absolute -top-[43%] -left-[25.5%] z-10">
              <svg
                width="0"
                height="0"
                className="w-full h-full absolute"
                viewBox="0 0 100 100"
              >
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

            <svg
              className="absolute -right-2 md:-right-5 top-0 mt-[52%] md:mt-[48%] z-0 w-[32px] h-[55px] md:w-[55px] md:h-[106px]"
              width="55"
              height="106"
              viewBox="0 0 55 106"
              fill="none"
            >
              <path d="M55 83.74V0L0 23.32V106L55 83.74Z" fill="#F7FA62" />
            </svg>

            <svg
              className="absolute -right-3 md:-right-8 -top-5 md:-top-10 z-10 w-[28px] h-[30px] md:w-[56px] md:h-[58px]"
              width="56"
              height="58"
              viewBox="0 0 56 58"
              fill="none"
            >
              <path
                d="M24 2.41593e-06C28.2023 2.23224e-06 32.3635 0.827707 36.2459 2.43586C40.1283 4.04401 43.6559 6.40111 46.6274 9.37258C49.5989 12.3441 51.956 15.8717 53.5641 19.7541C55.1723 23.6365 56 27.7977 56 32L24 32L24 2.41593e-06Z"
                fill="#E8F2FF"
              />
              <path
                d="M-2.79753e-06 26C4.2023 26 8.36345 26.8277 12.2459 28.4359C16.1283 30.044 19.6559 32.4011 22.6274 35.3726C25.5989 38.3441 27.956 41.8717 29.5641 45.7541C31.1723 49.6365 32 53.7977 32 58L-1.39876e-06 58L-2.79753e-06 26Z"
                fill="#E8F2FF"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

const RightArrow = (props: SVGAttributes<SVGSVGElement>) => (
  <svg width="0" height="0" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
  </svg>
);
