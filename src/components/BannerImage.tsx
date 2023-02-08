"use client";

import DashboardImage from "@/images/dashboard.png";
import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="relative">
      <div
        style={{ perspective: "1000px" }}
        className="w-[75%] sm:w-[70%] lg:w-[60%] xl:w-[48%] max-w-[47rem] h-[80%] mx-auto"
      >
        <div
          onMouseMove={(event) => {
            if (event.target instanceof HTMLDivElement) {
			  const { left, top, width, height } = event.target.getBoundingClientRect();
              const midX = (left + width) / 2;
              const midY = (top + height) / 2;

              const x = (event.clientX - midX) / midX;
              const y = (midY - event.clientY) / midY;

              event.target.style.transition = "none";
              event.target.style.transform = `rotateX(${y * 15}deg) rotateY(${
                x * 15
              }deg)`;
            }
          }}
          onMouseLeave={(event) => {
            if (event.target instanceof HTMLDivElement) {
              event.target.style.transition = "transform .6s";
              event.target.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
            }
          }}
          className="bg-white -mt-[22%] rounded-lg shadow-[0_0_0.0625rem_0.5rem_#ffffff16,0_0_0.0625rem_1rem_#ffffff16,0_0_0.0625rem_1.5rem_#ffffff16] lg:shadow-[0_0_0.0625rem_1rem_#ffffff16,0_0_0.0625rem_2rem_#ffffff16,0_0_0.0625rem_3rem_#ffffff16]"
        >
          <div className="pointer-events-none bg-white w-full -translate-x-4 translate-y-4 rounded-[1.25rem] shadow-[0_24px_34px_0_#00000010]">
            <Image
              src={DashboardImage}
              width={DashboardImage.width}
              height={DashboardImage.height}
              blurDataURL={DashboardImage.blurDataURL}
              alt="dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
