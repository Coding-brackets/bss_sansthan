
import React from 'react'
import { FaFacebookF, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import SideLinks from './SideLinks';
import { Instagram, InstagramIcon } from 'lucide-react';

const Footer = () => {
  return (
    <div className="footer_section">
      {/* top bar */}
      <div className="footer_top">
        <div className="container">
          <div className="footer_top_banner">
            <div className="footer_top1 justify-content-center">
              <div className="footer_social_links">
                <a to="">
                  <Instagram strokeWidth={1.75} />
                </a>
                <a to="">
                  <FaFacebookF />
                </a>
                <a to="">
                  <FaTwitter />
                </a>
                <a to="">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="footer_top2 d-flex justify-content-center">
              <div className="footer_logo_sec">
                <img src="/assets/footerlogo.png" alt="" />
              </div>
            </div>
            <div className="footer_top3 d-flex justify-content-center align-items-center">
              <div className="flex-column">
                <label
                  htmlFor="newsletter"
                  className="newsletter_label mb-2 fw-semibold"
                >
                  Newsletter
                </label>
                <div className="newsletter_form d-flex">
                  <input
                    type="email"
                    id="newsletter"
                    className="form-control"
                    placeholder="Enter your email..."
                  />
                  <button className="btn btn-light px-3 fw-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* middle section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <div className="footer_content_sec">
              <h4>
                About,
                <br /> Bhondekar Shikshan Sanstha
                <br /> Maharashtra
              </h4>
              <p>
                Bhondekar Shikshan Sanstha, Bhandara, is a reputed educational
                organization dedicated to advancing quality learning in
                healthcare and allied sciences. With a vision to empower
                students through academic excellence and professional values,
                the institution stands as a symbol of trust and innovation in
                Maharashtra’s education landscape.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_content_sec">
              <h4>Contact</h4>
              <p>
                <FaLocationDot className="footer_icon me-2" />
                Sahkar Nagar, Bank Colony, Kisan Chowk, Bhandara, Maharashtra
                441904
              </p>
              <p>
                <FaPhoneAlt className="footer_icon me-2" />
                +91 078230 06818
              </p>
              <p>
                <IoMail className="footer_icon me-2" />
                info@bhondekarss.com
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h4 className="text-center">Quick Links</h4>
            <div className="d-flex flex-column footer_quick_links">
              <a to="">
                <IoIosArrowForward className="footer_icon me-2" />
                Home
              </a>
              <a to="">
                <IoIosArrowForward className="footer_icon me-2" />
                About Us
              </a>
              <a to="">
                <IoIosArrowForward className="footer_icon me-2" />
                Infastructure Facilities
              </a>
              <a to="">
                <IoIosArrowForward className="footer_icon me-2" />
                Academics
              </a>
              <a to="">
                <IoIosArrowForward className="footer_icon me-2" />
                Admissions
              </a>
              <a to="">
                <IoIosArrowForward className="footer_icon me-2" />
                Under Bhondekar Education Society
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer_bottom text-white py-3 ">
        <div className="container-fluid px-5  d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">
            © Bhondekar Education Society 2025 All Rights Reserved
          </p>
          <div className="footer_policies footer_quick_links">
            <a to="#" className="me-3">
              Terms of Service
            </a>
            <a to="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div>
        <SideLinks />
      </div>
      <a to="#" className="whatsapp_messaging">
        <FaWhatsapp />
      </a>
    </div>
  )
}

export default Footer
