import React, { useState } from "react";
import style from "./style.module.css";
import { LeftArrowIcon } from "../../../Icons/LeftArrowIcon";
const FirstBlock = () => {
  return (
    <div className="">
      <div className={style.firstH1}>
        Finding the right fit
        <img
          className="inline"
          src="/imgs/zwilt-tba-1-01 2person1.png"
          alt="person-2"
        />
        has never been easier.
      </div>
      <p className={style.firstP}>
        With our rigorous pre-vetting process, you'll never have to worry about
        finding the ideal candidate ever again.
      </p>
      <div className="relative w-[570px] h-[74px] mx-auto my-[30px] ml-[365px] mr-[365px] p-0 pl-[27px] rounded-[15px] border-solid border-[1.5px] border-gray-200 bg-white flex items-center">
        <label className="absolute left-[27px] font-bold" htmlFor="search">
          Looking for
        </label>
        <input
          className="h-full w-[78%] absolute right-0"
          placeholder="design |"
          type="search"
          id="search"
        />
        <div className="absolute right-0 flex justify-center items-center h-[74px] w-[74px] rounded-[16px] bg-[#FFBE2E]">
          <LeftArrowIcon />
        </div>
      </div>
    </div>
  );
};

const SecondBlock = () => {
  const [clickIt, setClickIt] = useState(true);
  const [clickDes, setClickDes] = useState(false);

  return (
    <div
      className={`lg:w-[920px] w-[80%] lg:h-[230px] h-[300px] ${style.SecondCont}`}
    >
      <div
        className={
          "w-[450px] bg-[#d2d2d2] h-[44px] flex rounded-[15px]  mb-[20px]"
        }
      >
        <span
          className={clickIt ? style.click : style.unclick}
          onClick={() => {
            setClickIt((prev) => !prev);
            setClickDes((prev) => !prev);
          }}
        >
          IT & Development
        </span>
        <span
          className={clickDes ? style.click : style.unclick}
          onClick={() => {
            setClickIt((prev) => !prev);
            setClickDes((prev) => !prev);
          }}
        >
          Design and Creative
        </span>
      </div>
      <div className="grid  grid-flow-col w-full justify-items-center items-center text-wrap">
        <div className="flex flex-col gap-3">
          <p>Python Developer</p>
          <p>Shopify Developer</p>
          <p className="font-bold text-black">MERN Stack Developer</p>
          <p>Full Stack Developer</p>
        </div>
        <div className=" flex flex-col gap-3">
          <p>Python Developer</p>
          <p>Shopify Developer</p>
          <p>MERN Stack Developer</p>
          <p>Full Stack Developer</p>
        </div>
        <div className=" flex flex-col gap-3">
          <p>Python Developer</p>
          <p>Shopify Developer</p>
          <p className="font-bold text-black">MERN Stack Developer</p>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};
export const FirstSection = () => {
  return (
    <div className="flex flex-col items-center">
      <FirstBlock />
      <SecondBlock />
      <img src="/logos/UnionSlantLine.svg" className="w-full mt-10" />
    </div>
  );
};
