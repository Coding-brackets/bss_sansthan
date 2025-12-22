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
      text: "BSS has given me much more than academic knowledge. The supportive faculty, hands-on hospital training, and real-world exposure have helped me grow both professionally and personally. I feel confident and well-prepared to begin my healthcare career.",
      name: "Rahul Sharma",
      role: "Nursing Student, BSS Institute",
      img: "/assets/testimonial.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />,
    },
    {
      text: "BSS has given me much more than academic knowledge. The supportive faculty, hands-on hospital training, and real-world exposure have helped me grow both professionally and personally. I feel confident and well-prepared to begin my healthcare career.",
      name: "Rahul Sharma",
      role: "Nursing Student, BSS Institute",
      img: "/assets/testimonial.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />,
    },
    {
      text: "BSS has given me much more than academic knowledge. The supportive faculty, hands-on hospital training, and real-world exposure have helped me grow both professionally and personally. I feel confident and well-prepared to begin my healthcare career.",
      name: "Rahul Sharma",
      role: "Nursing Student, BSS Institute",
      img: "/assets/testimonial.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />,
    },
    {
      text: "BSS has given me much more than academic knowledge. The supportive faculty, hands-on hospital training, and real-world exposure have helped me grow both professionally and personally. I feel confident and well-prepared to begin my healthcare career.",
      name: "Rahul Sharma",
      role: "Nursing Student, BSS Institute",
      img: "/assets/testimonial.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />,
    },
  ];

   const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
     autoplay: true,          // ✅ enable auto slide
  autoplaySpeed: 4000,     // ✅ time between slides (ms)

  pauseOnHover: true,      // ✅ stop when user hovers
    beforeChange: (_, next) => setActiveSlide(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="testimonial_section mb-80">
      <div className="container text-center">
        <motion.h2
          className="section_heading text-center mb-3"
          variants={fadeUp}
        >
          What Do Our Students Say About Us?
        </motion.h2>
        <motion.p
          className="text-center w-75 mx-auto mb-3 heading_con"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Students describe BSS as a place where one gets a supportive faculty,
          real-world exposure and more-importantly a friendly environment. They
          get the perfect atmosphere to master skills and prepare for a
          rewarding career.
        </motion.p>

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
                    transition: { duration: 0.5 },
                    ease: "easeOut",
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
