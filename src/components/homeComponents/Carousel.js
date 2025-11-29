"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LeftArrow from "../svg/leftArrow";
import RightArrow from "../svg/rightArrow";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/assets/carousel1.png",
    title: "Thriving Beyond Campus",
    subtitle: "Life at BSS",
    description:
      "Life at BSS is dynamic, inspiring and purpose-driven. Students experience an enriching campus life filled with academics, sports and cultural activities. Regular seminars, workshops, and events like Rhythm 2025 encourage personal growth and leadership, while hands-on training prepares students for successful medical and nursing careers, shaping confident and skilled healthcare professionals for the future.",
  },
  {
    id: 2,
    image: "/assets/carousel2.jpg",
    title: "",
    subtitle: "Clinical Excellence",
    description:
      "Here, we make sure that Clinical excellence is at the heart of every learning experience. Students are trained through real-world practice and expert-guided clinical exposure in top healthcare facilities. The atmosphere here encourages precision, a key quality of successful medical professionals. Regular case discussions and skill demonstrations ensure students refine their techniques and build solid clinical judgment.",
  },
  {
    id: 3,
    image: "/assets/carousel3.jpg",
    title: "Community & Growth",
    subtitle: "(Student Leadership)",
    description:
      "Student leadership at BSS is built through action and collaboration. Learners take part in councils and activities that help them grow in confidence and decision-making. Through teamwork and meaningful participation, students learn to guide and support one another. These experiences help them shape strong values and a sense of purpose that stays with them long after they complete their medical studies.",
  },
  {
    id: 4,
    image: "/assets/carousel3.jpg",
    title: "Global Perspectives",
    subtitle: "(Seminars & Events)",
    description:
      "Across the year, BSS hosts seminars and global learning events like Rhythm 2025 that connect students with new ideas and global healthcare developments. Expert speakers, international collaborations, and academic forums help students stay informed and future-ready. These interactions broaden their understanding of the medical and nursing fields on a global scale, strengthening professional preparation.",
  },
  {
    id: 5,
    image: "/assets/carousel3.jpg",
    title: "Campus Culture",
    subtitle: "(Art & Recreation)",
    description:
      "Beyond academics, students here enjoy vibrant cultural experiences and recreational opportunities that make campus life truly memorable. Music, dance, sports and other creative events encourage expression and self-confidence. Annual celebrations, talent showcases, and student-led programs bring joy and unity. This balance of learning and recreation creates a lively and meaningful student journey.",
  },
  {
    id: 6,
    image: "/assets/carousel3.jpg",
    title: "Alumni Network",
    subtitle: "(Building Future)",
    description:
      "Graduates of BSS form a strong and supportive alumni community connected through shared achievements and professional growth. Many of our Alumni have established successful careers in hospitals and healthcare organizations across the globe. They regularly return to guide our students through mentorship. This ongoing bond strengthens the BSS legacy and builds brighter futures for every learner who joins the journey.",
  },
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef(null);

  // Compute slidesToShow based on window width
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 480) setSlidesToShow(1); // small phones
      else if (w < 768) setSlidesToShow(1);
      // tablets / small screens (you can set 2 if desired)
      else if (w < 991) setSlidesToShow(1);
      else if (w < 1024) setSlidesToShow(3); // small desktops / large tablets
      else setSlidesToShow(3); // desktop
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const nextSlide = () => sliderRef.current && sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current && sliderRef.current.slickPrev();

  const settings = {
    centerMode: true,
    centerPadding: slidesToShow === 1 ? "40px" : "40px", // keep some padding on mobile
    slidesToShow,
    infinite: true,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 10000,
    arrows: false,
    beforeChange: (_, next) => setActiveSlide(next),
    // optional: adaptiveHeight: true,
  };

  return (
    <div className="carouse_banner">
      <div
        className="carousel-wrapper mb-100"
        style={{ margin: "80px 0px 120px 0px" }}
      >
        <div className="carousel-container" style={{ position: "relative" }}>
          <Slider ref={sliderRef} {...settings} className="carousel__slider">
            {slides.map((slide, index) => {
              const isActive =
                ((activeSlide % slides.length) + slides.length) %
                  slides.length ===
                index;
              return (
                <div key={slide.id} className="carousel-item">
                  <div
                    className={`carousel-image-wrapper ${
                      isActive ? "active" : ""
                    }`}
                  >
                    <div
                      className="position-relative"
                      style={{ display: "grid", gap: "14px" }}
                    >
                      <div className="carousel_image_sec">
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0.6 }}
                          animate={
                            isActive
                              ? { scale: 1, opacity: 1 }
                              : { scale: 0.9, opacity: 0.6 }
                          }
                          transition={{ duration: 0.5 }}
                        >
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            style={{ width: "100%", borderRadius: 8 }}
                            width={1000}
                            height={1000}
                            className=""
                          />
                        </motion.div>
                      </div>

                      {isActive && (
                        <motion.div
                          className="carousel-content d-flex"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="carousel-content-banner">
                            <h3>
                              {slide.title} <br />
                              <span>{slide.subtitle}</span>
                            </h3>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <div
                                className="slide-controls"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                }}
                              >
                                <button
                                  onClick={prevSlide}
                                  className="control-btn"
                                >
                                  <LeftArrow size={20} />
                                </button>

                                <button
                                  onClick={nextSlide}
                                  className="control-btn"
                                >
                                  <RightArrow size={20} />
                                </button>
                              </div>
                              <div className="carousel-index">
                                {String(index + 1).padStart(2, "0")} /{" "}
                                {String(slides.length).padStart(2, "0")}
                              </div>
                            </div>
                          </div>

                          <p style={{ marginTop: 8 }} className="text-white">
                            {slide.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
