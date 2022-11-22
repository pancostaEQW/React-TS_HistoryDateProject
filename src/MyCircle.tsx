import React, { useState } from "react";
import MyPointers from "./MyPointers";
import MyPoints from "./MyPoints";
import gsap from "gsap";

export default function MyCircle() {

  const [dig, setDig] = useState<number>(0)

  const enterScale1 = () =>
    gsap.to(".point1", {
      scale: 9,
      duration: 0.2,
      backgroundColor: "#F4F5F9",
      ease: "back",
    });
  const leaveScale1 = () =>
    gsap.to(".point1", { scale: 1, duration: 0.2, backgroundColor: "#42567A" });
  const enterScale2 = () =>
    gsap.to(".point2", {
      scale: 9,
      duration: 0.2,
      backgroundColor: "#F4F5F9",
      ease: "back",
    });
  const leaveScale2 = () =>
    gsap.to(".point2", { scale: 1, duration: 0.2, backgroundColor: "#42567A" });
  const enterScale3 = () =>
    gsap.to(".point3", {
      scale: 9,
      duration: 0.2,
      backgroundColor: "#F4F5F9",
      ease: "back",
    });
  const leaveScale3 = () =>
    gsap.to(".point3", { scale: 1, duration: 0.2, backgroundColor: "#42567A" });
  const enterScale4 = () =>
    gsap.to(".point4", {
      scale: 9,
      duration: 0.2,
      backgroundColor: "#F4F5F9",
      ease: "back",
    });
  const leaveScale4 = () =>
    gsap.to(".point4", { scale: 1, duration: 0.2, backgroundColor: "#42567A" });
  const enterScale5 = () =>
    gsap.to(".point5", {
      scale: 9,
      duration: 0.2,
      backgroundColor: "#F4F5F9",
      ease: "back",
    });
  const leaveScale5 = () =>
    gsap.to(".point5", { scale: 1, duration: 0.2, backgroundColor: "#42567A" });
  const enterScale6 = () =>
    gsap.to(".point6", {
      scale: 9,
      duration: 0.2,
      backgroundColor: "#F4F5F9",
      ease: "back",
    });
  const leaveScale6 = () =>
    gsap.to(".point6", { scale: 1, duration: 0.2, backgroundColor: "#42567A" });

  const plu = () => {
    setDig(dig + 1)
    if(dig === 6) 
    setDig(0)
    if(dig === 1) {
      cl1()
    }
    if(dig === 2) {
      cl1()
    }
    if(dig === 3) {
      cl3()
    }
    if(dig === 4) {
      cl4()
    }
    if(dig === 5) {
      cl5()
    }
  }
  const minu = () => {
    setDig(dig - 1)
    if(dig === 0)
    setDig(6)
    if(dig === 1) {
      cl1()
    }
    if(dig === 2) {
      cl1()
    }
    if(dig === 3) {
      cl3()
    }
    if(dig === 4) {
      cl4()
    }
    if(dig === 5) {
      cl5()
    }
  }

  const cl1 = () => gsap.to(".circle", { duration: 1, rotation: "+=60" });
  const cl6 = () => gsap.to(".circle", { duration: 1, rotation: "+=120" });
  const cl5 = () => gsap.to(".circle", { duration: 1, rotation: "+=180" });
  const cl3 = () => gsap.to(".circle", { duration: 1, rotation: "-=60" });
  const cl4 = () => gsap.to(".circle", { duration: 1, rotation: "-=120" });

  return (
    <div>
      <div className="circle">
        <div
          className="point1"
          onMouseEnter={enterScale1}
          onMouseLeave={leaveScale1}
        >
          <div className="point-text1" onClick={cl1}>
            1
          </div>
        </div>
        <div
          className="point2"
          onMouseEnter={enterScale2}
          onMouseLeave={leaveScale2}
        >
          <div className="point-text1" onClick={cl1}>
            2
          </div>
        </div>
        <div
          className="point3"
          onMouseEnter={enterScale3}
          onMouseLeave={leaveScale3}
        >
          <div className="point-text1" onClick={cl3}>
            3
          </div>
        </div>
        <div
          className="point4"
          onMouseEnter={enterScale4}
          onMouseLeave={leaveScale4}
          onClick={cl4}
        >
          <div className="point-text1">4</div>
        </div>
        <div
          className="point5"
          onMouseEnter={enterScale5}
          onMouseLeave={leaveScale5}
        >
          <div className="point-text1" onClick={cl5}>
            5
          </div>
        </div>
        <div
          className="point6"
          onMouseEnter={enterScale6}
          onMouseLeave={leaveScale6}
        >
          <div className="point-text1" onClick={cl6}>
            6
          </div>
        </div>
      </div>
      <div className="micro-numbers">{`0${dig}/06`}</div>
      <div>
        <button className="pointer-left" onClick={minu} ><div className="arrow-left">{">"}</div></button>  
        <button className="pointer-right" onClick={plu} ><div className="arrow-right">{">"}</div></button>
        <div className='center-content-numbers-left'>{dig+2015}</div> 
        <div className='center-content-numbers-right'>{dig+2015+1}</div> 
      </div>
    </div>
  );
}
