import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousel1 from "../../../assets/carousel1.png";
import carousel2 from "../../../assets/carousel2.jpg";
import carousel3 from "../../../assets/carousel3.jpg";

const slides = [
  {
    id: 1,
    image: carousel1,
    title: "Thriving Beyond Campus",
    subtitle: "Life at BSS",
    description:
      "Life at BSS is dynamic, inspiring and purpose-driven. Students experience an enriching campus life filled with academics, clinical practice, sports and cultural activities.",
  },
  {
    id: 2,
    image: carousel2,
    title: "Workshops & Seminars",
    subtitle: "Learn Beyond Classroom",
    description:
      "Regular workshops and seminars prepare students with real-world insights, teamwork, and professional exposure.",
  },
  {
    id: 3,
    image: carousel3,
    title: "Rhythm 2025",
    subtitle: "Annual Cultural Fest",
    description:
      "Our annual event 'Rhythm' celebrates creativity, unity and leadership through art, dance, and music.",
  },
  {
    id: 4,
    image: carousel3,
    title: "Inspiring Leaders",
    subtitle: "Growth Beyond Books",
    description:
      "BSS students develop leadership skills through active participation in cultural and academic committees.",
  },
  {
    id: 5,
    image: carousel2,
    title: "Skill Enhancement",
    subtitle: "Workshops & Labs",
    description:
      "Hands-on workshops and advanced laboratories equip our students with real-world technical expertise.",
  },
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef();

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 10000,
    arrows: false,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carouse_banner">
      <div
        className="carousel-wrapper mb-100"
        style={{ margin: "160px 0px 260px 0px" }}
      >
        <div className="carousel-container">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;
              return (
                <div key={slide.id} className="carousel-item">
                  <div
                    className={`carousel-image-wrapper ${
                      isActive ? "active" : ""
                    }`}
                  >
                    <div className="position-relative"  style={{ display: "grid", gap: "14px"  }}>
                    <div className="carousel_image_sec">
                      <img src={slide.image} alt={slide.title} />
                      </div>

                      {/* Show content only on active (center) slide */}
                      {isActive && (
                        <div className="carousel-content d-flex">
                        <div>
                        <h3>{slide.title} <br/><span>{slide.subtitle}</span></h3>
                        <div className="slide-controls">
                            <button onClick={prevSlide} className="control-btn">
                              <ChevronLeft size={20} />
                            </button>
                            <span>
                              {String(activeSlide + 1).padStart(2, "0")}/
                              {slides.length}
                            </span>
                            <button onClick={nextSlide} className="control-btn">
                              <ChevronRight size={20} />
                            </button>
                          </div>
                        </div>
                          
                          
                          <p>{slide.description}</p>

                          
                        </div>
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
