import React from 'react'
import { Steps } from '../../re-use/Steps'
import style from "./style.module.css"

export const FourSection = () => {
  const info ="Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.";
  return (
    <div className={style.Frame}>
      <h1 className={style.h1}>How we ensure you’re in good hands.</h1>
      <p className={style.p}>
        With our comprehensive screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days.
      </p>
      <div>
        <Steps num={1} sub={"Video Interview"} info={info} />
        <Steps num={1} sub={"Video Interview"} info={info} />
        <Steps num={1} sub={"Video Interview"} info={info} />
        <Steps num={1} sub={"Video Interview"} info={info} />
        <Steps num={1} sub={"Video Interview"} info={info} />
      </div>
    </div>
  );
}
