import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion as Motion } from "framer-motion";
 // ✅ import Framer Motion

const HeroSection = () => {
  // Optional animation variants (for reuse)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="container-fluid mb-100">
      <div className="hero_section my-40">
        <div className="row heroBanner position-relative">
          {/* Left content */}
          <div className="col-md-6 p-0">
            <div className="hero_content cust_p-80">
              <Motion.h4 variants={itemVariants} initial="hidden" animate="visible">
                Committed to Excellence in nursing courses
              </Motion.h4>

              <Motion.h1 variants={itemVariants} initial="hidden" animate="visible">
                Welcome to Bhondekar Shikshan Sanstha! <span>(BSS)</span>
              </Motion.h1>

              <Motion.p variants={itemVariants} initial="hidden" animate="visible">
                Bhondekar Shiksha Sansthan, Bhandara, since 2002, is a trusted name in
                medical and nursing education. The institution is dedicated to nurturing
                skilled healthcare professionals through world-class teaching, modern
                facilities, advancement of medical research and learning. With a strong
                foundation of ethics and excellence, we inspire students to serve humanity
                through knowledge and innovation.
              </Motion.p>

              <div className="hero_btns">
                {/* ✅ Animated Button */}
                <Motion.button
                  className="hero_btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  About Us <MdArrowOutward className="ms-2 angle_arrow" />
                </Motion.button>

                <Motion.button
                  className="hero_btn_outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Get Connected
                </Motion.button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="col-md-6 border_right">
            <div   
            >
              <img src="/assets/heroimg.png" alt="Hero" className="hero_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
