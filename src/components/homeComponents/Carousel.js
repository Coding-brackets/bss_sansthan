// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from "lucide-react";


// const slides = [
//   {
//     id: 1,
//     image: "/assets/carousel1.png",
//     title: "Thriving Beyond Campus",
//     subtitle: "Life at BSS",
//     description:
//       "Life at BSS is dynamic, inspiring and purpose-driven. Students experience an enriching campus life filled with academics, clinical practice, sports and cultural activities.",
//   },
//   {
//     id: 2,
//     image: "/assets/carousel2.jpg",
//     title: "Workshops & Seminars",
//     subtitle: "Learn Beyond Classroom",
//     description:
//       "Regular workshops and seminars prepare students with real-world insights, teamwork, and professional exposure.",
//   },
//   {
//     id: 3,
//     image: "/assets/carousel3.jpg",
//     title: "Rhythm 2025",
//     subtitle: "Annual Cultural Fest",
//     description:
//       "Our annual event 'Rhythm' celebrates creativity, unity and leadership through art, dance, and music.",
//   },
//   {
//     id: 4,
//     image: "/assets/carousel3.jpg",
//     title: "Inspiring Leaders",
//     subtitle: "Growth Beyond Books",
//     description:
//       "BSS students develop leadership skills through active participation in cultural and academic committees.",
//   },
//   {
//     id: 5,
//     image: "/assets/carousel3.jpg",
//     title: "Skill Enhancement",
//     subtitle: "Workshops & Labs",
//     description:
//       "Hands-on workshops and advanced laboratories equip our students with real-world technical expertise.",
//   },
// ];

// const Carousel = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sliderRef = useRef();

//   const nextSlide = () => sliderRef.current.slickNext();
//   const prevSlide = () => sliderRef.current.slickPrev();

//   const settings = {
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     infinite: true,
//     speed: 700,
//     autoplay: false,
//     autoplaySpeed: 10000,
//     arrows: false,
//     beforeChange: (_, next) => setActiveSlide(next),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: "40px",
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: "40px",
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="carouse_banner">
//       <div
//         className="carousel-wrapper mb-100"
//         style={{ margin: "40px 0px 120px 0px" }}
//       >
//         <div className="carousel-container">
//           <Slider ref={sliderRef} {...settings}>
//             {slides.map((slide, index) => {
//               const isActive = index === activeSlide;
//               return (
//                 <div key={slide.id} className="carousel-item">
//                   <div
//                     className={`carousel-image-wrapper ${
//                       isActive ? "active" : ""
//                     }`}
//                   >
//                     <div className="position-relative"  style={{ display: "grid", gap: "14px"  }}>
//                     <div className="carousel_image_sec">
//                       <img src={slide.image} alt={slide.title} />
//                       </div>

//                       {isActive && (
//                         <div className="carousel-content d-flex">
//                         <div className="carousel-content-banner">
//                         <h3>{slide.title} <br/><span>{slide.subtitle}</span></h3>
//                         <div className="slide-controls">
//                             <button onClick={prevSlide} className="control-btn">
//                               <ChevronLeft size={20} />
//                             </button>
//                             <span>
//                               {String(activeSlide + 1).padStart(2, "0")}
//                               {slides.length}
//                             </span>
//                             <button onClick={nextSlide} className="control-btn">
//                               <ChevronRight size={20} />
//                             </button>
//                           </div>
//                         </div>
                          
                          
//                           <p>{slide.description}</p>

                          
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;




"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, image: "/assets/carousel1.png", title: "Thriving Beyond Campus", subtitle: "Life at BSS", description: "Life at BSS is dynamic, inspiring and purpose-driven. Students experience an enriching campus life filled with academics, clinical practice, sports and cultural activities." },
  { id: 2, image: "/assets/carousel2.jpg", title: "Workshops & Seminars", subtitle: "Learn Beyond Classroom", description: "Regular workshops and seminars prepare students with real-world insights, teamwork, and professional exposure." },
  { id: 3, image: "/assets/carousel3.jpg", title: "Rhythm 2025", subtitle: "Annual Cultural Fest", description: "Our annual event 'Rhythm' celebrates creativity, unity and leadership through art, dance, and music." },
  { id: 4, image: "/assets/carousel3.jpg", title: "Inspiring Leaders", subtitle: "Growth Beyond Books", description: "BSS students develop leadership skills through active participation in cultural and academic committees." },
  { id: 5, image: "/assets/carousel3.jpg", title: "Skill Enhancement", subtitle: "Workshops & Labs", description: "Hands-on workshops and advanced laboratories equip our students with real-world technical expertise." },
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef(null);

  // Compute slidesToShow based on window width
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 480) setSlidesToShow(1);     // small phones
      else if (w < 768) setSlidesToShow(1); // tablets / small screens (you can set 2 if desired)
      else if (w < 959) setSlidesToShow(1); 
      else if (w < 1024) setSlidesToShow(3); // small desktops / large tablets
      else setSlidesToShow(3);             // desktop
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const nextSlide = () => sliderRef.current && sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current && sliderRef.current.slickPrev();

  const settings = {
    centerMode: true,
    centerPadding: slidesToShow === 1 ? "40px" : "0px", // keep some padding on mobile
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
      <div className="carousel-wrapper mb-100" style={{ margin: "40px 0px 120px 0px" }}>
        <div className="carousel-container" style={{ position: "relative" }}>
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => {
              // When using infinite:true, Slick duplicates slides; activeSlide corresponds to the internal index.
              // For display purposes we compare indexes modulo slides.length
              const isActive = ((activeSlide % slides.length) + slides.length) % slides.length === index;
              return (
                <div key={slide.id} className="carousel-item">
                  <div className={`carousel-image-wrapper ${isActive ? "active" : ""}`}>
                    <div className="position-relative" style={{ display: "grid", gap: "14px" }}>
                      <div className="carousel_image_sec">
                        <img src={slide.image} alt={slide.title} style={{ width: "100%", borderRadius: 8 }} />
                      </div>

                      {/* Show content only on active (center) slide */}
                      {isActive && (
                        <div className="carousel-content d-flex">
                          <div className="carousel-content-banner">
                            <h3>
                              {slide.title} <br />
                              <span>{slide.subtitle}</span>
                            </h3>

                            <div className="slide-controls" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <button onClick={prevSlide} className="control-btn" aria-label="Previous">
                                <ChevronLeft size={20} />
                              </button>

                              <span>
                                {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                              </span>

                              <button onClick={nextSlide} className="control-btn" aria-label="Next">
                                <ChevronRight size={20} />
                              </button>
                            </div>
                          </div>

                          <p style={{ marginTop: 8 }}>{slide.description}</p>
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

