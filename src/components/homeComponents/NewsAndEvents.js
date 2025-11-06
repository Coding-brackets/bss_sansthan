import React from "react";
import Slider from "react-slick";
import { ArrowUpRight } from "lucide-react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import event1 from "../../../assets/news1.png";
import Button from "../../uiComponent/Button";

const NewsAndEvents = () => {
  const events = [
    {
      date: "JAN 30, 2023",
      title: "Cultural Performances",
      desc: "(27–29 January 2025)",
      img: event1,
      type: "NEWS",
    },
    {
      date: "JAN 21, 2023",
      title: "Prize Distribution & Closing Ceremony",
      desc: "(27–29 January 2025)",
      img: event1,
      type: "NEWS",
    },
    {
      date: "JAN 15, 2023",
      title: "Rhythm Annual Gathering & Magazine Launch",
      desc: "(27–29 January 2025)",
      img: event1,
      type: "EVENTS",
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1.5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="news-events mb-100">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-4">
            <h2 className="section_heading mb-3">News & Events</h2>
            <p className="section_para mb-4">
              To inspire and empower our students, we regularly organize
              academic, cultural and healthcare-driven events annually. The
              upcoming Joint Annual Gathering, Rhythm 2025 celebrates the spirit
              of service through sports, cultural programs and inspirational
              sessions by eminent guests.
            </p>
            <Button text="View All"/>
          </div>

          {/* RIGHT SIDE SLIDER */}
          <div className="col-lg-8">
            <Slider {...settings} className="news-slider">
              {events.map((event, index) => (
                <div key={index} className="news-card">
                  <div className="card-image">
                    <img src={event.img} alt={event.title} />
                    <div className="card-overlay">
                      <span className="type">
                        {event.type} – {event.date}
                      </span>
                      <h5>{event.title}</h5>
                      <p>{event.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Arrows
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next custom-arrow" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev custom-arrow" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
};

export default NewsAndEvents;
