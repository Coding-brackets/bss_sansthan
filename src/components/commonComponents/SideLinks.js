import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";
import Popup from "./Popup";
import QuickRegistrationForm from "./QuickRegistrationForm";

const SideLinks = () => {
  const [showCollegeModal, setShowCollegeModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState("");

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
          <FaFacebookF />
          <span>Facebook</span>
        </Link>
        <Link href="/" className="side_social_link twitter">
          <FaTwitter />
          <span>Twitter</span>
        </Link>
        <Link href="/" className="side_social_link insta">
          <FaInstagram />
          <span>Instagram</span>
        </Link>
        <Link href="/" className="side_social_link youtube">
          <PiYoutubeLogo />
          <span>Youtube</span>
        </Link>
      </div>

      <div className="register_btn">
        <button onClick={handleShowCollegeModal} className="register_btn">
          Register Now
        </button>
      </div>

      {/* College selection popup */}
      {showCollegeModal && (
        <Popup onClose={handleCollegeClose} onQuickRegister={handleQuickRegister} />
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
