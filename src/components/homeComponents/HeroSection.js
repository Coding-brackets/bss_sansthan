"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion as Motion } from "framer-motion";
import Image from "next/image";

const HeroSection = ({subHeading, mainHeading, content, urltext1, urltext2, urlLink1, urlLink2, imgUrl}) => {
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
    <div className="container-fluid mb-100">
      <div className="hero_section my-40">
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
              <Motion.h4 variants={fadeUp}>
                {subHeading}
              </Motion.h4>

              <Motion.h1 variants={fadeUp}>
                {mainHeading} <span>(BSS)</span>
              </Motion.h1>

              <Motion.p variants={fadeUp}>
                {content}
              </Motion.p>

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
              className="hero_image"
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "right bottom" }}
            />
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
