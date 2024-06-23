import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { LeftArrowIcon } from "./LeftArrowIcon";
export const LinkIcon = ({ text }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className={`${style.linkIcon}`}>
        <LeftArrowIcon fill="white" />
      </div>

      <NavLink className="text-[18px] font-normal">{text}</NavLink>
    </div>
  );
};
