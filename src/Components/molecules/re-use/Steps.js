import React, { useState } from 'react'
import style from "./style.module.css"


export const Steps = ({ num, sub, info }) => {
  const [clicked,setClicked]=useState(false)
  /**
   * 
CSS
.Frame-626623 {
  width: 57px;
  height: 57px;
  margin: 0 23px 0 0;
  padding: 21px 20.2px 21.1px 21px;
  border-radius: 43.9px;
  background-color: #ececec;
}
   */
  return (
    <div className={style.stepCont}>
      <div className="flex gap-3 items-center">
        <div
          className={`w-[57px] rounded.[43.9px] ${
            clicked ? "bg-[#8ba4fd]" : "bg-[#ececec]"
            } h-[57px] flex justify-center items-center`}
          onClick={()=>setClicked(prev=>!prev)}
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.8221C0 0.368413 0.391439 0 0.873481 0H14.96C15.4421 0 15.8335 0.368413 15.8335 0.8221V14.08C15.8333 14.298 15.7412 14.507 15.5774 14.6611C15.4136 14.8152 15.1916 14.9019 14.96 14.9021H0.873481C0.641891 14.9019 0.419853 14.8152 0.256094 14.6611C0.0923348 14.507 0.000232871 14.298 0 14.08V0.8221ZM6.70461 4.48305C6.65167 4.44981 6.59014 4.4307 6.52657 4.42777C6.46301 4.42483 6.39979 4.43818 6.34364 4.46638C6.2875 4.49459 6.24053 4.53659 6.20775 4.58793C6.17496 4.63927 6.15759 4.69802 6.15747 4.75791V10.1442C6.15759 10.2041 6.17496 10.2628 6.20775 10.3142C6.24053 10.3655 6.2875 10.4075 6.34364 10.4357C6.39979 10.4639 6.46301 10.4773 6.52657 10.4743C6.59014 10.4714 6.65167 10.4523 6.70461 10.4191L10.9964 7.72675C11.0446 7.69652 11.0842 7.65553 11.1116 7.60744C11.139 7.55934 11.1533 7.50562 11.1533 7.45106C11.1533 7.39649 11.139 7.34278 11.1116 7.29468C11.0842 7.24658 11.0446 7.2056 10.9964 7.17537L6.70373 4.48305H6.70461Z"
              fill={clicked?"white":"black"}
            />
          </svg>
        </div>
        <div>
          <span className="font-[500]">Step {num}:</span> {sub}
        </div>
      </div>
      <div className={`${clicked ? "block" : "hidden"} ${style.stepInfo}`} >{info}</div>
    </div>
  );
}