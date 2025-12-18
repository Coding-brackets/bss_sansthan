import React from "react";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Vacancy = ({cards, heading}) => {

  return (
    <section className="career-highlights mb-80">
      <div className="container">

      <h2 className="section_heading text-center mb-4">{heading}</h2>
        {/* <div className="row g-2 justify-content-center"> */}
          <Swiper
                    modules={[ Pagination]}
                    spaceBetween={15}
                    slidesPerView={3}
                    // navigation
                    pagination={{ clickable: true }}
                    // autoplay={{ delay: 5000 }}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1200: { slidesPerView: 4 },
                    }}
                    className="college-slider pb-5 row"
                  >
          {cards.map((card, index) => (
            <SwiperSlide className="col-md-6 col-lg-3 h-auto" key={index}>
              <div
                className={`highlight-card  h-100 career-card-${index}`}
                style={{ backgroundColor: card.color }}
              >
                <div
                  className="icon-wrapper1  mb-3"
                  style={{ backgroundColor: card.iconBg }}
                >
                  <Image src={card.img} alt=''  className="badge_check" width={40} height={40}/>
                </div>
                <h4 className="fw-bold mb-3 vacancy_card_title text-white">{card.title}</h4>
                <p className="mb-0 vacancy_card_para text-white">Positions: {card.text}</p>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Vacancy
