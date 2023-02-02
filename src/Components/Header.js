import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper";
import { Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";

import Header1 from "../Images/edu_img-4.jpg";
import Header2 from "../Images/stude-galle.jpg";
import Header3 from "../Images/caro.jpg";
import Header4 from "../Images/syudy-2.jpg";
import Header5 from "../Images/collegi-front-modified.png";
import Header6 from "../Images/collegi-back-modified.png";
import Header7 from "../Images/school-front-modified.png";
import Header8 from "../Images/school-back-modified.png";
import Header9 from "../Images/aptitude-front-modified.png";
import Header10 from "../Images/aptitude-back-modified.png";
import slide1 from "../Images/slide-1.JPG";
import slide2 from "../Images/slide-13.jpg";
import slide3 from "../Images/slide-3.JPG";
import slide4 from "../Images/slide-4.JPG";
import slide5 from "../Images/slide-5.jpg";
import slide6 from "../Images/slide-6.jpg";
import slide7 from "../Images/slide-8.jpg";
import slide8 from "../Images/slide-9.jpg";
import slide9 from "../Images/slide-10.jpg";
import slide10 from "../Images/slide-11.jpg";
import Apply_online from './Apply_online';
import Navbar from './Navbar';
import Footer from './Footer';
import Whatsapp_button from './Whatsapp_button';
import Sticky_Container from './Sticky_Container';


export default function Header() {
  return (
    <>
    <Navbar/>
    <Sticky_Container/>
    <Apply_online/>
    <Carousel prevIcon={null} nextIcon={null} indicators={false}>
      <Carousel.Item>
      <div
          style={{
            height: "88vh",
            background:
              `linear-gradient(to bottom, rgba(37, 37, 37, 0.73), rgba(37, 37, 37, 0.73)), url(${Header1})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        
      </Carousel.Item>
      <Carousel.Item>
      <div
          style={{
            height: "88vh",
            background:
              `linear-gradient(to bottom, rgba(37, 37, 37, 0.73), rgba(37, 37, 37, 0.73)), url(${Header2})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
      <div
          style={{
            height: "88vh",
            background:
              `linear-gradient(to bottom, rgba(37, 37, 37, 0.73), rgba(37, 37, 37, 0.73)), url(${Header3})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
      <div
          style={{
            height: "88vh",
            background:
              `linear-gradient(to bottom, rgba(37, 37, 37, 0.73), rgba(37, 37, 37, 0.73)), url(${Header4})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </Carousel.Item>
    </Carousel>
  <div className="card">
    <div className="card-body">
    <h6 className="top-head">HELLO STUDENTS</h6>
      <h3 className="card-title">WELCOME TO EDUCATION</h3>
      <p className="card-text">Education, discipline that is concerned with methods of teaching and learning in schools or school-like environments as opposed to various nonformal and informal means of socialization (e.g., rural development projects and education through parent-child relationships).</p>
    <Link to='/contact' className="gradient-button gradient-button-1">Contact Us</Link>
    
      
    </div>
  </div>
  <div className="hoja">
    <div className="flip-card">
      <div className="flip-card-front">
        <div className="inner">
          <img src={Header5} className="icon img-responsive"/>
          <h3>Professionals Collegiate</h3>
        </div>
      </div>
      <div className="flip-card-back">
        <div className="inner">
          <img src={Header6} className="icon img-responsive"/>
          <h3>Coaching System</h3>
          <p>We are successfully preparing students for HscI & HscII for many years, Professionals Collegiate has a
            proven track record of success.
            Get started today and join the ranks of our successfull students
          </p>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-front">
        <div className="inner">
          <img src={Header7} className="icon"/>
          <h3>Professionals Schooling System</h3>
        </div>
      </div>
      <div className="flip-card-back">
        <div className="inner">
          <img src={Header8} className="icon"/>
          <h3>Kindergarten to Matric</h3>
          <p>Our institution lays emphases on the character building of the students as an integral part of their
            training and development alongside making sure that talents of the all students are brought to the surface
            and they become gems of the society and play a vital role in this world.</p>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-front">
        <div className="inner">
          <img src={Header9} className="icon"/>
          <h3>Professionals Aptitude</h3>
        </div>
      </div>
      <div className="flip-card-back">
        <div className="inner">
          <img src={Header10} className="icon"/>
          <h3>ECAT and MCAT System</h3>
          <p>Our institution for the preparation of MCAT and ECAT with experience of many years.We have secured top
            positions in medical and engineering colleges.Our expereienced teachers who are dedicated towards the success
            of their students.</p>
        </div>
      </div>
    </div>
  </div>

  <div id='show_bg_2'>
    <p>I Went to Professional Collegiate</p>
    <div className="subscribe-box">
    <h1>Subscribe</h1>
    <span>get subscribe to the latest info.</span>
    <input className='sams' type="notallow" name="email_address" placeholder="Email Address"/>
    <button type="submit">Subscribe</button>
  </div>
  </div>
  
  <Swiper 
    modules={[Autoplay]}
    className="mySwiper"
    slidesPerView={4}
    spaceBetween={10}
    autoplay={{delay: 3000,disableOnInteraction: false}}
    breakpoints ={{
      1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    320: {
      slidesPerView: 1
    },
}}
  >
  <div className="swiper mySwiper">
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide1} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide2} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide3} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide4} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide5} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide6} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide7} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide8} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide9} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide img-fluid">
        <img src={slide10} alt=""/>
      </SwiperSlide>
    </div>
  </div>
  </Swiper>
  <Footer/>
  <Whatsapp_button/>
    </>
  )
}
