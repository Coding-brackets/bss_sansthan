import React, { useEffect } from "react";
import { FaFacebookF, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import SideLinks from "./SideLinks";
import { Instagram, InstagramIcon } from "lucide-react";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { PiYoutubeLogo } from "react-icons/pi";
import Image from "next/image";

const Footer = () => {
   useEffect(() => {
    // GTranslate settings
    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      detect_browser_language: true,
      languages: ["en", "mr"],
      wrapper_selector: ".gtranslate_wrapper",
    };

    // Load dropdown.js script
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="footer_section">
      {/* top bar */}
      <div className="footer_top">
        <div className="container">
          <div className="footer_top_banner">
            <div className="footer_top1">
              <div className="footer_social_links">
                {/* <SocialIcon/> */}
                <Link href="" className="insta border-0">
                  <Instagram strokeWidth={1.75} />
                </Link>
                <Link href="" className="facebook border-0">
                  <FaFacebookF />
                </Link>
                <Link href="" className="twitter border-0">
                  <BsTwitterX />
                </Link>
                <Link href="" className="youtube border-0">
                  <PiYoutubeLogo />
                </Link>
              </div>
            </div>
            <div className="footer_top2 d-flex justify-content-center">
              <div className="footer_logo_sec">
                <Link href="/">
                  <Image
                    src="/assets/footer-mainlogo.png"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="footer-mainLogo w-100 h-100"
                  />
                </Link>

                <Image
                  src="/assets/footerlogo.png"
                  alt=""
                  className="w-100 h-100 footer-logo"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="footer_top3 d-flex justify-content-end align-items-center">
              <div className="footer-subscribe-form">
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
            <div className="gtranslate_wrapper"></div>
            <div className="footer_content_sec">
              <h4>
                About
                <br /> Bhondekar Shikshan Sanstha
                <br /> Maharashtra
              </h4>
              <p>
               Bhondekar Shikshan Sanstha Bhandara is a reputed educational organization advancing quality learning across primary schools, higher secondary schools, senior secondary schools, undergraduate & postgraduate colleges. Founded on academic excellence, the institution represents a strong presence within Maharashtra’s evolving education landscape.
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
            <h4 className="footer-quick-links">Quick Links</h4>
            <div className="d-flex flex-column footer_quick_links">
              <Link href="/about-us">
                <IoIosArrowForward className="footer_icon me-2" />
                About
              </Link>
              <Link href="/socity">
                <IoIosArrowForward className="footer_icon me-2" />
                Our Institutions
              </Link>
              <Link href="/news">
                <IoIosArrowForward className="footer_icon me-2" />
                News & Events
              </Link>
              <Link href="/gallery">
                <IoIosArrowForward className="footer_icon me-2" />
                Gallery
              </Link>
              <Link href="/career">
                <IoIosArrowForward className="footer_icon me-2" />
                Career
              </Link>
              <Link href="/socity">
                <IoIosArrowForward className="footer_icon me-2" />
                Infrastructure & Facilities
              </Link>
              <Link href="/contact-us">
                <IoIosArrowForward className="footer_icon me-2" />
                Contact Us
              </Link>
              {/* <Link href="/sitemap">
                <IoIosArrowForward className="footer_icon me-2" />
                Sitemap
              </Link> */}
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
            <Link href="/sitemap" className="me-3">
              Sitemap
            </Link>
            <Link href="#" className="me-3">
              Terms of Service
            </Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div>
        <SideLinks />
      </div>
      <Link href="#" className="whatsapp_messaging">
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default Footer;
