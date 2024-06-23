import React from "react";
import style from "./style.module.css";
import {LeftArrowIcon} from "../../../Icons/LeftArrowIcon"
import {RightArrowIcon} from "../../../Icons/RightArrowIcon"
import {GrooveIcon} from "../../../Icons/GrooveIcon"

const PartA = () => {
  return (
    <div>
      <div className={style.partAH}>
        How it worked for Jason{" "}
        <img
          className="inline"
          src="/imgs/Frame 136person2.png"
          alt="person-2"
        />
        at
        <img src="/imgs/groovehqgroove.png" alt="groove" />
      </div>
      <div className={style.p}>
        Zwilt enabled us to deliver on time and they’ve been heavy hitters in
        our corner since.
      </div>

      <div className="flex">
        <div className={style.arr}>
          <LeftArrowIcon fill="#50589f" />
        </div>
        <div className={style.arr}>
          <RightArrowIcon fill="#50589f" />
        </div>
      </div>
    </div>
  );
};

const PartB = () => {
  return (
    <div className="flex flex-col justify-start">
      <div className="flex gap-1 flex-wrap">
        <div className={style.svg}>
          <GrooveIcon />
        </div>
        <div className="">
          <h2 className={style.partBH}>Jason Makki</h2>
          <p className={style.S}>Engineer at GROOVE</p>
          <p className={style.S}>San Francisco</p>
        </div>
      </div>
      <p className={style.p}>
        Zwilt enabled us to deliver on time and they’ve been heavy hitters in
        our corner since. Zwilt enabled us to deliver on time and they’ve been
        heavy hitters in our corner since.Zwilt enabled us to deliver on time
        and they’ve been heavy hitters.
      </p>
    </div>
  );
};
export const ThirdSection = () => {
  return (
    <div className={`lg:h-[847px] h-[1200px] ${style.Component}`}>
      <div className="h-[1px] w-10 "></div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <PartA />
        <PartB />
      </div>
    </div>
  );
};
