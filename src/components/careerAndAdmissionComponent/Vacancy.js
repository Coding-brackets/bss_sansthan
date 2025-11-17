import React from 'react'
import { BadgeCheck} from "lucide-react";
import Image from 'next/image';

const Vacancy = ({cards, heading}) => {

  return (
    <section className="career-highlights mb-80">
      <div className="container">

      <h2 className="section_heading text-center mb-4">{heading}</h2>
        <div className="row g-2 justify-content-center">
          {cards.map((card, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
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
                <p className="mb-0 vacancy_card_para text-white">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vacancy
