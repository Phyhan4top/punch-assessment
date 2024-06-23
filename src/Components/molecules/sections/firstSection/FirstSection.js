import React, { useState } from "react";
import style from "./style.module.css";
const FirstBlock = () => {
  return (
    <div className="">
      <div className={style.firstH1}>
        Finding the right fit
        <img className="inline" src="/logos/zwilt-tba-1-01 2person1.png" />
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
        <svg
          className="absolute right-0"
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="74" height="74" rx="15" fill="#FFBE2E" />
          <path
            d="M38.3588 36.5C38.3588 40.036 35.3683 42.9024 31.6794 42.9024C27.9905 42.9024 25 40.036 25 36.5C25 32.964 27.9905 30.0976 31.6794 30.0976C35.3683 30.0976 38.3588 32.964 38.3588 36.5Z"
            fill="#202229"
          />
          <path d="M36.6412 44L36.6412 29L50 36.5L36.6412 44Z" fill="#202229" />
        </svg>
      </div>
    </div>
  );
};

const SecondBlock = () => {
  const parts = ["IT & Development", "Design and Creative"];
  const [clickIt, setClickIt] = useState(true);
  const [clickDes, setClickDes] = useState(false);

  return (
    <div className={`${style.SecondCont}`}>
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
      <div className="grid grid-cols-3 w-full justify-items-center items-center">
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
