import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { TbBell } from "react-icons/tb";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container-fluid p-0">
      <div className="navbar_section my-40">
        <div className="nav1 d-flex align-items-center">
          <div className="navbar_logo">
            <Link href="/">
              <img src="/assets/logo.png" alt="" className="w-100" />
            </Link>
          </div>
        </div>
        <div className="nav2">
          <div className="bell_icon">
            <TbBell className="" />
          </div>
          <div className="news_scroll_sec">
            <div className="scroll-content">
              <a href="#">
                🎓 Admission Open for 2025–26 – Apply now for B.Sc. Nursing, GNM
                & ANM programs
              </a>{" "}
              |<a href="#">🧬 Workshop on Healthcare Innovations</a> |
              <a href="#">🏥 Campus Placements 2025 – Register Today!</a>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) -57.89%, #FFFFFF 73.68%)",
            }}
          />
        </div>
        <div className="nav3 navbar_Social_links">
          <div className="">
            <a href="">
              <IoCallOutline className="nav-icon" />
            </a>
            <a href="">
              <CiMail className="nav-icon" />
            </a>
            <a href="">
              <IoLocationOutline className="nav-icon" />
            </a>
          </div>
        </div>
        <div className="nav4">
          {/* Navbar Menu Section */}
          <div className="navbar_menu_wrapper ">

            <div className="navbar_menu d-none d-lg-flex d-flex">
              {/* <a href="">About</a> */}

              <div className="dropdown d-flex align-items-center">
                <button className="dropbtn  nav_drop_btn">
                  About <IoIosArrowDown className="ms-1" />
                </button>
                <div className="dropdown-content">
                  <a href="#">About Us</a>
                  <a href="#" className="border-bottom-0">Our Leadership</a>
                </div>
              </div>

              {/* Our Institutions Dropdown */}
              <div className="dropdown d-flex align-items-center">
                <button className="dropbtn nav_drop_btn">
                  Our Institutions <IoIosArrowDown className="ms-1" />
                </button>
                <div className="dropdown-content">
                  <div className="dropdown-item ">
                    <div className="drop_btns d-flex justify-content-between align-items-center border-top-0">
                      <span>Colleges</span>
                      <IoIosArrowForward />
                    </div>
                    <div className="dropdown-submenu">
                      <a href="#" className="border-top-0 bg-transparent">Pooja Nursing College</a>
                      <a href="#">Bhagyashri Bhondekar Ayurvedic College</a>
                      <a href="#">Bhagyashri Bhondekar Physiotherapy</a>
                      <a href="#">Bhagyashri Bhondekar Medical College</a>
                       <a href="#">PES Multispeciality Hospital</a>
                      <a href="#">Manjubai BA/MA College, Bhawani</a>
                       <a href="#">Dr. Babasaheb Ambedkar Mosa Mahavidyalaya School</a>
                      <a href="#">Universal BA College</a>
                      <a href="#">Sant Gadge Baba Madhyamik Shala</a>
                      <a href="#" >Swayamsevi Janmubai Madhyamik Shala</a>
                      <a href="#" className="border-bottom-0 bg-transparent">Swayamsevi Janmubai Bhondekar College</a>
                    </div>
                  </div>
                  <a href="#">Hospitals</a>

                  <a href="#">Research & Training Center</a>
                  <a href="#" className="border-bottom-0 bg-transparent">Specially Abled Support</a>
                </div>
              </div>

              <a href="">News & Events</a>
              <a href="">Gallery</a>
              <a href="">Admissions</a>
              <a href="">Career</a>
              <a href="">Infrastructure & Facilities</a>
              <a href="">Contact Us</a>
            </div>

            {/* Hamburger for mobile only */}
            <button
              className="menu-toggle d-lg-none border-0 bg-transparent p-2"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile_sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar_header d-flex justify-content-between align-items-center">
          <Link href="/">
            <img src="/assets/logo.png" alt="" className="w-100" />
          </Link>
          <button
            className="border-0 bg-transparent"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        <div className="sidebar_links">
          <a href="">About</a>
          <a href="">Infrastructure Facilities</a>
          <a href="">News</a>
          <a href="">Admissions</a>
          <a href="">Under BSS Education Society</a>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="sidebar_overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
