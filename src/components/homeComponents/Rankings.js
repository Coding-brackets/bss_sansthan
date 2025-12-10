"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Rankings = ({ title, highlight, description, image }) => {
  return (
    <div className="container-fluid mb-100 p-0">
      <div className="my-40 rankings_banner">
        {/* Title */}
        <motion.h2
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title} <span className="fw-bold">{highlight}</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center w-75 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={image}
            alt="Rankings"
            className="w-100 h-100"
            width={2000}
            height={1500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Rankings;
