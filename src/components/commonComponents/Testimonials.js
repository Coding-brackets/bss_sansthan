import Slider from "react-slick";

import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import LeftArrow from "../svg/leftArrow";
import RightArrow from "../svg/rightArrow";


const Testimonials = () => {
  const testimonials = [
    {
      text: "Students describe BSS as a place where learning meets purpose. From supportive faculty to real-world hospital exposure, the institution provides the perfect environment to master medical skills, build confidence and prepare for a rewarding healthcare career.",
      name: "James Parker",
      role: "Operations Lead at TechEdge",
      img: "/assets/user.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />

    },
    {
      text: "BSS provides an amazing balance of academics and hands-on learning. The exposure I received during my clinical sessions gave me the confidence to step into my career with ease.",
      name: "James Parker",
      role: "Operations Lead at TechEdge",
      img: "/assets/user.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />
    },
    {
      text: "BSS provides an amazing balance of academics and hands-on learning. The exposure I received during my clinical sessions gave me the confidence to step into my career with ease.",
      name: "James Parker",
      role: "Operations Lead at TechEdge",
      img: "/assets/user.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />
    },
    {
      text: "BSS provides an amazing balance of academics and hands-on learning. The exposure I received during my clinical sessions gave me the confidence to step into my career with ease.",
      name: "James Parker",
      role: "Operations Lead at TechEdge",
      img: "/assets/user.png",
      socialLink: "/",
      socialIcon: <FaXTwitter />
    },
  ];

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 768, // for tablets & below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 1024, // for laptops
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },
  ],
};

  return (
    <section className="testimonial_section pb-100">
      <div className="container text-center">
        <h2 className="section_heading ">What do our students say?</h2>
        <div className="testimonial_slider_wrapper">
          <Slider {...settings} className="single-item">
            {testimonials.map((item, i) => (
              <div key={i} className="testimonial_item">
                <div className="testimonial_card mx-auto">
                  <p className="testimonial_text">{item.text}</p>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between gap-3 mt-3">
                  <div className="testimonial_detail d-flex align-items-center justify-content-start gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className=""
                      width="50"
                      height="50"
                    />
                    <div className="text-start">
                      <h6 className="">{item.name}</h6>
                      <small className="">{item.role}</small>
                    </div>
                    </div>
                    <a href={item.socialLink} className="socialLink">{item.socialIcon}</a>
                    
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-next custom-arrow" onClick={onClick}>
            <RightArrow />

    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev custom-arrow" onClick={onClick}>
            <LeftArrow />

    </div>
  );
};

export default Testimonials;
