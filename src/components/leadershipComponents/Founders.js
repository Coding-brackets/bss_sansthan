import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RightArrow from "../svg/rightArrow";
import LeftArrow from "../svg/leftArrow";

const Founders = () => {
  const founders = [
    {
      id: 1,
      image: "/assets/leader&founders/manjulatai.png",
      founderSign: "/assets/leader&founders/sign.png",
      name: "Mrs. Manjulatai Bhojraj Bhondekar",
      title: "President, Bhondekar Shikshan Sanstha",
      quote:
        "Our Institution upholds the motto “Education is Life,” providing quality learning. We empower students to dream big and achieve excellence in every field.",
    },
    {
      id: 2,
      image: "/assets/leader&founders/founderImage1.webp",
      founderSign: "/assets/leader&founders/sign.png",
      name: "Mrs. Manjulatai Bhojraj Bhondekar",
      title: "President, Bhondekar Shikshan Sanstha",
      quote:
        "I formally welcome you to BSS. I encourage you to pursue education with discipline and integrity. Within this institution, knowledge refines character and values cultivate leadership. Dedicate yourselves to learning and excellence for the progress of society and the nation.",
    },

    {
      id: 2,
      image: "/assets/leader&founders/founderImage2.webp",
      founderSign: "/assets/leader&founders/sign.png",
      name: "Mrs. Manjulatai Bhojraj Bhondekar",
      title: "President, Bhondekar Shikshan Sanstha",
      quote:
        "I formally welcome you to BSS. I encourage you to pursue education with discipline and integrity. Within this institution, knowledge refines character and values cultivate leadership. Dedicate yourselves to learning and excellence for the progress of society and the nation.",
    },
  ];

  return (
    <div className="founders-section py-5 mb-100">
      <div className="container position-relative">
        <h2 className="section_heading text-center mb-2">Our Founders</h2>
        <p className="section_para text-center mb-5">
          BSS, Bhandara, since 2002, is a trusted name in medical and nursing
          education.
        </p>

        {/* ✅ Wrap Swiper inside a relative container */}
        <div className="founder-slider-wrapper position-relative">
          {/* Custom buttons OUTSIDE the Swiper */}
          <button className="custom-swiper-prev">
            <LeftArrow />
          </button>
          <button className="custom-swiper-next">
            <RightArrow />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="founder-swiper"
          >
            {founders.map((founder, index) => (
              <SwiperSlide key={index}>
                <div className="row align-items-center justify-content-center founder-slide">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="img-fluid founder-img"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <p className="founder-text mb-5">{founder.quote}</p>
                      <div className="founder-signature d-flex align-items-center justify-content-between">
                        <div>
                          <h5 className="fw-bold mb-1 founder-name">
                            {founder.name}
                          </h5>
                          <p className="founder-title mb-0">
                            {founder.title}
                          </p>
                        </div>
                        {founder.founderSign && (
                          <img
                            src={founder.founderSign}
                            alt="Signature"
                            className="founder-sign ms-3"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Founders;


