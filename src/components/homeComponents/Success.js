"use client";
import React from "react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { LiaUserTieSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import CircleCheck from "../svg/CircleCheck";

const Success = ({ heading = "Success Stories" }) => {
  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

    const router = useRouter();
  
    const handleClick = () => {
      if (url.startsWith("http")) {
        window.open("/infrastructure-and-facilities", "_blank");
      } else {
        router.push("/infrastructure-and-facilities"); // ✅ Next.js navigation
      }
    };

  return (
    <motion.div
      className="success-section mb-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.h2
          className="section_heading text-center mb-5"
          variants={fadeUp}
        >
          {heading}
        </motion.h2>

        <div className="success-grid">
          {/* Box 1 */}
          <motion.div
            className="div1 d-flex flex-column justify-content-between"
            variants={fadeUp}
          >
            <div className="icon-wrapper1 successIcon1">
              <CircleCheck className="badge_check" />
            </div>
            <div className="success_con_box">
              <h3 className="">10,000+</h3>
              <p className="m-0">Students Regularly Enrolled</p>
            </div>
          </motion.div>

          {/* Box 2 (Image) */}
          <motion.div
            className="div2 overflow-hidden"
            variants={fadeScale}
          >
            <Image
              src="/assets/doctor2.png"
              alt="dr. examining patient"
              className="img-fluid w-100 h-100 object-fit-cover"
              width={1000}
              height={1000}
            />
          </motion.div>

          {/* Box 3 */}
          <motion.div
            className="div3 d-flex flex-column justify-content-between"
            variants={fadeUp}
          >
            <div className="icon-wrapper1 successIcon2">
              <LiaUserTieSolid color="#fff" className="badge_check" />
            </div>
            <div className="success_con_box">
              <h3 className="">7,000+</h3>
              <p className="m-0">Graduated Successfully</p>
            </div>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            className="div4 d-flex flex-column justify-content-end position-relative"
            variants={fadeUp}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <ArrowUpRight
              size={24}
              className="position-absolute top-0 end-0 m-3 text-white"
            />
            <h4 className="text-white mb-0">Explore BSS</h4>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Success;
