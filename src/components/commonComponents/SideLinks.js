
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";

const SideLinks = () => {
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
        <div className="register_btn">
          <Link href="/register">Register Now</Link>
        </div>
      </div>
    </>
  );
};

export default SideLinks;
