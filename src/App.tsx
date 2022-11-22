import React, { MouseEventHandler, OptionHTMLAttributes, useEffect, useLayoutEffect, useRef, useState } from 'react';
import MyDate from './MyDate';
import MyPointers from './MyPointers';
import MyPoints from './MyPoints';
import 'swiper/css';
import gsap from 'gsap';
import MyCircle from './MyCircle';

function App() {
  
//  const a = () => gsap.to('.history-date', {  duration: 2, rotation: '+=360'});
 
  return (
    <div>
      {/* <div className='circle'/>
      <MyPoints/> */}
      <MyCircle></MyCircle>
      <div className='left-line'/>
      <div className='right-line'/>
      <div className='center-line-v'/>
      <div className='center-line-g'/>
      <div className='history-date'>Исторические даты</div>
      <div className='gradient'/>  
      <MyDate></MyDate>
    </div>  
  );
}

export default App;
