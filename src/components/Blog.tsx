import Image from "next/image";
import Link from "next/link";

import StockImage1 from "@/images/blog-stock-1.png";
import StockImage2 from "@/images/blog-stock-2.png";
import StockImage3 from "@/images/blog-stock-3.png";
import StockImage4 from "@/images/blog-stock-4.png";
import { SVGAttributes } from "react";

export default function Blog() {
  return (
    <section className="container mt-28">
      <h2 className="text-3xl md:text-5xl font-extrabold">Recent Blogs</h2>

      <Link href="/">
        <div className="bg-white flex flex-col lg:flex-row mt-10 md:mt-20">
          <article className="pt-4 md:pt-6 px-3 md:px-8 pb-10 lg:pb-0 lg:w-[60%]">
            <p className="uppercase text-sm md:text-base !font-black">
              best practices
            </p>
            <h3 className="text-lg sm:text-xl md:text-[1.82rem] !font-black md:leading-[2.2rem] !tracking-tighter mt-3 max-w-[80%]">
              In design active temper be uneasy. Thirty for remove plenty
              regard.
            </h3>
            <p className="mt-16 text-base font-extrabold">
              Read More <RightArrow className="inline ml-2" />
            </p>
          </article>
          <Image
            alt="blog stock image 1"
            className="w-full lg:w-[40%]"
            src={StockImage1}
            width={Math.round(StockImage1.width * 0.94)}
            height={Math.round(StockImage1.height * 0.94)}
          />
        </div>
      </Link>

      <div className="grid lg:grid-cols-3 gap-x-7 space-y-7 lg:space-y-0 mt-7">
        <Link href="/">
          <div className="bg-white">
            <article className="pt-4 md:pt-6 px-3 md:px-8 h-56 overflow-hidden">
              <p className="uppercase text-sm md:text-base !font-black">
                best practices
              </p>
              <h3 className="text-lg sm:text-xl md:text-[1.82rem] !font-black md:leading-[2.2rem] !tracking-tighter mt-3">
                Partiality on or continuing particular principles as.
              </h3>
            </article>
            <Image
              alt="blog stock image 2"
              className="w-full"
              src={StockImage2}
              width={StockImage2.width}
              height={StockImage2.height}
            />
          </div>
        </Link>

        <Link href="/">
          <div className="bg-white">
            <article className="pt-4 md:pt-6 px-3 md:px-8 h-56 overflow-hidden">
              <p className="uppercase text-sm md:text-base !font-black">
                best practices
              </p>
              <h3 className="text-lg sm:text-xl md:text-[1.82rem] !font-black md:leading-[2.2rem] !tracking-tighter mt-3">
                Village did removed enjoyed explain
              </h3>
            </article>
            <Image
              alt="blog stock image 3"
              className="w-full"
              src={StockImage3}
              width={StockImage3.width}
              height={StockImage3.height}
            />
          </div>
        </Link>

        <Link href="/" className="">
          <div className="bg-white">
            <article className="pt-4 md:pt-6 px-3 md:px-8 h-56 overflow-hidden">
              <p className="uppercase text-sm md:text-base !font-black">
                best practices
              </p>
              <h3 className="text-lg sm:text-xl md:text-[1.82rem] !font-black md:leading-[2.2rem] !tracking-tighter mt-3">
                Wise busy past both park when an ye no. Nay likely her length.
              </h3>
            </article>
            <Image
              alt="blog stock image 4"
              className="w-full"
              src={StockImage4}
              width={StockImage4.width}
              height={StockImage4.height}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

const RightArrow = (props: SVGAttributes<SVGSVGElement>) => (
  <svg {...props} width="13" height="10" viewBox="0 0 13 10" fill="none">
    <path
      d="M0 4.75H11.5M11.5 4.75L7 0.75M11.5 4.75L7 9.25"
      stroke="#1B1C31"
      strokeWidth="2"
    />
  </svg>
);
