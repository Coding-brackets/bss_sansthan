import React from "react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const AboutHighlights = () => {
  const cards = [
    {
      title: "History",
      text: "Founded in 2002, BSS began its journey with a vision to provide inclusive and advanced medical education in Bhandara. Over two decades, the institution has established nursing, physiotherapy and Ayurvedic colleges that now serve as pillars of healthcare learning in the Vidarbha region.",
      color: "#FF77654D",
      iconBg: "#FF7765",
    },
    {
      title: "Aim",
      text: "Aims to produce competent, compassionate, and ethical healthcare professionals. The institution focuses on blending scientific knowledge with human values, ensuring that every graduate contributes meaningfully to society’s well-being. We inspire lifelong learning and dedication in every aspiring healthcare professional.",
      color: "#D2EDFF",
      iconBg: "#289EEE",
    },
    {
      title: "Objectives",
      text: "We are committed to transforming Bhandara district into a center of excellence for advanced education and modern healthcare. By expanding educational and employment opportunities for the youth of Vidarbha, Bhondekar Shiksha Sansthan strives to empower communities through knowledge and service.",
      color: "#E6F8AF",
      iconBg: "#9CC71A",
    },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section className="about-highlights mb-100">
      <div className="container">
        <div className="about_row justify-content-center">
          {cards.map((card, index) => (
            <motion.div
              className="p-0"
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
            >
              <div
                className={`highlight-card text-center h-100 card-${index}`}
                style={{ backgroundColor: card.color }}
              >
                <div
                  className="icon-wrapper1 mx-auto mb-3"
                  style={{ backgroundColor: card.iconBg }}
                >
                  <BadgeCheck color="#fff" className="badge_check" />
                </div>
                <h4 className="fw-bold mb-3 about_card_title">{card.title}</h4>
                <p className="mb-0 about_card_para">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHighlights;
