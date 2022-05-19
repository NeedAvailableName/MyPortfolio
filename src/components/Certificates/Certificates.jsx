import React, { useContext } from "react";
import "./Certificates.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import js_basic from "../../img/js_basic.png";
import js_advanced from "../../img/js_advanced.png";
import react from "../../img/react.png";
import node from "../../img/node.png";
import edx from "../../img/edx.jpg"
import freshman from "../../img/freshman.png"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Some Certificates</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={js_basic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={js_advanced} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={react} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={node} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={edx} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={freshman} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
