import React from 'react'
import { Navlink } from '../../atoms/NavLink/Navlink'

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
      <>
        <svg
          width="112"
          height="28"
          viewBox="0 0 112 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 24.6698V21.354L4.8675 15.3855H0.376839V10.0801H13.0323V13.396L8.16483 19.3645H13.4092V24.6698H0Z"
            fill="white"
          />
          <path
            d="M18.7276 24.6698L13.3262 10.0801H20.9886L22.6216 16.4797L24.8512 10.0801H27.7089L29.9385 16.4797L31.5715 10.0801H39.2339L33.8325 24.6698H27.8973L26.2958 20.1934L24.6628 24.6698H18.7276Z"
            fill="white"
          />
          <path
            d="M46.4255 6.06798C45.7137 6.70904 44.803 7.02957 43.6934 7.02957C42.5838 7.02957 41.6731 6.70904 40.9613 6.06798C40.2495 5.40481 39.8936 4.55375 39.8936 3.51479C39.8936 2.47582 40.2495 1.63581 40.9613 0.99475C41.6731 0.331583 42.5838 0 43.6934 0C44.803 0 45.7137 0.331583 46.4255 0.99475C47.1373 1.63581 47.4932 2.47582 47.4932 3.51479C47.4932 4.55375 47.1373 5.40481 46.4255 6.06798ZM40.1762 24.6698V10.0801H47.242V24.6698H40.1762Z"
            fill="white"
          />
          <path
            d="M55.6789 24.6698C53.69 24.6698 52.1198 24.0619 50.9684 22.8461C49.8379 21.6303 49.2726 19.9613 49.2726 17.8392V0.132634H56.3383V17.6403C56.3383 18.215 56.4535 18.6682 56.6838 18.9997C56.935 19.3092 57.2595 19.464 57.6573 19.464H58.2539L57.8143 24.6698H55.6789Z"
            fill="white"
          />
          <path
            d="M70.4379 19.4308L71.7254 23.6419C70.3227 24.703 68.8363 25.2335 67.2662 25.2335C65.0261 25.2335 63.257 24.5814 61.959 23.2772C60.682 21.9729 60.0434 20.1824 60.0434 17.9055V15.3855H58.2848V10.0801H60.6087L60.8599 4.97375H67.1091V10.0801H70.6577V15.3855H67.1091V17.9055C67.1091 18.5466 67.2348 19.055 67.486 19.4308C67.7581 19.7845 68.1245 19.9613 68.5851 19.9613C69.0875 19.9613 69.7051 19.7845 70.4379 19.4308Z"
            fill="white"
          />
          <path
            d="M96.0933 16.6715C96.0933 21.7082 92.007 25.7912 86.9663 25.7912C81.9256 25.7912 77.8394 21.7082 77.8394 16.6715C77.8394 11.6347 81.9256 7.55167 86.9663 7.55167C92.007 7.55167 96.0933 11.6347 96.0933 16.6715Z"
            fill="#FFBE2E"
          />
          <path
            d="M93.7464 27.3546V5.98828L112 16.6715L93.7464 27.3546Z"
            fill="#FFBE2E"
          />
        </svg>
      </>
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
