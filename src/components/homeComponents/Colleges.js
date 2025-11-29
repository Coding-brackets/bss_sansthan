"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Colleges = () => {
  const colleges = [
    {
      img: "/assets/college3.jpg",
      tag: "B.A | M.A.",
      title: "This school provides a supportive residential learning atmosphere for students with special needs. With dedicated teachers and a caring campus, children grow with confidence and essential life skills for a better future.",
      url: "/colleges/manju-bai-college",
    },
    {
      img: "/assets/college2.png",
      tag: "B.Sc | M.Sc | R.G.N.M | R.A.N.M.",
      title: "A safe and nurturing home for differently-abled learners. The school focuses on education and emotional support, ensuring each child receives equal opportunities and respect while learning and living in a positive environment.",
      url: "/colleges/swayamsevi-janmubai-madhyamik-shala",
    },
    {
      img: "/assets/college1.png",
      tag: "B.A | M.A.",
      title: "Sant Gadgebaba Residential MR School, Nerla",
      desc: "Sant Gadgebaba School is built on compassion! This institution empowers special-needs students through training and co-curricular learning. Promotes independence and dignity, helping every child discover their abilities with care.",
      url: "/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school",
    },
    {
      img: "/assets/college3.jpg",
      tag: "B.A | M.A.",
      title: "Manjulabai Bhondekar College B.A. (Administrative Services), Bhandara",
      desc: "This college prepares students for administrative and government-sector careers. With experienced faculty and competitive exam guidance, learners build confidence for future roles in public service and administration.",
      url: "/colleges/manju-bai-college",
    },
    {
      img: "/assets/college2.png",
      tag: "B.Sc | M.Sc | R.G.N.M | R.A.N.M.",
      title: "Late Jamnabai Bhondekar College B.A. (Administrative Services), Navegaonbandh",
      desc: "Focusing on academic excellence and professional readiness, the college offers a structured B.A. program for students aiming for public administration fields. Workshops and interactive sessions help learners grow academically.",
      url: "/colleges/swayamsevi-janmubai-madhyamik-shala",
    },
    {
      img: "/assets/college1.png",
      tag: "B.A | M.A.",
      title: "Universal B.A. College (Administrative Services), Nerla",
      desc: "It’s a college dedicated to creating future leaders in public administration. Students gain practical knowledge and strong understanding of governance. The campus encourages learning through discussions and academic help.",
      url: "/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school",
    },

     {
      img: "/assets/college3.jpg",
      tag: "B.A | M.A.",
      title: "Puja Nursing College, Bhandara",
      desc: "Offers advanced nursing education with modern labs, clinical training and an experienced faculty team. Students develop strong medical skills and professionalism, preparing them for rewarding careers in the healthcare sector.",
      url: "/colleges/manju-bai-college",
    },
    {
      img: "/assets/college2.png",
      tag: "B.Sc | M.Sc | R.G.N.M | R.A.N.M.",
      title: "Puja Nursing Institute, Bhandara",
      desc: "This institute trains nursing students with hands-on hospital exposure and value-oriented teaching. Learners gain confidence in patient care and ethical practice while preparing for national-level nursing opportunities and growth.",
      url: "/colleges/swayamsevi-janmubai-madhyamik-shala",
    },
    {
      img: "/assets/college1.png",
      tag: "B.A | M.A.",
      title: "Bhojraj Bhondekar Ayurvedic College",
      desc: "Focused on traditional healing and modern medical knowledge, the college offers a strong foundation in Ayurveda. Students study herbal medicine, therapies and clinical practice, preparing for careers in natural health care and research.",
      url: "/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school",
    },
     {
      img: "/assets/college3.jpg",
      tag: "B.A | M.A.",
      title: "Bhojrajji Bhondekar Physiotherapy College",
      desc: "The college provides quality physiotherapy education with advanced labs, expert faculty and real hospital practice. Students learn rehabilitation techniques & patient treatment approaches, preparing them for successful roles in physiotherapy.",
      url: "/colleges/manju-bai-college",
    },
    {
      img: "/assets/college2.png",
      tag: "B.Sc | M.Sc | R.G.N.M | R.A.N.M.",
      title: "PES Hospital and Research Centre, Bhandara",
      desc: "A well-equipped medical center offering patient-focused healthcare services. The hospital supports learning and advanced treatment facilities. Students work together, gaining experience through modern diagnostic and emergency care systems.",
      url: "/colleges/swayamsevi-janmubai-madhyamik-shala",
    },
    {
      img: "/assets/college1.png",
      tag: "B.A | M.A.",
      title: "PES Ayurvedic Hospital, Bhandara",
      desc: "Dedicated to natural healing, this hospital provides Ayurvedic treatments including Panchakarma, herbal therapy and lifestyle care. With trained doctors, patients receive holistic wellness support while students gain hands-on learning.",
      url: "/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school",
    },
    {
      img: "/assets/college1.png",
      tag: "B.A | M.A.",
      title: "Bhojrajji Bhondekar Medical College, Bhandara (Proposed)",
      desc: "The upcoming medical college aims to provide world-class medical education, research opportunities and advanced healthcare services. It is planned to include modern labs, experienced faculty, and a future-ready campus for aspiring doctors.",
      url: "/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school",
    },
  ];


  return (
    <section className="mb-100">
      <div className="container">
        <h2 className="section_heading text-center mb-3">
          Colleges Under Society
        </h2>

        <p className="section_para text-center mb-5 m-auto college_para">
          We operate a network of institutions offering comprehensive programs in medical, nursing, and allied health sciences. Each college upholds the values of integrity, excellence, and social commitment, preparing students for success in the healthcare sector.
        </p>

        <Swiper
          modules={[ Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          // navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 5000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="college-slider py-5"
        >
          {colleges.map((college, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Colleges;
