import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Founders = () => {
  const founders = [
  {
    id: 1,
    image: "/assets/leader&founders/founder1.png",
    founderSign: "",
    name: "Mrs. Manjulatai Bhojraj Bhondekar",
    title: "President, Bhondekar Shikshan Sanstha",
    quote:
      "Our Institution upholds the motto “Education is Life,” providing quality learning. We empower students to dream big and achieve excellence in every field.",
  },
  {
    id: 1,
    image: "/assets/leader&founders/founder1.png",
    founderSign: "",
    name: "Mrs. Manjulatai Bhojraj Bhondekar",
    title: "President, Bhondekar Shikshan Sanstha",
    quote:
      "Our Institution upholds the motto “Education is Life,” providing quality learning. We empower students to dream big and achieve excellence in every field.",
  },
  // You can add more founders here...
];
  return (
    <div className="founders-section py-5 mb-100">
      <div className="container">
        <h2 className="section_heading text-center mb-2">Our Founders</h2>
        <p className="section_para text-center mb-5">
          BSS, Bhandara, since 2002, is a trusted name in medical and nursing
          education.
        </p>

        <Swiper
           modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false, // continue after manual navigation
          //   pauseOnMouseEnter: true, // pause when hovered
          // }}
          // speed={1000} // smooth transition
          className="founder-swiper"
          
        >
          {founders.map((founder, index) => (
            <SwiperSlide key={index}>
              <div className="row align-items-center justify-content-center founder-slide">
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="img-fluid  founder-img"
                  />
                </div>
                <div className="col-md-6 ">
                  <div className="d-flex flex-column justify-content-between h-100">
                  <p className="founder-text mb-5">{founder.quote}</p>
                  <div className="founder-signature d-flex align-items-center">
                    <div>
                      <h5 className="fw-bold mb-1 founder-name">{founder.name}</h5>
                      <p className="founder-title mb-0">{founder.title}</p>
                    </div>
                    {founder.sign && (
                      <img
                        src={founder.sign}
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
  );
};

export default Founders;

