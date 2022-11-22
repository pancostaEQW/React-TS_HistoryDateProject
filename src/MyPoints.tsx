import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MyPoints() {
  // const nn = () => gsap.to('.main-number-point-text', {  duration: 2, rotation: '+=360' });
  const enterScale1 = () =>
    gsap.to(".point1", {
      scale: 9,
      duration: 0.2,
      backgroundColor: "#F4F5F9",
      ease: "back",
      rotation: 360,
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

  return (
    <div>
      <div
        className="point1"
        onMouseEnter={enterScale1}
        onMouseLeave={leaveScale1}
      ><div className="point-text1">1</div></div>
      <div
        className="point2"
        onMouseEnter={enterScale2}
        onMouseLeave={leaveScale2}
      ><div className="point-text1">2</div></div>
      <div
        className="point3"
        onMouseEnter={enterScale3}
        onMouseLeave={leaveScale3}
      ><div className="point-text1">3</div></div>
      <div
        className="point4"
        onMouseEnter={enterScale4}
        onMouseLeave={leaveScale4}
      ><div className="point-text1">4</div></div>
      <div
        className="point5"
        onMouseEnter={enterScale5}
        onMouseLeave={leaveScale5}
      ><div className="point-text1">5</div></div>
      <div
        className="point6"
        onMouseEnter={enterScale6}
        onMouseLeave={leaveScale6}
      ><div className="point-text1">6</div></div>
      
    </div>
  );
}
