import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Colleges = () => {
  const colleges = [
    {
      img: "/assets/college3.jpg",
      tag: "B.A | M.A.",
      title: "Dr. Babasaheb Ambedkar Residential MR School, Bhandara",
      desc: "Manjulabai Bhondekar College was established by Late Founder of Bhondekar Sanskrutik, Krida Va Samajik Shikshan Sanstha, Bhandara.",
      url: "/colleges/manju-bai-college",
    },
    {
      img: "/assets/college2.png",
      tag: "B.Sc | M.Sc | R.G.N.M | R.A.N.M.",
      title: "Late Jamunabai Bhondekar Residential MR School, Umri",
      desc: "The trust initiated nursing education with ANM (Auxiliary Nursing Midwifery) in 2009 and added GNM (General Nursing Midwifery) in 2011.",
      url: "/colleges/swayamsevi-janmubai-madhyamik-shala",
    },
    {
      img: "/assets/college1.png",
      tag: "B.A | M.A.",
      title: "Sant Gadgebaba Residential MR School, Nerla",
      desc: "Dr. Babasaheb Ambedkar Niwasi Matimand School, Bhandara was established in 2002 by Late Shri. Bhojraiji Bhondekar, Founder.",
      url: "/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school",
    },
    {
      img: "/assets/college3.jpg",
      tag: "B.A | M.A.",
      title: "Dr. Babasaheb Ambedkar Residential MR School, Bhandara",
      desc: "Manjulabai Bhondekar College was established by Late Founder of Bhondekar Sanskrutik, Krida Va Samajik Shikshan Sanstha, Bhandara.",
      url: "/colleges/manju-bai-college",
    },
    {
      img: "/assets/college2.png",
      tag: "B.Sc | M.Sc | R.G.N.M | R.A.N.M.",
      title: "Late Jamunabai Bhondekar Residential MR School, Umri",
      desc: "The trust initiated nursing education with ANM (Auxiliary Nursing Midwifery) in 2009 and added GNM (General Nursing Midwifery) in 2011.",
      url: "/colleges/swayamsevi-janmubai-madhyamik-shala",
    },
    {
      img: "/assets/college1.png",
      tag: "B.A | M.A.",
      title: "Sant Gadgebaba Residential MR School, Nerla",
      desc: "Dr. Babasaheb Ambedkar Niwasi Matimand School, Bhandara was established in 2002 by Late Shri. Bhojraiji Bhondekar, Founder.",
      url: "/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school",
    },
  ];

  /** Slick Carousel Settings */
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 992, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-100">
      <div className="container">
        <h2 className="section_heading text-center mb-3">Colleges Under Society</h2>

        <p className="section_para text-center mb-5 m-auto college_para">
          We operate a network of institutions offering comprehensive programs in medical, nursing, and allied health sciences. Each college upholds the values of integrity, excellence, and social commitment, preparing students for success in the healthcare sector.
        </p>

        <Slider {...settings} className="college-slider">
          {colleges.map((college, index) => (
            <div key={index}>
              <div className="college_card">
                <Link href={college.url}>
                  <div className="p-3">
                    <div className="college_img_wrapper">
                      <Image
                        src={college.img}
                        alt={college.title}
                        width={1000}
                        height={1000}
                      />
                      <span className="college_tag">{college.tag}</span>
                    </div>
                  </div>
                  <div className="college_content">
                    <h4>{college.title}</h4>
                    <p className="mb-0">{college.desc}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Colleges;
