"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmpoweringCon = ({ heading, description, disabledImg }) => {
  return (
    <div className="cust_pad">
      <div className="container position-relative">
        <div className="disable_banner">

          {/* TEXT SECTION */}
          <motion.div
            className="empowering_conBanner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="section_heading mb-3">{heading}</h2>
            <p className="section_para mb-4">{description}</p>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/specialStudents" className="custom_btn">
                Learn More <ArrowUpRight className="ms-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* IMAGE + CARD */}
          <motion.div
            className="disable_img_sec"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="img-wrapper">
              <Image
                src={disabledImg}
                alt="Disabled Students"
                width={1000}
                height={1000}
              />
            </div>

            {/* FLOATING CARD */}
            <motion.div
              className="floating-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ul>
                <li><FaCheck /> Inclusive classrooms</li>
                <li><FaCheck /> Special learning materials</li>
                <li><FaCheck /> Accessible infrastructure</li>
                <li><FaCheck /> Dedicated mentors</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringCon;
