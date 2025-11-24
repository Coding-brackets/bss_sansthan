"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion as Motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
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
                Committed to Excellence in nursing courses
              </Motion.h4>

              <Motion.h1 variants={fadeUp}>
                Welcome to Bhondekar Shikshan Sanstha! <span>(BSS)</span>
              </Motion.h1>

              <Motion.p variants={fadeUp}>
                Bhondekar Shiksha Sansthan, Bhandara, since 2002, is a trusted
                name in medical and nursing education. The institution is
                dedicated to nurturing skilled healthcare professionals through
                world-class teaching, modern facilities, advancement of medical
                research and learning. With a strong foundation of ethics and
                excellence, we inspire students to serve humanity through
                knowledge and innovation.
              </Motion.p>

              {/* BUTTONS */}
              <Motion.div variants={fadeUp} className="hero_btns d-flex gap-3">
                <Motion.a
                  href="/about-us"
                  className="hero_btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us <MdArrowOutward className="ms-2 angle_arrow" />
                </Motion.a>

                <Motion.a
                  href="/leadership"
                  className="hero_btn_outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Connected
                </Motion.a>
              </Motion.div>
            </Motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6 border_right position-relative pe-0 hero-img-wrapper pt-5">
            <Image
              src="/assets/heroimg.png"
              alt="Hero"
              className="hero_image"
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "right bottom" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
