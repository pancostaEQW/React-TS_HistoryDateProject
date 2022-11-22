import React, { useRef } from "react";
import MyDate2015 from "./MyDateTextContent/MyDate2015";
import MyDate2016 from "./MyDateTextContent/MyDate2016";
import MyDate2017 from "./MyDateTextContent/MyDate2017";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import MyDate2018 from "./MyDateTextContent/MyDate2018";
import MyDate2019 from "./MyDateTextContent/MyDate2019";
import MyDate2020 from "./MyDateTextContent/MyDate2020";
import MyDate2021 from "./MyDateTextContent/MyDate2021";
import MyDate2022 from "./MyDateTextContent/MyDate2022";

export default function MyDate() {
  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    680: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  };
  return (
    <div>
      <button className="swiper-button-pre">{"<"}</button>
      <button className="swiper-button-nex">{">"}</button>
      <Swiper
        breakpoints={sliderSettings}
        className="swiper-d"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        navigation={{
          prevEl: ".swiper-button-pre",
          nextEl: ".swiper-button-nex",
        }}
      >
        <SwiperSlide>
          <MyDate2015 />
        </SwiperSlide>
        <SwiperSlide>
          <MyDate2016 />
        </SwiperSlide>
        <SwiperSlide>
          <MyDate2017 />
        </SwiperSlide>
        <SwiperSlide>
          <MyDate2018 />
        </SwiperSlide>
        <SwiperSlide>
          <MyDate2019 />
        </SwiperSlide>
        <SwiperSlide>
          <MyDate2020 />
        </SwiperSlide>
        <SwiperSlide>
          <MyDate2021 />
        </SwiperSlide>
        <SwiperSlide>
          <MyDate2022 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
