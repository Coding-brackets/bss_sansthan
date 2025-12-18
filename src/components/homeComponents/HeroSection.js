"use client";

import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion as Motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles (mandatory)
import "swiper/css";
import "swiper/css/pagination";

const HeroSection = ({
  subHeading,
  mainHeading,
  content,
  urltext1,
  urltext2,
  urlLink1,
  urlLink2,
  imgUrl,
}) => {
  // const [showVideo, setShowVideo] = useState(false);

  // Stagger container for left content
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation for child elements
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container-fluid mb-100 overflow-hidden">
      <div className="hero_section my-40 position-relative">
         <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          spaceBetween={15}
          // autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="hero-swiper"
        >
          <SwiperSlide>
        <div className="row heroBanner position-relative">
          {/* LEFT SIDE CONTENT */}
          <div className="col-lg-6 p-0 border-right-mobile">
            <Motion.div
              className="hero_content cust_p-80"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Motion.h4 variants={fadeUp}>{subHeading}</Motion.h4>

              <Motion.h1 variants={fadeUp}>
                {mainHeading} <span>(BSS)</span>
              </Motion.h1>

              <Motion.p variants={fadeUp}>{content}</Motion.p>

              {/* BUTTONS */}
              <Motion.div variants={fadeUp} className="hero_btns d-flex gap-3">
                <Motion.a
                  href={urlLink1}
                  className="hero_btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {urltext1} <MdArrowOutward className="ms-2 angle_arrow" />
                </Motion.a>

                <Motion.a
                  href={urlLink2}
                  className="hero_btn_outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {urltext2}
                </Motion.a>
              </Motion.div>
            </Motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          {/* RIGHT SIDE IMAGE */}
          <Motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-lg-6 border_right position-relative pe-0 hero-img-wrapper mt-5"
          >
            <Image
              src={imgUrl}
              alt={mainHeading}
              fill
              priority
              className="hero_image"
              style={{ objectFit: "contain", objectPosition: "right bottom" }}
            />

            {/* PLAY ICON */}
            {/* <button
              className="video-play-btn"
              onClick={() => setShowVideo(true)}
            >
             
            </button> */}
             {/* {showVideo && (
            <Motion.div
              className="hero-video-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <button
                className="video-close"
                onClick={() => setShowVideo(false)}
              >
                ✕
              </button>

              <video
                src="/video/college.mp4"
                autoPlay
                controls
  loop
  muted
  playsInline
                className="hero-video"
              />
            </Motion.div>
          )} */}

          </Motion.div>

         
        </div>
        </SwiperSlide>
         {/* SLIDE 2: VIDEO ONLY */}
          <SwiperSlide>
            <div className="hero-video-slide d-flex align-items-center justify-content-center heroBanner">
              <video
                src="/video/college.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="hero-video"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
