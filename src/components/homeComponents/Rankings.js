"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Rankings = () => {
  return (
    <div className="container-fluid mb-100 p-0">
      <div className="my-40 rankings_banner">
        <motion.h2
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Proudly Distinguished{" "}
          <span className="fw-bold">by Our Prestigious Rankings and Accreditations</span>
        </motion.h2>

        <motion.p
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          BSS is recognized for excellence in healthcare education and clinical research.
          The institution’s programs are known for their rigorous academic standards and
          strong focus on community health. Through quality teaching and dedicated service,
          BSS continues to set benchmarks in nursing and allied health sciences.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/ranking_img.png"
            alt=""
            className="w-100 h-100"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Rankings;
