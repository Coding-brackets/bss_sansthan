import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PiYoutubeLogo } from "react-icons/pi";
import Popup from "./Popup";
import QuickRegistrationForm from "./QuickRegistrationForm";
import { IoMdClose, IoMdShareAlt } from "react-icons/io";
import { motion } from "framer-motion";

const SideLinks = () => {
  const [showCollegeModal, setShowCollegeModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [open, setOpen] = useState(false);

  const handleCollegeClose = () => setShowCollegeModal(false);

  const handleShowCollegeModal = () => setShowCollegeModal(true);

  const handleQuickRegister = (college) => {
    // Close college modal first
    setShowCollegeModal(false);
    setSelectedCollege(college);

    // Wait for close animation, then open form
    setTimeout(() => {
      setShowFormModal(true);
    }, 200);
  };

  const handleFormClose = () => setShowFormModal(false);

  return (
    <>
      <div className="side_links">
        <Link href="/" className="side_social_link facebook">
          <span>Facebook</span>
          <FaFacebookF className="ms-3" />
        </Link>
        <Link href="/" className="side_social_link twitter">
          <span>Twitter</span>
          <BsTwitterX className="ms-3" />
        </Link>
        <Link href="/" className="side_social_link insta">
          <span>Instagram</span>
          <FaInstagram className="ms-3" />
        </Link>
        <Link href="/" className="side_social_link youtube">
          <span>Youtube</span>
          <PiYoutubeLogo className="ms-3" />
        </Link>
      </div>

      {/* mobile view */}

      {/* Floating Social Button */}
      <div className="mobile-floating-container d-md-none">
        {/* Toggle Button */}
        <button className="floating-btn" onClick={() => setOpen(!open)}>
          {open ? <IoMdClose size={28} /> : <IoMdShareAlt size={28} />}
        </button>

        {/* Expanded Icons */}
        {open && (
          <div className="floating-icons">
            <Link href="/" className="mobileicon-box facebook_icon-box">
              <FaFacebookF />
            </Link>

            <Link href="/" className="mobileicon-box icon-box_insta">
              <FaInstagram />
            </Link>

            <Link href="/" className="mobileicon-box icon-box_x">
              <BsTwitterX />
            </Link>

            <Link href="/" className="mobileicon-box icon-box_youtube">
              <PiYoutubeLogo />
            </Link>
          </div>
        )}
      </div>

      <div className="register_btn">
        <motion.button
          onClick={handleShowCollegeModal}
          className="register_btn"
          whileHover={{
            scale: 1.08,
            rotate: 2,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Register Now
        </motion.button>
      </div>

      {/* College selection popup */}
      {showCollegeModal && (
        <Popup
          onClose={handleCollegeClose}
          onQuickRegister={handleQuickRegister}
        />
      )}

      {/* Registration form popup */}
      {showFormModal && (
        <QuickRegistrationForm
          collegeName={selectedCollege}
          onClose={handleFormClose}
        />
      )}
    </>
  );
};

export default SideLinks;
