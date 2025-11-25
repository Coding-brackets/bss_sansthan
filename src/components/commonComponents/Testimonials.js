"use client";
import Slider from "react-slick";
import { FaXTwitter } from "react-icons/fa6";
import LeftArrow from "../svg/leftArrow";
import RightArrow from "../svg/rightArrow";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: "Students describe BSS as a place where learning meets purpose. From supportive faculty to real-world hospital exposure, the institution provides the perfect environment to master medical skills, build confidence and prepare for a rewarding healthcare career.",
      name: "James Parker",
      role: "Operations Lead at TechEdge",
      img: "/assets/user.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />,
    },
    {
      text: "BSS provides an amazing balance of academics and hands-on learning. The exposure I received during my clinical sessions gave me the confidence to step into my career with ease.",
      name: "James Parker",
      role: "Operations Lead at TechEdge",
      img: "/assets/user.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />,
    },
    {
      text: "BSS provides an amazing balance of academics and hands-on learning. The exposure I received during my clinical sessions gave me the confidence to step into my career with ease.",
      name: "James Parker",
      role: "Operations Lead at TechEdge",
      img: "/assets/user.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />,
    },
    {
      text: "BSS provides an amazing balance of academics and hands-on learning. The exposure I received during my clinical sessions gave me the confidence to step into my career with ease.",
      name: "James Parker",
      role: "Operations Lead at TechEdge",
      img: "/assets/user.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />,
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (_, next) => setActiveSlide(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="testimonial_section pb-100">
      <div className="container text-center">
        <h2 className="section_heading">What do our students say?</h2>

        <div className="testimonial_slider_wrapper">
          <Slider {...settings}>
            {testimonials.map((item, i) => (
              <div key={i} className="testimonial_item">
                <motion.div
                  className={`testimonial_card mx-auto ${
                    activeSlide === i ? "active" : ""
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: activeSlide === i ? 1.2 : 1,
                    transition: { duration: 0.5 }, ease: "easeOut"
                  }}
                >
                  <motion.p
                    className="testimonial_text"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.2, duration: 0.4 },
                    }}
                  >
                    {item.text}
                  </motion.p>

                  <hr />

                  <motion.div
                    className="d-flex align-items-center justify-content-between gap-3 mt-3"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.35, duration: 0.4 },
                    }}
                  >
                    <div className="testimonial_detail d-flex align-items-center justify-content-start gap-3">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                      <div className="text-start">
                        <h6>{item.name}</h6>
                        <small>{item.role}</small>
                      </div>
                    </div>

                    <a href={item.socialLink} className="socialLink">
                      {item.socialIcon}
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const SampleNextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next custom-arrow" onClick={onClick}>
    <RightArrow />
  </button>
);

const SamplePrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev custom-arrow" onClick={onClick}>
    <LeftArrow />
  </button>
);

export default Testimonials;
