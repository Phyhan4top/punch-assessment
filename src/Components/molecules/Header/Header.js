import React from 'react'
import { Navlink } from '../../atoms/NavLink/Navlink'
import { LogoIcon } from '../re-use/DynamicIcons/LogoIcon';

export const Header = () => {
  /**
  width: 1300px;
  height: 60px;
  flex-grow: 0;
  margin: 0 0 144px;
  padding: 9px 9px 8px 25px;
  border-radius: 15px;
  box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.15);
  background-color: #525aa0;
   */
  return (
    <div
      className="max-w-[1500px] h-[70px] flex items-center justify-between m-auto pt-[9px] mt-[36px] pr-[9px] pb-[8px] pl-[25px] rounded-[15px]  bg-[#525aa0] "
      style={{ boxShadow: "0 15px 25px 0 rgba(0, 0, 0, 0.15)" }}
    >
     <LogoIcon/>
      <div className="ml-10 grid grid-cols-5  justify-center items-center">
        <Navlink text={"Find Work"} color={"white"} />
        <Navlink text={"Find Talent"} color={"white"} />
        <Navlink text={"Articles"} color={"white"} />
        <Navlink text={"About Us"} color={"white"} v />
        <Navlink text={"Contact Us"} color={"white"} />
      </div>
      <div className="">
        <Navlink text={"Log In"} color={"white"} />
        <span className="w-[102px] ml-[20px] pt-4 pr-5 pb-4 pl-5 rounded-[16px] bg-[#fff] h-[43px]">
          <Navlink text={"Join Now"} color={"black"} />
        </span>
      </div>
    </div>
  );
}
