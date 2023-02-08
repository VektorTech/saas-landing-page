import Button from "./shared/Button";
import BannerImage from "./BannerImage";

export default function Hero() {
  return (
    <>
      <section className="relative pb-28 sm:pb-48 md:pb-56 xl:pb-80 max-h-[52rem] overflow-hidden">
        <div className="pointer-events-none full-size bg-primary -z-[1]"></div>
        <div
          className={[
            "pointer-events-none full-size -z-[1]",
            "opacity-40 sm:opacity-80 md:opacity-100",
            "bg-[radial-gradient(circle_at_8%_25%,#10ACDD45_0%,transparent_35%),_radial-gradient(circle_at_75%_75%,#10ACDD45_0%,transparent_55%)]",
            "md:bg-[radial-gradient(circle_at_12%_57%,#10ACDD45_0%,transparent_22%),_radial-gradient(circle_at_65%_75%,#10ACDD45_0%,transparent_23%)]",
          ].join(" ")}
        >
          <div className="full-size !top-10 md:!top-28">
            <div className="[clip-path:polygon(0_0,100%_0,100%_100%,0_65%)] w-32 h-36 bg-[#8FD0FF16] absolute left-[14%] top-0"></div>
            <div className="[clip-path:polygon(25%_0%,99%_18%,74%_71%,2%_52%)] w-44 h-36 bg-[#8FD0FF25] absolute left-[27%] top-[46%]"></div>
            <div className="[clip-path:polygon(91%_8%,100%_17%,100%_100%,21%_31%)] w-32 h-40 bg-[#8FD0FF25] absolute right-0 bottom-[10%]"></div>
            <div className="[clip-path:polygon(28%_64%,0%_100%,100%_100%)] w-36 h-40 bg-[#8FD0FF25] absolute left-[26%] bottom-0"></div>

            <div className="[clip-path:polygon(0_19%,54%_0,54%_79%,0%_100%)] w-14 h-14 bg-yellow-350 opacity-20 absolute left-[15%] top-[35%]"></div>
            <div className="[clip-path:polygon(100%_0,0_0,0_42%)] w-24 h-20 bg-yellow-350 opacity-20 absolute right-[33%] top-0"></div>

            <div className="absolute w-8 h-20 left-[1%] top-[28%]">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 66 100"
                className="opacity-20 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="0 14 66 0 66 84 0 100"
                />
              </svg>
            </div>

            <div className="absolute w-24 h-12 left-[42%] bottom-[32%]">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 99 74"
                className="opacity-10 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="25 0 99 18 74 71 2 52"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute w-16 h-24 right-[28%] top-[22%]">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                className="opacity-20 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="100 14 32 0 32 83 100 99"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute w-16 h-24 right-[18%] bottom-[45%]">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                className="opacity-10 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="50 15 0 25 52 77 100 71"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute w-24 h-20 left-[8%] bottom-[15%]">
              <svg
                width="0"
                height="0"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                className="opacity-10 w-full h-full"
              >
                <polygon
                  className="fill-primary stroke-white stroke-2"
                  points="9 38 100 9 94 68 0 100"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <article className="container text-center pt-28 md:pt-32 xl:pt-40">
          <h2 className="text-white font-extrabold text-3xl lg:text-6xl">
            Managing your crypto portfolio
            <br />
            has never been easier
          </h2>
          <p className="text-white text-sm md:text-base lg:text-xl mt-8">
            End-to-end payments and financial management in a single solution.
            Meet
            <br />
            the right platform to help realize.
          </p>
          <div className="mt-10 md:mt-14 flex gap-3 sm:gap-8 md:gap-12 justify-center whitespace-nowrap scale-[0.55] sm:scale-75 md:scale-100">
            <Button href="#" bgColor="orange" rounded="rounded-full">
              Get Started
            </Button>
            <button className="text-white text-base flex items-center gap-3">
              <div className="h-15 w-15 shrink-0 rounded-full bg-green text-white text-base flex justify-center items-center">
                <svg
                  className="pl-[2px] w-[1.88rem] h-[1.88rem]"
                  width="0"
                  height="0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M6 12.0002V9.33017C6 6.02017 8.35 4.66017 11.22 6.32017L13.53 7.66017L15.84 9.00017C18.71 10.6602 18.71 13.3702 15.84 15.0302L13.53 16.3702L11.22 17.7102C8.35 19.3402 6 17.9902 6 14.6702V12.0002Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              See How It Works
            </button>
          </div>
        </article>
      </section>

      <BannerImage />
    </>
  );
}
