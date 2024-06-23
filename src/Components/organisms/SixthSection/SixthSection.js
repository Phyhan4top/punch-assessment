import React from "react";
import { CardOne } from "./Cards/CardOne";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export const SixthSection = () => {
  return (
    <div className="w-full h-[1001px] flex justify-center gap-4 items-center bg-[#edefff]">
      <div className="">
        <h1 className="text-black font-bold text-[54px] leading-[1.19] w-[380px] h-[128px]">
          Why choose Zwilt?
        </h1>
        <p className="text-[22px] w-[380px] h-[128px]">
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </p>
      </div>
      <Carousel className="w-[70%]">
        <CardOne type={1} />
        <CardOne type={2} />
        <CardOne type={3} />
      </Carousel>
    </div>
  );
};
