import React from "react";
import { LogoCard } from "../../atoms/LogoCard/LogoCard";
import style from "./style.module.css";

const Card = ({ header, logos, type }) => {
  return (
    <div className={style.card}>
      <div className="font-bold">{header}</div>
      <div className="flex">
        {type === "left" ? (
          <div className={style.arr}>
            <svg
              width="96"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6412 7.5C11.6412 11.036 14.6317 13.9024 18.3206 13.9024C22.0095 13.9024 25 11.036 25 7.5C25 3.96403 22.0095 1.09756 18.3206 1.09756C14.6317 1.09756 11.6412 3.96403 11.6412 7.5Z"
                fill="#202229"
              />
              <path
                d="M13.3588 15L13.3588 2.41685e-08L1.55709e-08 7.5L13.3588 15Z"
                fill="#202229"
              />
            </svg>
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
            <svg
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z"
                fill="#202229"
              />
              <path
                d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z"
                fill="#202229"
              />
            </svg>
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
          <svg
            className="inline mr-2"
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5.86795C10.1217 5.86795 12.1566 6.71718 13.6569 8.22883C15.1571 9.74047 16 11.7907 16 13.9285C16 16.0663 15.1571 18.1165 13.6569 19.6282C12.1566 21.1398 10.1217 21.989 8 21.989C5.87827 21.989 3.84344 21.1398 2.34315 19.6282C0.842855 18.1165 0 16.0663 0 13.9285C0 11.7907 0.842855 9.74047 2.34315 8.22883C3.84344 6.71718 5.87827 5.86795 8 5.86795V5.86795ZM8 9.39444L6.677 12.0947L3.72 12.528L5.86 14.6288L5.355 17.597L8 16.1955L10.645 17.596L10.14 14.6288L12.28 12.527L9.323 12.0937L8 9.39444ZM9 0.829102L14 0.830109V3.85281L12.637 4.99943C11.5059 4.40152 10.2711 4.02897 9 3.90218V0.830109V0.829102ZM7 0.829102V3.90218C5.72935 4.02878 4.49482 4.40098 3.364 4.99842L2 3.85281V0.830109L7 0.829102V0.829102Z"
              fill="#A285D0"
            />
          </svg>
          <span>989 Skills</span>
        </div>
        <div className={style.Skill}>
          <svg
            className="inline mr-2"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10.9194H8V0.84375H0V10.9194ZM0 18.98H8V12.9346H0V18.98ZM10 18.98H18V8.90429H10V18.98ZM10 0.84375V6.88916H18V0.84375H10Z"
              fill="#A285D0"
            />
          </svg>

          <span>49 Sub-Categories</span>
        </div>
        <div className={style.Skill}>
          <svg
            className="inline mr-2"
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.82485 10.8415V17.423H0C0 15.6775 0.719044 14.0034 1.99895 12.7692C3.27886 11.5349 5.01479 10.8415 6.82485 10.8415ZM11.9435 17.0117L9.4362 18.2827L9.9148 15.5909L7.88696 13.6839L10.6903 13.2906L11.9435 10.8415L13.1975 13.2906L16 13.6839L13.9722 15.5909L14.4499 18.2827L11.9435 17.0117ZM6.82485 10.0188C3.9968 10.0188 1.70621 7.80985 1.70621 5.08263C1.70621 2.35541 3.9968 0.146484 6.82485 0.146484C9.65289 0.146484 11.9435 2.35541 11.9435 5.08263C11.9435 7.80985 9.65289 10.0188 6.82485 10.0188Z"
              fill="#A285D0"
            />
          </svg>

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
      logo: "/logos/pexels-christina-morillo-1181424-removebg-preview 1shopify.png",
    },

    {
      text: "Magento Developer",
      logo: "/logos/pexels-puwadon-sangngern-13419240-removebg-preview 1magento.png",
    },
    {
      text: "Webflow Developer",
      logo: "/logos/image 247webflow.png",
    },
    {
      text: "Data Scientist",
      logo: "/logos/image 244data-sc.png",
    },
    {
      text: "Dot Net Developer",
      logo: "/logos/image 246dotnet.png",
    },
  ];
  return (
    <div className={style.Rectangle}>
      <div className={style.RectangleH}>
        Your one-stop marketplace for finding the talent your business needs.
      </div>
      <div className="grid grid-cols-2 w-[80%] h-[224px]">
        <Skill>Find Dev and IT professionals to scale your business.</Skill>
        <Card header={"IT & Development"} logos={logos} type={"right"} />
      </div>
      <div className="grid grid-cols-2 w-[80%] h-[224px] mt-10">
        <Skill>Explore Creative individuals with a keen eye for detail.</Skill>
        <Card header={"IT & Development"} logos={logos} type={"left"} />
      </div>
      <div className="grid grid-cols-2 w-[80%] h-[74px] mt-[100px] justify-center items-center">
        <div className="flex items-center  text-[22px]">
          <div className="w-[74px] h-[74px] rounded-[30px] mr-[12px] py-[30px] px-[25px] bg-black">
            <svg
              className="text-white"
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z"
                fill="#ffffff"
              />
              <path
                d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z"
                fill="#ffffff"
              />
            </svg>
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
