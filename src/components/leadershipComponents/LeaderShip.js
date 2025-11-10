"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const LeaderShip = () => {
  const [showAll, setShowAll] = useState(false);

  const leaders = [
    {
      name: "Dr. Shailesh Patil (PT)",
      designation: "Director & Professor",
      desc: "Leads medical strategy with over 20 years of experience in cardiology.",
      image: "/assets/leader&founders/leader1.png",
    },
    {
      name: "Dr. Shailesh Patil (PT)",
      designation: "Principal & Professor",
      desc: "Leads medical strategy with over 20 years of experience in cardiology.",
      image: "/assets/leader&founders/leader2.png",
    },
    {
      name: "Dr. Shubham Rathod (PT)",
      designation: "Assistant Professor",
      desc: "Leads medical strategy with over 20 years of experience in cardiology.",
      image: "/assets/leader&founders/leader3.png",
    },
    {
      name: "Dr. Muskan Bhojwani (PT)",
      designation: "Assistant Professor",
      desc: "Leads medical strategy with over 20 years of experience in cardiology.",
      image: "/assets/leader&founders/leader4.png",
    },
    {
      name: "Dr. Khushbu A. Lichade (PT)",
      designation: "Assistant Professor",
      desc: "Leads medical strategy with over 20 years of experience in cardiology.",
      image: "/assets/leader&founders/leader5.png",
    },
    {
      name: "Dr. Prerna Khairnar (PT)",
      designation: "Assistant Professor",
      desc: "Leads medical strategy with over 20 years of experience in cardiology.",
      image: "/assets/leader&founders/leader6.png",
    },
    {
      name: "Dr. Suresh Pawar (PT)",
      designation: "Associate Professor",
      desc: "Leads medical strategy with over 20 years of experience in cardiology.",
      image: "/assets/leader&founders/leader1.png",
    },
    {
      name: "Dr. Sneha More (PT)",
      designation: "Associate Professor",
      desc: "Leads medical strategy with over 20 years of experience in cardiology.",
      image: "/assets/leader&founders/leader2.png",
    },
  ];

  const displayedLeaders = showAll ? leaders : leaders.slice(0, 6);

  return (
    <section className="leaders_banner my-40 mb-100">
      <div className="container-fluid">
        <h2 className="section_heading text-center mb-3">Our Leadership</h2>
        <p className="section_para text-center mb-5 m-auto college_para">
          A team of dedicated professionals leading innovation in medical care
          and technology
        </p>

        <div className="row g-4 justify-content-center">
          {displayedLeaders.map((leader, index) => (
            <div className="col-md-6 col-xxl-6 col-sm-6" key={index}>
              <div className="leader-card  d-flex gap-4">
                <div className="leader-img ">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="leader_content d-flex flex-column justify-content-between">
                  <div>
                    <h4>{leader.name}</h4>
                    <h6 className="text-muted small mb-3">
                      {leader.designation}
                    </h6>
                    <p>{leader.desc}</p>
                  </div>
                  <div className="d-flex gap-3 social-icons ">
                    <Link href="">
                      <FaInstagram />
                    </Link>
                    <Link href="">
                      <FaFacebookF />
                    </Link>
                    <Link href="">
                      <FaXTwitter />
                    </Link>
                    <Link href="">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className=" commonbtn px-4 py-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View All"}{" "}
            <ArrowUpRight className="ms-2" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default LeaderShip;
