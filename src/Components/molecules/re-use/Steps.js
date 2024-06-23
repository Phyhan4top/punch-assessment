import React, { useState } from "react";
import style from "./style.module.css";
import { OpenIcon } from "./DynamicIcons/OpenIcon";

export const Steps = ({ num, sub, info }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={style.stepCont}>
      <div className="flex gap-3 items-center">
        <div
          className={`w-[57px] rounded.[43.9px] ${
            clicked ? "bg-[#8ba4fd]" : "bg-[#ececec]"
          } h-[57px] flex justify-center items-center`}
          onClick={() => setClicked((prev) => !prev)}
        >
          <OpenIcon fill={clicked ? "white" : "black"} />
        </div>
        <div>
          <span className="font-[500]">Step {num}:</span> {sub}
        </div>
      </div>
      <div className={`${clicked ? "block" : "hidden"} ${style.stepInfo}`}>
        {info}
      </div>
    </div>
  );
};
