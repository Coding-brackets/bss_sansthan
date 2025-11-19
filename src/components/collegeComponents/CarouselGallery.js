import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "../../styles/ImageCarousel.module.css";

const CarouselGallery = ({ items, para }) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  const isMobile = windowWidth < 768;

  const CONFIG = {
    activeWidth: isMobile ? 300 : 500,
    neighborWidth: isMobile ? 60 : 220,
    activeHeight: isMobile ? 420 : 520,
    neighborHeight: isMobile ? 380 : 450,
    gap: 20,
  };

  const getStyles = (index) => {
    const total = items.length;
    let dist = index - activeIndex;

    if (dist > total / 2) dist -= total;
    if (dist < -total / 2) dist += total;

    const activeHalf = CONFIG.activeWidth / 2;
    const neighborHalf = CONFIG.neighborWidth / 2;
    const firstOffset = activeHalf + neighborHalf + CONFIG.gap;
    const secondOffset = firstOffset + CONFIG.neighborWidth + CONFIG.gap;

    let base = {
      position: "absolute",
      left: "50%",
      transition: "all 0.6s ease",
      opacity: 0,
      zIndex: 0,
      transform: "translateX(-50%)",
      width: "0px",
      height: "0px",
    };

    if (dist === 0) {
      return {
        ...base,
        width: CONFIG.activeWidth,
        height: CONFIG.activeHeight,
        opacity: 1,
        zIndex: 10,
      };
    }

    if (Math.abs(dist) === 1) {
      const sign = dist > 0 ? 1 : -1;
      return {
        ...base,
        width: CONFIG.neighborWidth,
        height: CONFIG.neighborHeight,
        opacity: 1,
        zIndex: 8,
        transform: `translateX(calc(-50% + ${sign * firstOffset}px))`,
      };
    }

    if (Math.abs(dist) === 2) {
      const sign = dist > 0 ? 1 : -1;
      return {
        ...base,
        width: CONFIG.neighborWidth,
        height: CONFIG.neighborHeight * 0.9,
        opacity: isMobile ? 0 : 1,
        zIndex: 5,
        transform: `translateX(calc(-50% + ${sign * secondOffset}px))`,
      };
    }

    return base;
  };

  return (
    <div className="text-center">
      <h2 className="section_heading text-center mb-2">Our Gallery</h2>
        <p className="section_para text-center ">{para}</p>

      <div
        className="Gallery_carousel-wrapper position-relative mx-auto overflow-hidden mb-80"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="carousel-inner-area position-relative w-100 h-100 d-flex justify-content-center align-items-center">
          {items.map((item, index) => {
            const styles = getStyles(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                className="carousel-card shadow-lg overflow-hidden"
                style={styles}
                onClick={() => setActiveIndex(index)}
              >
                <div className="position-relative w-100 h-100">
                  <img
                    src={item.img}
                    alt=""
                    className="w-100 h-100 object-fit-cover"
                    draggable="false"
                  />

                  {/* Bottom overlay only on active */}
                  <div className={`carousel-info text-start ${isActive ? "show" : ""}`}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* PREV BUTTON */}
          <button
            className="carousel-btn prev-btn btn btn-light shadow"
            onClick={handlePrev}
          >
            <ChevronLeft size={22} />
          </button>

          {/* NEXT BUTTON */}
          <button
            className="carousel-btn next-btn btn btn-light shadow"
            onClick={handleNext}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="carousel-dots d-flex gap-2 justify-content-center">
          {items.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`dot ${i === activeIndex ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselGallery;
