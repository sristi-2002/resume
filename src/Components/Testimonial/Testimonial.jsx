import React from 'react'
import "./Testimonial.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

import { themeContext } from "../../Context";
import{ useContext } from "react";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonial = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const clients =[
        {
            img: profilePic1,
            review:
                "Sristi Mitra  huiogogougbbbbbbbhvutkd6rs5uestuckhvkhvkyudfutdsyrxhfmxhrsrhy",
            
        },
        {
            img: profilePic2,
            review:
                "Rai wkwdewmdmwek;md;kwemfk;mew;kdmk",

        },
        {
            img: profilePic3,
            review:
                "Rai ncasnckpewnpcndewjdkewjdwjqkk",

        },
        {
            img: profilePic4,
            review:
                "Rai kjcipwsciphspihpiwejd[qwjdieijfipjweipfewo",

        },
     
    ]
  return (
    <div className="t-wrapper" id = "Testimonials">
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me ...</span>
            <div className="blur t-blur1"
                style={{ background : "var(--purple)"}}>
            </div>
            <div className="blur t-blur2" style={{ background : "skyblue" }}></div>
            
        </div>

        <Swiper

            modules = {[Pagination]}
            slidersPerView = {1}
            pagination={{ clickable: true }}
        >
            {clients.map((client, index) => {
                return (
                    <SwiperSlide key = {index}>
                        <div className = "testimonial">
                             <img src={client.img} alt="" />
                            <span>{client.review}</span>
                    
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>

    </div>
  );
}

export default Testimonial