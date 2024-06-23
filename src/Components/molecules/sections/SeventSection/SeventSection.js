import React from "react";
import style from "./style.module.css";
export const SeventSection = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        { question: "I want to work part-time, is that possible?" },
        { question: "How long are the average projects?" },
        { question: "How does the payment work?", highlighted: true },
        { question: "How much can I earn?" },
      ],
    },
    {
      category: "Joining Process",
      questions: [
        { question: "I want to work part-time, is that possible?" },
        { question: "How long are the average projects?" },
        { question: "How long are the average projects?" },
        { question: "How much can I earn?" },
      ],
    },
  ];

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
              <svg
                width="25"
                height="15"
                viewBox="0 0 25 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z"
                  fill="#FFBE2E"
                />
                <path
                  d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z"
                  fill="#FFBE2E"
                />
              </svg>
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
