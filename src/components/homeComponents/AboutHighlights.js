import React from "react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import CircleCheck from "../svg/CircleCheck";

const AboutHighlights = ({ cards = [] }) => {
  

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
                <CircleCheck className="badge_check" />
              
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
