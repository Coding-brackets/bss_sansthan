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
              <Link href="#">
                🎓 Admission Open for 2025–26 – Apply now for B.Sc. Nursing, GNM
                & ANM programs
              </Link>{" "}
              |<Link href="#">🧬 Workshop on Healthcare Innovations</Link> |
              <Link href="#">🏥 Campus Placements 2025 – Register Today!</Link>
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
            <Link href="">
              <IoCallOutline className="nav-icon" />
            </Link>
            <Link href="">
              <CiMail className="nav-icon" />
            </Link>
            <Link href="">
              <IoLocationOutline className="nav-icon" />
            </Link>
          </div>
        </div>
        <div className="nav4">
          {/* Navbar Menu Section */}
          <div className="navbar_menu_wrapper ">

            <div className="navbar_menu d-none d-lg-flex d-flex">
              {/* <Link href="">About</Link> */}

              <div className="dropdown d-flex align-items-center">
                <button className="dropbtn  nav_drop_btn">
                  About <IoIosArrowDown className="ms-1" />
                </button>
                <div className="dropdown-content">
                  <Link href="/about-us" className="border-top-0 bg-transparent">About Us</Link>
                  <Link href="/leadership" className="border-bottom-0 bg-transparent">Our Leadership</Link>
                </div>
              </div>

              {/* Our Institutions Dropdown */}
              <div className="dropdown d-flex align-items-center">
                <button className="dropbtn nav_drop_btn">
                  Our Institutions <IoIosArrowDown className="ms-1" />
                </button>
                <div className="dropdown-content">
                  <div className="dropdown-item ">
                    <div className="drop_btns d-flex justify-content-between align-items-center border-top-0 bg-transparent">
                      <span>Colleges</span>
                      <IoIosArrowForward />
                    </div>
                    <div className="dropdown-submenu">
                      <Link href="#" className="border-top-0 bg-transparent">Pooja Nursing College</Link>
                      <Link href="#">Bhagyashri Bhondekar Ayurvedic College</Link>
                      <Link href="#">Bhagyashri Bhondekar Physiotherapy</Link>
                      <Link href="#">Bhagyashri Bhondekar Medical College</Link>
                       <Link href="#">PES Multispeciality Hospital</Link>
                      <Link href="#">Manjubai BA/MA College, Bhawani</Link>
                       <Link href="#">Dr. Babasaheb Ambedkar Mosa Mahavidyalaya School</Link>
                      <Link href="#">Universal BA College</Link>
                      <Link href="#">Sant Gadge Baba Madhyamik Shala</Link>
                      <Link href="#" >Swayamsevi Janmubai Madhyamik Shala</Link>
                      <Link href="#" className="border-bottom-0 bg-transparent">Swayamsevi Janmubai Bhondekar College</Link>
                    </div>
                  </div>
                  <Link href="#">Hospitals</Link>

                  <Link href="#">Research & Training Center</Link>
                  <Link href="#" className="border-bottom-0 bg-transparent">Specially Abled Support</Link>
                </div>
              </div>

              <Link href="">News & Events</Link>
              <Link href="">Gallery</Link>
              <Link href="">Admissions</Link>
              <Link href="">Career</Link>
              <Link href="">Infrastructure & Facilities</Link>
              <Link href="">Contact Us</Link>
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
          <Link href="">About</Link>
          <Link href="">Infrastructure Facilities</Link>
          <Link href="">News</Link>
          <Link href="">Admissions</Link>
          <Link href="">Under BSS Education Society</Link>
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
