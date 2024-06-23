import React from "react";

export const LogoCard = ({ children, text }) => {
 
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mt-4 mb-3 pt-8 pr-7 pb-8 pl-7 rounded-[74px] bg-[#f6f6f6] flex justify-center items-center">
        {children}
      </div>
      <div className="text-wrap w-[81px] h-[36px] leading-[1.29] tracking-normal text-center text-[#202229] text-[14px] font-[600] font-[Switzer] mt-3 mr-7 mb-0 ml-7">
        {text}
      </div>
    </div>
  );
};
