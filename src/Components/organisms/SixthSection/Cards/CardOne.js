import React from "react";
import { LinkIcon } from "../../../../Icons/LinkIcon";

export const CardOne = ({ type }) => {
  let ln, img, Header, list, style;
  if (type === 1) {
    ln = "#50589f";
    img = "/imgs/Group 626340Card-One .png";
    Header = "Onboard without the risk.";
    list = [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ];
    style = {
      width: "464px",
      height: "128px",
      // margin: "91px 80px 37px 0",
      fontFamily: " Switzer",
      fontSize: "54px",
      fontWeight: " bold",
      fontStretch: " normal",
      fontStyle: "normal",
      lineHeight: 1.19,
      letterSpacing: "normal",
      textAlign: "left",
      color: "black",
    };
  } else if (type === 2) {
    ln = "#ffbe2e";
    img = "/imgs/Group 626506Card-two.png";
    Header = "An open book.";
    list = [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ];
    style = {
      width: "239px",
      height: "128px",
      // margin: "91px 80px 37px 0",
      fontFamily: " Switzer",
      fontSize: "54px",
      fontWeight: " bold",
      fontStretch: " normal",
      fontStyle: "normal",
      lineHeight: 1.19,
      letterSpacing: "normal",
      textAlign: "left",
      color: "black",
    };
  } else {
    ln = "#c7f4c2";
    img = "/imgs/Group 626504Card-three.png";
    Header = "Stay in the loop.";
    list = [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ];

    style = {
      width: "279px",
      height: "128px",
      // margin: "91px 80px 37px 0",
      fontFamily: " Switzer",
      fontSize: "54px",
      fontWeight: " bold",
      fontStretch: " normal",
      fontStyle: "normal",
      lineHeight: 1.19,
      letterSpacing: "normal",
      textAlign: "left",
      color: "black",
    };
  }
  return (
    <div className="bg-white w-[1300px] h-[657px] p-10 rounded-[20px] shadow-lg flex  items-center">
      <div className="flex flex-col gap-[39px]">
        <h1 style={style}>{Header}</h1>
        <div>
          {list.length > 0 ? (
            list.map((el, i) => {
              return (
                <div className="flex  items-center gap-2 text-nowrap" key={i}>
                  <span
                    className={`w-4 h-[7px]`}
                    style={{ background: ln }}
                  ></span>
                  {el}
                </div>
              );
            })
          ) : (
            <div className="flex  items-center gap-2">
              <span className={`w-4 h-[7px]`} style={{ background: ln }}></span>{" "}
              {list}
            </div>
          )}
        </div>
        <LinkIcon text={"Learn More"} />
      </div>
      <img src={img} className="h-[95%]" alt="card-sec" />
    </div>
  );
};
