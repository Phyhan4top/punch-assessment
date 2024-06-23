import React from "react";
import { LogoCard } from "../atoms/LogoCard";
import style from "./style.module.css";
import { RightArrowIcon } from "../../Icons/RightArrowIcon";
import { LeftArrowIcon } from "../../Icons/LeftArrowIcon";

const Card = ({ header, logos, type }) => {
  return (
    <div className={style.card}>
      <div className="font-bold">{header}</div>
      <div className="flex">
        {type === "left" ? (
          <div className={style.arr}>
            <RightArrowIcon fill="#202229" />
          </div>
        ) : null}
        <div className="grid grid-cols-5  items-center justify-center">
          {logos.map((el, i) => {
            return (
              <LogoCard text={el.text} key={i}>
                <img src={el.logo} alt={el.text} />
              </LogoCard>
            );
          })}
        </div>

        {type === "right" ? (
          <div className={style.arr}>
            <LeftArrowIcon fill="#202229" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Skill = ({ children }) => {
  return (
    <div className="flex flex-col w-[380px]">
      <div className={style.SkillH}>{children}</div>
      <div className="grid grid-rows-2 grid-cols-2 gap-2">
        <div className={style.Skill}>
          <img
            src="/logos/Vectorbadge.svg"
            className="w-[16px] h-[22px] inline mr-1"
          />
          <span>989 Skills</span>
        </div>
        <div className={style.Skill}>
          <img
            src="/logos/Vectorsub-cat.svg"
            className="w-[16px] h-[22px] inline mr-1"
          />
          <span>49 Sub-Categories</span>
        </div>
        <div className={style.Skill}>
          <img
            src="/logos/Vectorprofile.svg"
            className="w-[16px] h-[22px] inline mr-1"
          />
          <span>1011 Profiles</span>
        </div>
      </div>
    </div>
  );
};
export const MarketPlaceCard = () => {
  const logos = [
    {
      text: "Shopify Developer",
      logo: "/imgs/pexels-christina-morillo-1181424-removebg-preview 1shopify.png",
    },

    {
      text: "Magento Developer",
      logo: "/imgs/pexels-puwadon-sangngern-13419240-removebg-preview 1magento.png",
    },
    {
      text: "Webflow Developer",
      logo: "/imgs/image 247webflow.png",
    },
    {
      text: "Data Scientist",
      logo: "/imgs/image 244data-sc.png",
    },
    {
      text: "Dot Net Developer",
      logo: "/imgs/image 246dotnet.png",
    },
  ];
  return (
    <div className={`${style.Rectangle}`}>
      <div className={`${style.RectangleH}`}>
        Your one-stop marketplace for finding the talent your business needs.
      </div>
      <div className="flex flex-col xl:grid grid-cols-2 w-[80%] h-[500px] xl:h-[224px] justify-center items-center ">
        <Skill>Find Dev and IT professionals to scale your business.</Skill>
        <Card header={"IT & Development"} logos={logos} type={"right"} />
      </div>
      <div className="flex flex-col xl:grid grid-cols-2   h-[500px] w-[80%] xl:h-[224px] items-center justify-center">
        <Skill>Explore Creative individuals with a keen eye for detail.</Skill>
        <Card header={"Design & Creative"} logos={logos} type={"left"} />
      </div>
      <div className="grid grid-cols-2 w-[80%] h-[74px] mt-[100px] justify-center items-center">
        <div className="flex items-center  text-[22px]">
          <div className="w-[74px] h-[74px] rounded-[30px] mr-[12px] py-[30px] px-[25px] bg-black">
            <LeftArrowIcon fill="white" />
          </div>
          <span>Explore More</span>
        </div>
        <div className=" ml-[200px]  text-[22px] ">
          <span className="font-[500]">30 more</span> to explore
        </div>
      </div>
    </div>
  );
};
