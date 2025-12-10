"use client";
import React from "react";
import { motion as Motion } from "framer-motion";
import Building from "../svg/Building";
import Graduation from "../svg/graduationCap";
import Certificate from "../svg/Certificate";
import User from "../svg/User";

const BssStats = ({ stats = [] }) => {


  // Wrapper animation (stagger children)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Each item fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bss-stats-section mb-100">
      <div className="container">
        <Motion.div
          className="statsBanner overflow-hidden"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((item, index) => (
            <Motion.div key={index} className="bss-stat-card d-flex" variants={fadeUp}>
              <div className="bss-icon-box">
                <span>{item.iconimg}</span>
              </div>
              <div className="ms-2">
                <h2 className="bss-number mb-0">{item.number}</h2>
                <p className="bss-label">{item.label}</p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default BssStats;
