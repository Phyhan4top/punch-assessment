import React from "react";
import { LinkIcon } from "../DynamicIcons/LinkIcon";
import style from "./style.module.css";
import { NumberOneIcon } from "../DynamicIcons/NumberOneIcon";
import { NumberTwoIcon } from "../DynamicIcons/NumberTwoIcon";
import { NumberThreeIcon } from "../DynamicIcons/NumberThreeIcon";
export const DisplayCard = ({ num, h, p, customStyle }) => {
  let src, svg, bg;

  if (num === 1) {
    src = "/imgs/Group 1094pic-for -card1.png";
    svg = <NumberOneIcon />;
    bg = "#edefff";
  } else if (num === 2) {
    src = "/imgs/Group 626351pic for card-2.png";
    svg = <NumberTwoIcon />;
    bg = "#fff7e1";
  } else {
    src = "/imgs/Group 626358pic-for-card3.png";
    svg = <NumberThreeIcon />;
    bg = "#f3f3f3";
  }
  return (
    <div
      className={`${style.frame} grid grid-cols-2 justify-center items-center `}
      style={{ ...customStyle, background: bg }}
    >
      <div className="flex gap-5">
        {svg}
        <div>
          <h1 className={style.disCh}>{h}</h1>
          <p className={style.disCp}>{p}</p>
          <LinkIcon text={num === 2 ? "Browse More" : "Join Now"} />
        </div>
      </div>
      <img src={src} />
    </div>
  );
};
