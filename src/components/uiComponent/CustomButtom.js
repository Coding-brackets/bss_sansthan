"use client";
import React from "react";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation hook
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CustomButton = ({
  text = "Submit",
  url = "",
  variant = "",
  className = "",
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      router.push(url); // ✅ Next.js navigation
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`commonbtn btn-${variant} ${className}`}
      onClick={handleClick}
    >
      {text}
      <ArrowUpRight className="ms-2" />
    </motion.button>
  );
};

export default CustomButton;
