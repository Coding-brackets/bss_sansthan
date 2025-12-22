import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CAROUSEL_ITEMS } from "../../data/carouselData";
import Image from "next/image";
import LeftArrow from "../svg/leftArrow";
import RightArrow from "../svg/rightArrow";

export const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length
    );
  }, []);

  // Auto-play setup
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex]); // keeping deps close to your original logic

  // Calculate the visual position/style for each item
  const getStyles = (index) => {
    const length = CAROUSEL_ITEMS.length;
    // Calculate shortest distance in a circular array
    let offset = (index - currentIndex) % length;
    if (offset > length / 2) offset -= length;
    if (offset < -length / 2) offset += length;

    // Identify positions
    const isActive = offset === 0;
    const isPrev = offset === -1;
    const isNext = offset === 1;
    const isFarPrev = offset < -1;
    const isFarNext = offset > 1;

    // Base style for transition
    let styles = {
      transition: "all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)",
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%) scale(0)",
      opacity: 0,
      zIndex: 0,
    };

    if (isActive) {
      styles = {
        ...styles,
        left: "50%",
        zIndex: 50,
        opacity: 1,
        transform: "translate(-50%, -50%) scale(1)",
      };
    } else if (isPrev) {
      styles = {
        ...styles,
        left: "5%", // Positioned towards the left edge, partially off-screen
        zIndex: 30,
        opacity: 0.7,
        transform: "translate(-50%, -50%) scale(0.75)",
        cursor: "pointer",
      };
    } else if (isNext) {
      styles = {
        ...styles,
        left: "95%", // Positioned towards the right edge, partially off-screen
        zIndex: 30,
        opacity: 0.7,
        transform: "translate(-50%, -50%) scale(0.75)",
        cursor: "pointer",
      };
    } else if (isFarPrev) {
      styles = {
        ...styles,
        left: "-25%", // Far off to the left
        zIndex: 10,
        opacity: 0,
        transform: "translate(-50%, -50%) scale(0.5)",
      };
    } else if (isFarNext) {
      styles = {
        ...styles,
        left: "125%", // Far off to the right
        zIndex: 10,
        opacity: 0,
        transform: "translate(-50%, -50%) scale(0.5)",
      };
    }

    return { styles, offset };
  };

  return (
    <div
      className="custom_carousel-wrapper position-relative d-flex flex-column align-items-center justify-content-center mb-80 overflow-hidden w-100"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Blue Strip */}
      <div className="carousel-bg-strip shadow" />

      {/* Carousel Track */}
      <div className="carousel-track position-relative mx-auto">
        {CAROUSEL_ITEMS.map((item, index) => {
          const { styles, offset } = getStyles(index);
          const isActive = offset === 0;

          return (
            <div
              key={item.id}
              style={styles}
              onClick={() => {
                if (offset === -1) prevSlide();
                if (offset === 1) nextSlide();
              }}
              className="will-change-transform"
            >
              {isActive ? (
                // ACTIVE ITEM: Enlarged with Content Card
                <div className="custom-carousel-card d-flex flex-column shadow-lg overflow-hidden bg-transparent active-card">
                  {/* Image Section */}
                  <div className="carousel-card-image overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-100 h-100 object-cover"
                      width={1000}
                      height={1000}
                    />
                  </div>

                  {/* Pink Info Card */}
                  <div className="carousel-card-info carousel-content d-flex">
                    <div className="carousel-content-banner">
                      {/* Counter */}
                      <h3>
                        {item.category}
                        <br />
                        <span>{item.title}</span>
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
                          {/* Buttons */}
                          <div className="d-flex gap-2 mt-auto">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevSlide();
                              }}
                              className="control-btn"
                              aria-label="Previous slide"
                            >
                              <LeftArrow size={20} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextSlide();
                              }}
                              className="control-btn"
                              aria-label="Next slide"
                            >
                              <RightArrow size={20} />
                            </button>
                          </div>
                          <div className="carousel-index">
                            <span className="counter-current">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>
                              /{String(CAROUSEL_ITEMS.length).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Info */}
                      <p className="text-white m-0">
                        {item.description}
                      </p>
                  </div>
                </div>
              ) : (
                // SIDE ITEMS: Image Only, Scaled Down
                <div className="carousel-side-card  overflow-hidden shadow position-relative">
                  <div className="carousel-image-overlay" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100 object-cover side-image"
                    width={1000}
                    height={1000}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Dots */}
      <div className="d-flex gap-2 mt-3 d-md-none">
        {CAROUSEL_ITEMS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={
              "carousel-dot" +
              (idx === currentIndex ? " carousel-dot--active" : "")
            }
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
