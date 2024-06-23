import React from "react";
import { Steps } from "../../re-use/Steps";
import style from "./style.module.css";

export const FourSection = () => {
  const info =
    "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.";
  return (
    <div className={style.Frame}>
      <h1 className={style.h1}>How we ensure you’re in good hands.</h1>
      <p className={style.p}>
        With our comprehensive screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days.
      </p>
      <div>
        <Steps num={1} sub={"Resume Screening"} info={info} />
        <Steps num={2} sub={"Video Interview"} info={info} />
        <Steps num={3} sub={"Technical Evaluation"} info={info} />
        <Steps num={4} sub={"Application Review"} info={info} />
        <Steps num={5} sub={"Lets get to work"} info={info} />
      </div>
    </div>
  );
};
