"use client";

import DashboardImage from "@/images/dashboard.png";
import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="relative">
      <div
        onMouseMove={(event) => {
          if (event.target instanceof HTMLDivElement) {
            const scrollTop = document.documentElement.scrollTop;
            const scrollLeft = document.documentElement.scrollLeft;
            const { left, top, width, height } =
              event.target.getBoundingClientRect();
            const halfWidth = width / 2;
            const halfHeight = height / 2;
            const midX = scrollLeft + left + halfWidth;
            const midY = scrollTop + top + halfHeight;

            const x = (scrollLeft + event.clientX - midX) / halfWidth;
            const y = (midY - (scrollTop + event.clientY)) / halfHeight;
            event.target.style.setProperty("--x-rot", `${x * 6}`);
            event.target.style.setProperty("--y-rot", `${y * 6}`);
          }
        }}
        onMouseLeave={(event) => {
          if (event.target instanceof HTMLDivElement) {
            event.target.style.setProperty(
              "--transition",
              "transform .3s cubic-bezier(.23,1,.32,1)"
            );
            event.target.style.setProperty("--x-rot", "0");
            event.target.style.setProperty("--y-rot", "0");
          }
        }}
        className="w-3/4 sm:w-[70%] lg:w-3/5 xl:w-[48%] max-w-[47rem] mx-auto"
      >
        <div
          style={{ perspective: "800px" }}
          className="pointer-events-none pb-[68%] -mt-[22%] relative"
        >
          <div
            style={{
              transform: `rotateX(calc(var(--y-rot, 0)*1deg)) rotateY(calc(var(--x-rot, 0)*1deg)) translateZ(-0.6rem)`,
              transition: "var(--transition)",
            }}
            className="bg-[#ffffff16] rounded-lg absolute w-[calc(100%_+_6rem)] h-[calc(83%_+_6rem)] -ml-[3rem] -mt-[3rem]"
          ></div>
          <div
            style={{
              transform: `rotateX(calc(var(--y-rot, 0)*1deg)) rotateY(calc(var(--x-rot, 0)*1deg)) translateZ(-0.4rem)`,
              transition: "var(--transition)",
            }}
            className="bg-[#ffffff16] rounded-lg absolute w-[calc(100%_+_4rem)] h-[calc(83%_+_4rem)] -ml-[2rem] -mt-[2rem]"
          ></div>
          <div
            style={{
              transform: `rotateX(calc(var(--y-rot, 0)*1deg)) rotateY(calc(var(--x-rot, 0)*1deg)) translateZ(-0.2rem)`,
              transition: "var(--transition)",
            }}
            className="bg-[#ffffff16] rounded-lg absolute w-[calc(100%_+_2rem)] h-[calc(83%_+_2rem)] -ml-[1rem] -mt-[1rem]"
          ></div>

          <div
            style={{
              transform: `rotateX(calc(var(--y-rot, 0)*1deg)) rotateY(calc(var(--x-rot, 0)*1deg)) translateZ(0rem)`,
              transition: "var(--transition)",
            }}
            className="absolute bg-white w-full rounded-lg shadow-[0_24px_34px_0_#00000010]"
          >
            <Image
              priority
              src={DashboardImage}
              width={DashboardImage.width}
              height={DashboardImage.height}
              blurDataURL={DashboardImage.blurDataURL}
              alt="crypto fin dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
