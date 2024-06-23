import React from "react";
import { Link } from "react-router-dom";

export const Navlink = ({ bg, color, text }) => {
  
  return (
    <Link
      to="/"
      className={`h-[71px] font-[SwitZzer] font-[500] text-[20px] text-left p-4`}
      style={{color:color, background:bg}}
    >
      {text}
    </Link>
  );
};
