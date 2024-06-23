import React from "react";
import style from "./style.module.css";
import { LeftArrowIcon } from "../../../Icons/LeftArrowIcon";
export const FaqSection = () => {
  return (
    <div className="bg-[#f3f3f3] h-[1207px] w-full">
      <div className={style.frame}>
        <h1 className={style.h}>Frequently asked questions</h1>

        <div className="w-full ">
          <div className="grid grid-cols-5 grid-flow-row justify-center items-center">
            <div
              className={`col-span-1 text-[22px] font-bold text-center border border-[#e8e8e8] ${style.gridChild}`}
            >
              General
            </div>
            <div
              className={`col-span-1 text-center ${style.gridChild2} `}
            ></div>
            <div className={`col-span-3  ${style.gridChild3} `}>
              I want to work part-time, is that possible?
            </div>
            <div className={`col-span-1 text-center ${style.gridChild4}`}></div>
            <div className={`col-span-1 text-center ${style.gridChild2}`}></div>
            <div className={`col-span-3  ${style.gridChild3}`}>
              I want to work part-time, is that possible?
            </div>
            <div
              className={`col-span-1 text-center bg-[#E8E8E8] ${style.gridChild4}`}
            ></div>
            <div
              className={`col-span-1 text-center bg-[#E8E8E8] ${style.gridChild2}`}
            ></div>
            <div
              className={`col-span-3 text-[22px] bg-[#E8E8E8] font-bold  flex justify-between ${style.gridChild3}`}
            >
              <p>I want to work part-time, is that possible?</p>

              <LeftArrowIcon fill="#FFBE2E" />
            </div>
            <div className={`col-span-1 text-center ${style.gridChild4}`}></div>
            <div className={`col-span-1 text-center ${style.gridChild2}`}></div>
            <div className={`col-span-3  ${style.gridChild3}`}>
              I want to work part-time, is that possible?
            </div>
            <div
              className={`col-span-1 bg-[#E8E8E8] text-[22px] font-bold text-center ${style.gridChild}`}
            >
              General
            </div>
            <div
              className={`col-span-1 text-[22px] font-bold text-center ${style.gridChild}`}
            >
              Joining Process
            </div>
            <div className={`col-span-3  ${style.gridChild}`}>
              I want to work part-time, is that possible?
            </div>
            <div className={`col-span-1 text-center ${style.gridChild4}`}></div>
            <div className={`col-span-1 text-center ${style.gridChild2}`}></div>
            <div className={`col-span-3  ${style.gridChild3}`}>
              I want to work part-time, is that possible?
            </div>
            <div className={`col-span-1 text-center ${style.gridChild4}`}></div>
            <div className={`col-span-1 text-center ${style.gridChild2}`}></div>
            <div className={`col-span-3  ${style.gridChild3}`}>
              I want to work part-time, is that possible?
            </div>
            <div className={`col-span-1 text-center ${style.gridChild4}`}></div>
            <div className={`col-span-1 text-center ${style.gridChild2}`}></div>
            <div className={`col-span-3  ${style.gridChild3}`}>
              I want to work part-time, is that possible?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
