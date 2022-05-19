import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import music_player from "../../img/music_player.png";
import blockchain_demo from "../../img/blockchain_demo.png";
import my_portfolio from "../../img/my_portfolio.png";
import whitelist_dapp from "../../img/whitelist_dapp.png";

const Projects = () => {
  const clients = [
    {
      img: music_player,
      review:
        "A music player website with main functionalities: play, pause, skip, change volume, play next and random...",
    },
    {
      img: blockchain_demo,
      review:
        "A demo based on Bitcoin with some functions: create transaction, create block, check valid...",
    },
    {
      img: my_portfolio,
      review:
        "A website to introduce myself using Reactjs",
    },
    {
      img: whitelist_dapp,
      review:
        "A dapp allow user to connect Metamask wallet to join Whitelist of project",
    },
  ];

  return (
    <div className="t-wrapper" id="projects">
      <div className="t-heading">
        <span>My completed projects</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="projects">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Projects;
